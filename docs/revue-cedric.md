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

---
## Semaine 2
---

### ActionButton

* Pourrait supporter d’autres props (ex: `disabled`, `aria-label`).


### CharacterCard

* Bonne séparation visuelle entre "Personnage" et "Ennemi".
* Réduire la duplication entre les deux blocs en extrayant les lignes répétées.
* Ajouter un état "inconnu" ou "en chargement" si certaines props ne sont pas encore prêtes.


### Scores dans la base de données

* Ajouter des messages d'erreur visibles côté utilisateur.



### ScoresService

* Créer un typage de réponse attendu (au lieu de juste `any` pour `data`).

### savePlayerScore (dans GameView)
* Afficher une confirmation ou un message si l’enregistrement échoue.

### Séparation du code de GameView

* Déplacer la logique métier dans un `useGame` ou `useCombat` composable.
* Réduire la taille du composant principal (`GameView.vue`) en fesant plus de composants.