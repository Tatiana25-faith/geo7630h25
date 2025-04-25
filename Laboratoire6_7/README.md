## Laboratoire 6 et 7

# 1. Importation du CSV dans FME

- Ajout d'un tranformer "Attribute Filter" pour éliminer les enregistrements sans coordonnées et préparer une jointure pour récupérer les informations manquantes

![image](https://github.com/user-attachments/assets/d586b2df-9e58-445d-b69d-22c148d955f6)


#2. Calcul des statistiques (StatisticsCalculator)

![image](https://github.com/user-attachments/assets/62128d2f-0107-4f46-83f5-abaf607b1323)

![image](https://github.com/user-attachments/assets/96ab108a-9814-4e6b-b637-c1df1e508d54)

#3. Nettoyage et gestion des attributs (AttributeManager) pour les stations de Bixi

![image](https://github.com/user-attachments/assets/bf720b93-6cc4-4352-8f00-f23684d01001)

# Jointure des données (FeatureJoiner)

- Associer les coordonnées aux stations pour garantir leur localisation correcte.

![image](https://github.com/user-attachments/assets/3b692dc8-7b82-4936-bbb5-5a71572a2807)

- Puis ajoutez un autre FeatureJoiner enchaîné sur le port de sortie "Joined" pour joindre les sommes des arrivées par stations

![image](https://github.com/user-attachments/assets/2f75027f-ead6-44ac-94b0-f02f9e47c2fb)


- Puis ajoutez un AttributeManager pour faire le ménage et renommer les attributs

![image](https://github.com/user-attachments/assets/700c5069-ee18-430a-a827-15cf16855fec)

# Synthèse des étape

![image](https://github.com/user-attachments/assets/50ba8bdc-900a-42e8-8c90-7f03bef766c5)














