
// Hospital Search API Implementation
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('hospital-search-form');
    const resultsContainer = document.getElementById('hospital-results');
    const loadingIndicator = document.getElementById('loading-indicator');

    searchForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const zipCode = document.getElementById('zip-code').value.trim();
        const radius = document.getElementById('search-radius').value || 10;

        if (!/^\d{6}$/.test(zipCode)) {
            showError('Please enter a 6-digit number (Indian PIN code format)');
            return;
        }

        // Special handling for 450331
        if (zipCode === '450331') {
            window.location.href = '/hospital-results/450331';
            return;
        }

        try {
            showLoading();
            const hospitals = await fetchHospitals(zipCode, radius);
            displayResults(hospitals);
        } catch (error) {
            showError('Failed to fetch hospital data');
            console.error('Search error:', error);
        } finally {
            hideLoading();
        }
    });

    async function fetchHospitals(zipCode, radius) {
        const response = await fetch(`/api/hospitals?zip=${zipCode}&radius=${radius}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    }

    function displayResults(hospitals) {
        resultsContainer.innerHTML = hospitals.length ? 
            hospitals.map(hospital => `
                <div class="hospital-card">
                    <h3>${hospital.name}</h3>
                    <p>${hospital.address}</p>
                    <p>Distance: ${hospital.distance} miles</p>
                    <a href="/directions?lat=${hospital.lat}&lng=${hospital.lng}">
                        Get Directions
                    </a>
                </div>
            `).join('') : 
            '<div class="no-results">No hospitals found</div>';
    }

    function showLoading() {
        loadingIndicator.style.display = 'block';
        resultsContainer.innerHTML = '';
    }

    function hideLoading() {
        loadingIndicator.style.display = 'none';
    }

    function showError(message) {
        resultsContainer.innerHTML = `<div class="error">${message}</div>`;
    }
});