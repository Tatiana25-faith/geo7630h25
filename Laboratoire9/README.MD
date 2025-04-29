# Laboratoire 9

# Chargement de l'application

Etape 1 - Modification du code

- Modification des coordonnées de départ

var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj',
    center: [-73.55, 45.55] ,
    zoom: 12
});

- Ajout de la couche Geojson

# Etape 2 - Modification de la couleur des polygones

Dans la fonction colorPolygons() (ligne 96) du fichier .js , changez :

'color': 'red'

par :

'color': '#9f40ff' (notation Hexadécimale des couleurs)

# Etape 3 - Création d'une fonction de couleur aléatoire

- On crée un nouveau fichier randomColor.js et on y insère le code suivant :

randomColor.js


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }


# Etape 4: Application d'une couleur aléatoire aux polygones

Modifiez la fonction colorPolygons() pour utiliser randomColor() à la place de la couleur codé en dur :

'color': randomColor()

# Etape 5 - Ajout d'une coloration thématique

Remplacez randomColor() par une symbologie thématique basé sur l’attribut operator_id :

{
  property: 'operator_id',
  stops: [
    [2, randomColor()],
    [3, randomColor()],
    [15, randomColor()],
    [20, randomColor()],
    [25, randomColor()],
    [30, randomColor()]
  ]
 }


# Etape 6 - Utilisation dans un style MapLibreGL

Ce type de paramètre est souvent utilisé dans la propriété fill-color d’un layer de type fill pour colorier des polygones en fonction de l’attribut operator_id :

map.addLayer({
  'id': 'garages-layer',
  'type': 'fill',
  'source': 'geojson-source',
  'paint': {
    'fill-color': [
      'match',
      ['get', 'operator_id'], 
      2, randomColor(),
      3, randomColor(),
      15, randomColor(),
      20, randomColor(),
      25, randomColor(),
      30, randomColor(),
      '#000000' // Couleur par défaut si aucune correspondance
    ],
    'fill-opacity': 0.8
  }
});

# Etape 7 - Ajouter des étiquettes aux polygones

map.addLayer({
  'id': 'geojson-label',
  'type': 'symbol',
  'source': 'geojson-source',
  'layout': {
    'text-field': ['get', 'operator_id'],
  },
  'paint': {
    'text-color': '#202',
    'text-halo-color': '#fff',
    'text-halo-width': 2
  }
})

# Résultat (captures) dans git-checkout--b-votre_nom-labo9
