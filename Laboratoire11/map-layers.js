// 1. Commerces 
// Définition de la source GeoJSON
var commercesSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
    };
    
  // Définition de la couche avec symbologie par type de commerce
  var commercesLayer = {
    id: 'commerces',
    type: 'circle',
    source: 'commerces_source',
    paint: {
      // Rayon variable selon le type
      'circle-radius': [
        'match',
        ['get', 'type'],
        'Épicerie', 5,
        'Pâtisserie/Boulangerie', 7,
        'Distributrice automatique', 4,
        'Pharmacie', 6,
        'Restaurant', 5,
        3 // taille par défaut
      ],
      // Couleur variable selon le type
      'circle-color': [
        'match',
        ['get', 'type'],
        'Épicerie', 'orange',
        'Pâtisserie/Boulangerie', 'yellow',
        'Distributrice automatique', 'blue',
        'Pharmacie', 'green',
        'Restaurant', 'purple',
        'grey' // couleur par défaut
      ],
      'circle-stroke-color': '#fff',
      'circle-stroke-width': 1
    },
    filter: ['==', ['get', 'statut'], 'Ouvert']
  };
  
  // 2. Arrondissements
  var arrondissementsSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
  };
    
  // Définition de la couche avec symbologie par type de commerce
  var arrondissementsLayer = {
    id: 'arrondissements',
    type: 'fill',
    source  : 'arrondissements_source',
    paint: {
      'fill-outline-color': 'black',
      'fill-color': 'white', // Couleur aléatoire à chaque chargement
      'fill-opacity': 0.2 
    }
  };
  
  var arrondissementsLabelsLayer = {
    id: 'arrondissements_labels',
    type: 'symbol',
    source: 'arrondissements_source',
    layout: {
      'text-field': ['get', 'NOM'], // ou 'nom_offici'
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 14,
      'text-anchor': 'center'
    },
    paint: {
      'text-color': '#111',
      'text-halo-color': '#fff',
      'text-halo-width': 2
    },
    maxzoom : 13 // Affiché jusqu'au zoom 13 inclus
  };