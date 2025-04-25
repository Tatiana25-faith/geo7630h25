# Laboratoire 5

# Etape 1 : Importation et nettoyage des nuages de points

# Ajout d'un reader PointCloudThinner pour chaque nuage de points

![image](https://github.com/user-attachments/assets/ce707bc3-fc3f-4a32-9c27-a7ada647f23b)

# Ajout d'un reader pointCloudCombiner pour combiner les 6 nuages de points

![image](https://github.com/user-attachments/assets/d1de60fe-1f1c-45dc-9074-ecd2cd8bda6a)

# Ajout d'un ESRI reprojector

![image](https://github.com/user-attachments/assets/c5af9fbc-d4f2-4a9d-9bc5-e220ffda913d)

# Résultat de la première étape

![image](https://github.com/user-attachments/assets/a57072f3-b2cd-4999-bbf6-e76fe666414b)

![image](https://github.com/user-attachments/assets/b16de960-eeef-4d5c-b320-3338c52455b1)


# Etape 2 : Importation des limites terrestres et découpage du nuage de points

# Reprojection et Clipping 

![image](https://github.com/user-attachments/assets/0541d077-2a75-4d35-a496-0b4594a92fd3)

![image](https://github.com/user-attachments/assets/e913547c-16b9-4be1-a8f9-6347b5b0a1ab)

# Résultat de l'étape 2

![image](https://github.com/user-attachments/assets/bee72d8e-7198-49a1-9eff-f352200e6063)

## Etape 3 : Ajout de rasters géoréférencés

# Reprojection, combinaison des images et choix des bandes 

![image](https://github.com/user-attachments/assets/a783d01e-e26c-4c87-8556-79b156902172)

# Jointure raster et nuage de points 

- Ajout de la couleur dans votre nuage de point en ajoutant les valeur du raster avec un PointCloudOnRasterComponentSetter

![image](https://github.com/user-attachments/assets/313ec13c-6eac-4627-bc5e-1c44efa6656f)

- combiner le résultat en 1 seul nuage avec un PointCloudCombiner

![image](https://github.com/user-attachments/assets/854a5a6f-23ed-4d25-9345-87e0133edbb9)

- Filtrage des valeurs du nuage de points dont le raster n’a pas donné de valeur avec un pointCloudFilter

![image](https://github.com/user-attachments/assets/6956277e-d0f9-4a0c-81a5-9c1a2ef740be)

- Transformer le nuage de points en couche de vecteurs ponctuels simple avec un PointCloudCoercer, en s’assurant de garder les composantes nécessaires pour la suite

![image](https://github.com/user-attachments/assets/f23ba3fd-e3b1-4ca8-b710-6eea37ff93c4)

![image](https://github.com/user-attachments/assets/0b0ba4a1-f6ba-48f2-91f5-fbad2115e7c8)

![image](https://github.com/user-attachments/assets/6c33adc6-dff0-49b1-994f-4952905e1128)


## Etape 4 : Ajout des empruntes et details de bâtiments

![image](https://github.com/user-attachments/assets/46363596-34cd-4299-8a79-543bdbd86af8)

- Calcul du bounding box du nuage de points avec un BoundingBoxAccumulator

![image](https://github.com/user-attachments/assets/96993aa0-a067-4e01-8354-2eeb080acb57)

- Découper avec un Clipper les polygones et les lignes, puis découper les empreintes de toits avec les détails avec un PolygonCutter issue du FMEHub

![image](https://github.com/user-attachments/assets/8961fa46-8874-46c2-87c9-d8e135a21eeb)

CARTO-BAT-DETAIL clippé

![image](https://github.com/user-attachments/assets/c06fe699-0e65-42b8-ab49-d0fe0c839d8d)

CARTO-BAT-toit clippé

![image](https://github.com/user-attachments/assets/7b5d3465-d2dc-4309-ba06-f513d89f75f0)

Empreintes Toits et détails

![image](https://github.com/user-attachments/assets/a89e5c93-79be-4ea2-a462-96502c970f81)


# Étape 8 Jointure des propriétés du nuage de points dans les polygones

![image](https://github.com/user-attachments/assets/8c89df4f-1896-4158-8a8e-726d0049ffd9)

![image](https://github.com/user-attachments/assets/afb0ecb5-4c15-4f2d-b18c-3d3ab0ef6976)

- On ajoute un ListSummer

![image](https://github.com/user-attachments/assets/9c4b76ad-6234-49b6-a297-f68ca60adc72)

- Ensuite on va créer un attribut pour calculer la moyenne AttributeCreator

![image](https://github.com/user-attachments/assets/e8e857d4-40a6-46be-a074-2cab3639b764)

- Ensuite on transforme le FME color en RGB ou WebRGB  avec un ColorConverter (FME Hub)

![image](https://github.com/user-attachments/assets/5788c9eb-08d7-4fd8-b958-ebef6f30ba28)

















