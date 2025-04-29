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

# Etape 2 : Modification de la couleur des polygones

Dans la fonction colorPolygons() (ligne 96) du fichier .js , changez :

'color': 'red'

par :

'color': '#9f40ff' (notation Hexadécimale des couleurs)



