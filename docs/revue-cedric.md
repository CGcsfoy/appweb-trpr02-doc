# Revue de code pour Cédric Gourdes

---

## Semaine 1

### Scoreboard

* Bonne solution pour l'affichage avec le v-for.
* Il faudra utiliser une vue au lieu d'un Modal.

### Header

* La police de caractères pour le titre est aussi une bonne addition pour le style.
* Bon titre.
* L'entête n'est pas une vue, à changer pour un composant.

C'est un bon départ! Je ne vois pas de problèmes dans la solution actuelle, il reste juste à implémenter le reste des récits utilisateurs et les tests.

## Semaine 2

### GameView

* enemyGeneratorRef: Solution créative pour utiliser la fonction du EnemyGenerator!
* Usage des alertes Swal pour afficher les messages au joueur, très cool!
* Constante EXPERIENCE_LEVELS, celle-ci est passée de la GameView au composant EnemyGenerator, usage d'un Enum dans types.ts serait plus propre.
* Tu pourrais utiliser des constantes pour le score et les points de vie par défaut du joueur et de l'ennemi.
* Bon usage de lambdas pour les fonctions courtes émises par GameLogic.
* Mettre des couleurs différentes pour les boutons de génération d'ennemi et de fuite du combat.
* Le bouton de fuite et réparation doit réparer le vaisseau en même temps.

### EnemyGenerator

* Comme je l'ai expliqué dans GameView, utilise un Enum pour les experienceLevels au lieu de prendre un prop.
* Comme dans GameView, utilise une constante pour les points de vie par défaut des ennemis au lieu de coder directement la valeur.
* Bon usage du jaune pour la couleur du bouton de génération, équivalent d'une mise à jour de l'ennemi, jaune sert à désigner ça.

### Modifications du Header

* Avertissement avec Swal si le joueur est dans une partie, bonne idée.
* Vérifie que la route commence avec '/game' pour donner les avertissements, bonne solution dynamique pour afficher les avertissements au bon moment.

### Données par défaut de db.json

* Enlève les characters, on ne les utilise pas.
* Bonne idée de mettre des noms de personnages et vaisseaux avec un thème québécois!

### GameLogic

* Mise à jour des mots-clés du log pour afficher les bons messages selon ce qui s'est passé dans le jeu. Bonne solution!
* Bon usage de constantes dans le GameLogic, mais tu pourrais en ajouter (nombre de missions pour gagner, scaling du nombre de dégâts, etc.)

### GameLog

* Bon système avec les v-if pour afficher le bon texte dans les logs.
* Le message de log pour cannot-heal est bizarre... Voulais-tu dire "Vous ne pouvez pas réparer lorsque vous êtes en combat?"
