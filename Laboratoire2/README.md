# geo7630-lab2
## Laboratoire 2 
Ce deuxième laboratoire vise à approfondir vos compétences dans FME et QGIS. Vous apprendrez à manipuler des données géospatiales plus complexes en combinant des données vectorielles et matricielles, et à réaliser une jointure spatiale pour répondre à une problématique simple.
Problématique : Identifier la répartition des arbres par quartier dans la ville de Montréal.
Pour la réalisation de ce laboratoire nous avons :

•	créé un dépôt nommé « geo7630-lab2 » sur le compte notre GitHub 

•	eu Accès à la base de données PostgreSQL (Amazon RDS) fournie en classe.

Les données utilisées sont les URL suivants :

•	Arbres : Données ponctuelles (CSV)

•	Quartiers : Polygones (GeoJSON). Polygones (GeoJSON)

Les différentes étapes de traitement ci-après ont ensuite été réalisées.

# 1.	Lecture des données source dans FME 
   
-	Création d’un nouveau projet 
  
-	Ajout d’un Reader CSV pour les données des arbres (Source : URL du fichier CSV) 
  
-	Ajout d’un Reader GeoJSON pour les quartiers (Source : URL du fichier GeoJSON) 
  
-	Validation des données
  
![image](https://github.com/user-attachments/assets/40439faa-b1b3-4415-862f-73aef6f0eafd)

# 2.	Reprojection des données
   
La reprojection des données s’est faite de la manière suivante :

-	Ajout du transformer « Reprojector » pour chacune des données (arbres et quartiers) ;
  
-	Choix du système de projection EPSG : 32188 MTM zone 8 qui couvre notre zone d’étude (pour chacune des données) ;

![image](https://github.com/user-attachments/assets/4d9b377b-e785-41ef-9676-0ba2d2020f58)
  
-	Ajout du transformer « Attributefilter » pour filtrer la table d’attributs des données « arbres » de manière à ne conserver que les données ayant des coordonnées projetées

![image](https://github.com/user-attachments/assets/06054988-4ede-4deb-89d0-48fb59b07c19)

![image](https://github.com/user-attachments/assets/5b0c3169-9360-4376-8649-ca4809963cca)
  

# 3.	Réalisation d’une jointure spatiale
   
Le but de la jointure spatiale dans le cas présent est d’ajouter la couche de points (arbres) aux polygones (quartiers) afin de déterminer le nombre d'arbres par quartier.
Dans FME on utilise le transformer « PointOnAreaOverlayer » pour associer chaque point (arbre) à un polygone (quartier).

•	Dans FME on utilise le transformer « PointOnAreaOverlayer » pour associer chaque point (arbre) à un polygone (quartier).

•	Calcul de la somme des arbres dans chaque quartier.

![image](https://github.com/user-attachments/assets/e71c69ab-ae8c-4844-9034-3c915a646a5f)


# 4. Nettoyage des attributs :

Nous Gardons uniquement les attributs pertinents (ex. nom_quartier, nombre_arbres). Nous réalisons cette opération à l'aide du transformer "AttributeKeeper.

![image](https://github.com/user-attachments/assets/547616c0-3892-4c1c-aac0-818f9ccf5c17)


# 5. Calcul d'une statistique supplémentaire (densité des arbres)

Nous utilisation le transformer "AttributeCreator" pour créer un champ densite_arbres. Nous ajoutons ainsi une colonne avec la densité d'arbres par quartier.

    Formule : nombre_arbres / superficie_quartier (en hectares).

![image](https://github.com/user-attachments/assets/825c7344-7df5-4a29-a216-93f596fb7d73)

![image](https://github.com/user-attachments/assets/fa3ce936-744c-456b-88b6-b31df0e71413)

![image](https://github.com/user-attachments/assets/f42de0ea-12e1-4989-961f-e0dabedbca84)


Nous allons ensuite filtrer la densité de manière à ne conserver que les densité à partir de 1000 arbres/quartiers ; Nous utilisons le transformer "AttributeRangeFilter".

![image](https://github.com/user-attachments/assets/aefcb428-5381-44c8-b182-3e7ad32bbf90)

# Processus

![image](https://github.com/user-attachments/assets/704d540e-4367-42f1-8b5c-4f7adf818cff)


# 6. Ecriture des données dans PostgreSQL

Pour exporter le résultat dans la base de données PostgreSQL nous ajoutons un Writer PostgreSQL 
  Schéma : code permanent étudiant
  Nom de la table : densite_arbres_quartiers
  
![image](https://github.com/user-attachments/assets/2f650a52-38cd-45f2-8b8c-f60130525185)


# 7. Visualisation des données dans QGIS

![image](https://github.com/user-attachments/assets/9bb4c5ec-85c2-4ee3-afda-e7b78d29a158)

![image](https://github.com/user-attachments/assets/11afe2a5-bd6b-4518-acd3-46712054a166)

