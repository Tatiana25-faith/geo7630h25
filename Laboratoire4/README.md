# geo7630-lab4

# Laboratoire 4 : Intégration Matricielle FME + QGIS

# Importation des données dans FME

Les données utilisées dans le cadre de ce labotatoire sont les suivantes :

![image](https://github.com/user-attachments/assets/b5833e93-3682-459e-87bb-c7c0db335d5b)

![image](https://github.com/user-attachments/assets/154e82f2-781b-410a-b277-554592100856)

![image](https://github.com/user-attachments/assets/1f7630d0-3772-4f8d-abb3-150c10610330)

![image](https://github.com/user-attachments/assets/9f34b452-0f41-4321-b959-b0fbf8b61bfa)

# 1ère partie - Intégration d’image aérienne standard
# Étape 1 : Reprojection du raster en EPSG:32188

![image](https://github.com/user-attachments/assets/7b0242bb-314a-47c4-9f2c-f51d0ffe87c1)
![image](https://github.com/user-attachments/assets/82a055be-a835-4011-b037-d2ac725b13be)

# Etape 2 : Extraction des métadonnées du raster avec le RasterPropertyExtractor

Nous avons utilisé ici le transformateur "RasterPropertyExtractor". Ce transformateur est utilisé pour extraire des propriétés et des métadonnées d'un raster, telles que la dimension, le type de données, le nombre de bandes, et d'autres informations essentielles à son analyse et traitement.

![image](https://github.com/user-attachments/assets/e99ebde7-b162-471b-8c5a-7ace2208108b)

![image](https://github.com/user-attachments/assets/9e72be74-23ed-4fac-bf7a-8649127a3bfd)

# Etape 3 : Ajout d'un RasterResampler afin de rééchantillonner le raster à une résolution de 10 

![image](https://github.com/user-attachments/assets/7497b6e3-a9af-436c-9144-e89f0c13b4f9)

![image](https://github.com/user-attachments/assets/57a05006-6efd-4d6c-a21e-f99a1051e5e2)

# Étape 5 : Ajout d'un raster pyramider et choisir 10 dans "Number of levels"

Cette étape est réalisée en vue de créer des versions de résolution inférieure de l'image raster originale, ce qui optimise l'affichage et l'analyse de grandes images sur différents niveaux de zoom.
Le nombre de pyramides raster créé ici est de 10.

![image](https://github.com/user-attachments/assets/75567c1e-755f-4445-b511-b3df3e2ba29e)

![image](https://github.com/user-attachments/assets/3c8ff072-dbbf-4a28-9229-571d83e70c3e)

# Étape 6 : Ecriture du fichier dans notre base de données Postgis et visualisation dans QGIS

Nous avons utilisé un FeatureWriter pour réaliser cette étape. Il permet de chaîner les actions à la suite de l’écriture, contrairement au Writer de base. Puis nous avons nommé la table : hm-2002-can-4000-0257_pyramide

![image](https://github.com/user-attachments/assets/86164a79-a218-4362-b5be-0210ac01af18)

Visualisation dans QGIS

# Revoir l'affichage dans QGIS et mettre un schéma

# Etape 7 : Ajouter un SQLExecuter à la suite du FeatureWritter Summary

![image](https://github.com/user-attachments/assets/3bf48948-c540-4a59-9b6a-f8f6425b4a4b)

# Résumé de la 1ère partie dans FME 

![image](https://github.com/user-attachments/assets/0c59247e-5da4-47ac-9ef1-508c369f2eae)


# 2eme partie - Intégration de raster analytique - Ilôts de chaleur

# Etape 1 : Reprojetez les îlots de chaleur en 32188

![image](https://github.com/user-attachments/assets/0352b4b9-3c29-4c3f-b5f2-7194ea38071e)

![image](https://github.com/user-attachments/assets/1b71ad3d-c84f-48dc-8c55-5bdc39f864aa)

# Etape 2 : Ajout d'un RasterToPolygonCoercer, connexion avec la couche reprojetée et écriture du résultat dans notre BD (Postgis)

Le transformateur "RasterToPolygonCoercer" nous permet de convertir l'image raster des ilots de chaleur en entités vectorielles polygonales.
Nous changeons le Label Attribute pour classification.

![image](https://github.com/user-attachments/assets/8e92a046-ad21-4b22-b89c-67b8fd11f446)

Nous écrivons ensuite le résultat dans la BD (Postgis). Nom de la table : ilots_chaleur_polygones

![image](https://github.com/user-attachments/assets/9c0f022b-4861-4caf-9e94-16e22ce754c0)

Visualisons dans QGIS

Nous avons réalisé la classification et visualisé le résultat dans QGIS.

![image](https://github.com/user-attachments/assets/0de5885f-de68-4ffc-9fcf-397ad5414bc1)

# Étape 3 : Ajoutons un RasterDiffuser pour améliorer la netteté de l'image raster et connectons-la avec la couche re-projetée. 

Nous avons ensuite utilisé les transformers RasterCellValueRounder et RasterToPolygonCoercer pour respectivement arrondir les valeurs à un chiffre après La virgule et convertir l'image raster des ilots de chaleur en entités vectorielles polygonales comme nous l'avions fait précédemment.
Le résultat (_ilots_chaleur_polygones_sharp) est envoyé dans la BD Postgis.

![image](https://github.com/user-attachments/assets/497b9f11-54de-4161-a6e6-c236fe86ef96)

Visualisation QGIS : Classification et visualisation

![image](https://github.com/user-attachments/assets/dd2f1861-9f1d-4065-9889-e7eec6253d1a)

# Etape 4: Ajoutons un RasterCellCoercer et connectons-la avec la couche re-projetée

Le transformateur "RasterToPolygonCoercer" nous permet de convertir l'image raster des ilots de chaleur en une couche vectorielle de points.
 La couche de points obtenue (ilots_chaleur_points) est ensuite envoyée dans la BD Postgis.
 
![image](https://github.com/user-attachments/assets/7c61dddf-3e79-4e34-9438-60056e790bbc)

![image](https://github.com/user-attachments/assets/51046f92-0d60-4a0d-9fab-4f0b2bf8f38a)

Visualisation QGIS

Dans QGIS Nous avons extrait dans "Symbologie" puis "Valeur", la valeur Z qui représentent les points à afficher ( $z )

![image](https://github.com/user-attachments/assets/abb1550a-08d8-41ae-b844-61d6fbf6ca86)

# Résumé de la 2ème partie dans FME

![image](https://github.com/user-attachments/assets/959e924c-c215-4c05-8c4a-b7584959f9de)


# 3eme partie - Intégration de raster (MNS)

# Étape 1 : Ajout d'un ContourGenerator 

Nous avonc utilisé ce transformer pour créer des lignes de contour à partir de notre MNT, représentant des niveaux d'altitude à intervalles réguliers.
Nous avons choisi 10m comme intervalle de contours. Il faut noter que plus l'intervalle est petit plus le logiciel met du temps à rouler l'opération.

![image](https://github.com/user-attachments/assets/8fd1e5d1-81b8-4696-ab21-0dfa1be3f70f)

# Étape 2 : Ajout d'un Generalizer

Le transformateur "Generalizer" dans FME est utilisé pour simplifier ou lisser la géométrie des entités en réduisant le nombre de sommets, tout en conservant la forme générale.

![image](https://github.com/user-attachments/assets/293444c4-fea0-41e8-bd8f-f7b6a95f2029)

# Étape 3 : Ajout d'un AreaBuilder et écriture du résultat dans la BD (Postgis)

Nous avons utilisé ce transformer pour à créer des polygones (zones) à partir de la carte de contour obtenue, en fermant les contours ouverts et ainsi définir des limites spatiales.

![image](https://github.com/user-attachments/assets/f5d50cad-2e24-4227-a504-16ef02543aad)

Ecriture dans la BD PostGis
Nom de la table : mns_contour_polygones

![image](https://github.com/user-attachments/assets/30c7eeec-4c03-4e0e-866b-55c1f48e886c)

Visualisation QGIS

Nous avons obtenu des polygones vectoriels qui possèdent une propriété d'élévation, ce qui va nous permettre plus tard de faire une jointure spatiale entre ces points ou ces polygones et les bâtiments pour faire de l'extrapolation 2.5D.

![image](https://github.com/user-attachments/assets/0003e85b-ab63-44d8-af8d-46a052ba7758)

# Résumé de la 3ème partie dans FME

![image](https://github.com/user-attachments/assets/45460aea-1c9c-439b-9a1f-cc5be720b0ca)







