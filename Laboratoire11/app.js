// chargement des couches et sources
map.on('load', function () {
    // 1. Ajouter les sources
    map.addSource('commerces_source', commercesSource);
    map.addSource('arrondissements_source', arrondissementsSource);
  
    // 2. Ajouter les couches dans le bon ordre
    map.addLayer(arrondissementsLayer);           // fond polygonal
    map.addLayer(commercesLayer);                 // points
    map.addLayer(arrondissementsLabelsLayer);     // étiquettes
  });