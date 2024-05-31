/*document.addEventListener('DOMContentLoaded', function() {
    // Map initialization
    var map = L.map('map').setView([35.8617, 104.1954], 6);

    // OSM layer
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    osm.addTo(map);
});
*/
document.addEventListener('DOMContentLoaded', function() {
    // Map initialization
    var map = L.map('map').setView([35.8617, 104.1954], 4);

    // OSM Hot layer with English labels
    var osmHot = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    });
    osmHot.addTo(map);
    
    //water color: find leaflet providers preview to find the url
    var waterColor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});
    
   
   //waterColor.addTo(map);

   //google hybrid map settings
   googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});
    googleHybrid.addTo(map);

    //marker
    var myIcon = L.icon({
        iconUrl: 'img/red_icon.png',
        iconSize: [20, 20],
    });
    var marker = L.marker([35.8617, 104.1954], { icon:myIcon, draggable:true }).addTo(map);
    var popup = marker.bindPopup("This is China." + marker.getLatLng()).openPopup();
    popup.addTo(map);

    var secondMarker = L.marker([36.8617, 103.1954], { icon:myIcon, draggable:true }).addTo(map);

    //get the latitude and longitude of the marker from console
    console.log(marker.toGeoJSON());

    //layer controller
    var baseMaps = {
        "osmHot": osmHot,
        "waterColor": waterColor,
        "googleHybrid": googleHybrid
    };
    
    var overlayMaps = {
        "Marker": marker,
        "secondMarker": secondMarker
    };
    
    //map.removelayer(marker);

    L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
    L.geoJson(chinaJson, {
        onEachFeature: function(feature, layer) {
            layer.on('click', function(e) {
                var properties = feature.properties;
                var popupContent = "<b>Name:</b> " + properties.NAME_1 + "<br>" +
                                   "<b>VARNAME:</b> " + properties.VARNAME_1 + "<br>" +
                                   "<b>NL_NAME:</b> " + properties.NL_NAME_1 + "<br>" +
                                   "<b>TYPE:</b> " + properties.TYPE_1 + "<br>" +
                                   "<b>ENGTYPE:</b> " + properties.ENGTYPE_1 + "<br>" +
                                   "<b>HASC:</b> " + properties.HASC_1;
                layer.bindPopup(popupContent).openPopup();
            });
        }
    }).addTo(map);
});




