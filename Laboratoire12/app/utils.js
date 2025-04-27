// utils.js

/**
 * Supprime les layers et sources existants qui ont été ajoutés pour les clusters.
 * On ne touche pas au fond de carte (background).
 */
function removeAllLayersAndSources() {
    const style = map.getStyle();
    if (!style || !style.layers || !style.sources) return;

    // Ici on supprime uniquement les layers et sources utilisés pour les clusters
    const clusterLayerIds = ['clusters', 'cluster-count', 'unclustered-point'];
    const clusterSourceId = 'clusters-source';

    // Supprimer les layers des clusters s'ils existent
    for (const layerId of clusterLayerIds) {
        if (map.getLayer(layerId)) {
            map.removeLayer(layerId);
        }
    }

    // Supprimer la source des clusters si elle existe
    if (map.getSource(clusterSourceId)) {
        map.removeSource(clusterSourceId);
    }

    console.log("Clusters supprimés (layers + source), fond de carte intact !");
}