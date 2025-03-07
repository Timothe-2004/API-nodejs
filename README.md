 API de Liste de Tâches  

Ce projet est une API simple développée avec Node.js et Express, permettant aux utilisateurs de gérer une liste de tâches. Il offre des fonctionnalités complètes de gestion, incluant la création, la lecture, la mise à jour et la suppression de tâches (CRUD).  

 Structure du Projet  

L’API est organisée de manière simple avec trois fichiers principaux :  
- `server.js`, qui contient le code du serveur et la logique de l’API,  
- `package.json`, qui gère les dépendances du projet,  
- `README.md`, qui documente le fonctionnement et l’utilisation de l’API.  

 Installation  

Pour utiliser cette API, commencez par cloner le dépôt sur votre machine :  
```sh  
git clone <repository-url>  
cd task-list-api  
```  
Ensuite, installez les dépendances nécessaires avec la commande suivante :  
```sh  
npm install  
```  

 Utilisation  

Une fois l’installation terminée, vous pouvez démarrer le serveur en exécutant la commande suivante :  
```sh  
npm start  
```  
Par défaut, le serveur fonctionne sur `http://localhost:3000`, sauf si un autre port est défini via la variable d’environnement `PORT`.  

 Points d’Entrée de l’API  

L’API propose plusieurs endpoints pour gérer les tâches :  
- GET /tasks** : récupère la liste complète des tâches.  
- GET /tasks/:id** : récupère une tâche spécifique en fonction de son ID.  
- POST /tasks** : crée une nouvelle tâche.  
- PUT /tasks/:id** : met à jour une tâche existante à partir de son ID.  
- DELETE /tasks/:id** : supprime une tâche à partir de son ID.  

 Dépendances  

L’API repose sur plusieurs bibliothèques essentielles pour son bon fonctionnement :  
- Express, un framework web léger pour Node.js,  
- Body-parser, un middleware permettant de traiter les données des requêtes,  
- CORS, qui autorise les requêtes provenant d’autres origines,  
- Morgan, un outil permettant de journaliser les requêtes HTTP pour faciliter le débogage.  
