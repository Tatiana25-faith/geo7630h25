function generateClusters() {
    // 1. Nettoyage : on enlève tous les layers et sources existants
    removeAllLayersAndSources();

    // 2. Ajout de la source GeoJSON avec clustering
    map.addSource('clusters-source', {
        type: 'geojson',          // Type de données utilisé
        data: randomPoints,       // Données à afficher (objet GeoJSON)
        cluster: true,            // Active le clustering
        clusterMaxZoom: 14,       // Zoom maximal pour faire le regroupement
        clusterRadius: 50       // Rayon autour des points pour créer un cluster
    });

    // 3. Layer pour afficher les cercles représentant les clusters
    map.addLayer({
        id: 'clusters',           // ID unique du layer
        type: 'circle',           // Type d'affichage : cercle
        source: 'clusters-source',// On utilise la source ajoutée plus haut
        filter: ['has', 'point_count'], // Affiche uniquement les "clusters" (agrégats de points)
        paint: {
            'circle-color': '#51bbd6', // Couleur du cercle
            'circle-radius': [
                'step',
                ['get', 'point_count'], // On adapte la taille en fonction du nombre de points dans le cluster
                20, 100, 30, 750, 40    // palier : <100 → 20, <750 → 30, sinon 40
            ]
        }
    });

    // 4. Layer pour afficher le nombre de points dans chaque cluster
    map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'clusters-source',
        filter: ['has', 'point_count'], // même condition que le layer précédent
        layout: {
            'text-field': '{point_count_abbreviated}', // Affiche le nombre (abrégé : 1k, 2.3k…)
            'text-font': ['Arial Unicode MS Bold'],
            'text-size': 12
        }
    });

    // 5. Layer pour afficher les points "isolés" (non regroupés en cluster)
    map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'clusters-source',
        filter: ['!', ['has', 'point_count']], // Affiche les points qui NE sont PAS dans un cluster
        paint: {
            'circle-color': '#f28cb1', // Couleur rose
            'circle-radius': 5         // Petit cercle
        }
    });
}

// 5. Ecouteur d'événement pour exécuter la fonction quand on clique sur le bouton
document.getElementById('generateClusters') // id unique du bouton
        .addEventListener('click', generateClusters); // ajoute un event de type click qui lance la fonction generateClusters()