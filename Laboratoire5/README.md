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








