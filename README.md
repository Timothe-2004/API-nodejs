Dans ce projet où on essaye de mettre un peu d'ordre dans la vie avec une API qui gère des tâches. 
Parce qu'on en a tous marre d'oublier ce qu'on doit faire et de vivre dans le chaos, voici une solution simple, élégante et surtout... connectée à MongoDB (la base qui ne dort jamais).



Cette API permet de faire exactement ce qu'on fait sur un bout de papier (mais en mieux) : créer lire mettre à jour et supprimer des tâches. 
En gros, si tu veux dire à ton ordi : "Eh toi, souviens-toi que je dois acheter du lait", c'est possible ici. 


Sous le moteur, on a Express.js qui s'occupe de faire le serveur rapide et réactif, et MongoDB avec Mongoose pour garder toutes tes tâches bien au chaud (et les valider pour éviter les trucs incomplets genre 'Faire...' sans savoir quoi faire).

Le tout tient dans un fichier serveur minimaliste, pour te permettre d'aller droit au but. Pas de chichi, pas de prise de tête.

 Quelques exemples d'utilisation (parce qu'on aime les exemples)

Tu peux envoyer une requête POST pour ajouter une tâche comme :
json
{
  "nom": "Apprendre l'API",
  "description": "Suivre le tuto et boire du café"
}