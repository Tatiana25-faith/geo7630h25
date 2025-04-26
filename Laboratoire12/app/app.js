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

// Sauvegarder les sources et layers initiaux (fond de carte)
let initialLayers = [];
let initialSources = [];

map.on('style.load', () => {
    if (initialLayers.length === 0 && initialSources.length === 0) { 
        initialLayers = map.getStyle().layers.map(layer => layer.id);
        initialSources = Object.keys(map.getStyle().sources);
        console.log("Sources et layers initiaux sauvegardés !");
    }
});
// Fonction
function removeAllLayersAndSources() {
    const style = map.getStyle();
    if (!style || !style.layers || !style.sources) return;

    // Supprimer tous les layers sauf ceux qui sont initiaux (ceux du fond de carte)
    for (const layer of style.layers) {
        if (!initialLayers.includes(layer.id) && map.getLayer(layer.id)) {
            map.removeLayer(layer.id);
        }
    }

    // Supprimer toutes les sources sauf celles qui sont initiales
    for (const sourceId of Object.keys(style.sources)) {
        if (!initialSources.includes(sourceId) && map.getSource(sourceId)) {
            map.removeSource(sourceId);
        }
    }
}