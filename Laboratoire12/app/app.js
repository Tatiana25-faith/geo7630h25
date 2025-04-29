// Création de la carte MapLibre
var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj',
    center: [-73.55, 45.55],
    zoom: 9,
    hash: true
});

// Contrôles de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
});
map.addControl(nav, 'top-right');

// Contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
});
map.addControl(geolocateControl, 'bottom-right');

// Échelle
var scale = new maplibregl.ScaleControl({ unit: 'metric' });
map.addControl(scale);

map.on('style.load', () => {
    saveInitialLayersAndSources();  // Appelle la fonction qui sauvegarde les sources et layers initiaux
})