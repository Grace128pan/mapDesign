import provinces from 'chinaMap/provinces.js';

const map = L.map('map').setView([35.8617, 104.1954], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define a color scale for provinces based on population or any other metric
const colorScale = d3.scaleLinear()
    .domain([0, d3.max(provinces, d => d.population)])
    .range(['#f7fbff', '#08306b']);

// Loop through provinces to create polygon layers and add them to the map
provinces.forEach(province => {
    // You'll need to define the boundary coordinates for each province
    // This example uses dummy coordinates for demonstration purposes
    const boundaryCoordinates = [
        [/* coordinates for province boundary */]
    ];

    const provincePolygon = L.polygon(boundaryCoordinates, {
        fillColor: colorScale(province.population),
        fillOpacity: 0.7,
        color: 'white',
        weight: 1
    }).addTo(map);

    // Attach province information to the polygon layer
    provincePolygon.provinceInfo = province;

    // Add popup with province information when clicking on the polygon
    provincePolygon.on('click', function (e) {
        const province = e.target.provinceInfo;
        const popupContent = `
            <b>${province.name}</b><br>
            Capital: ${province.capital}<br>
            Population: ${province.population}<br>
            Local Specialities: ${province.localSpecialities.join(', ')}<br>
            Salary Range: ${province.salaryRange}
        `;
        L.popup().setLatLng(e.latlng).setContent(popupContent).openOn(map);
    });
});
