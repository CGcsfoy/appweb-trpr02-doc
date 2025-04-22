# Revue de code pour Mathieu Côté
---
## Semaine 1
---
### Formulaire de création de personnage

* Le formulaire est bien structuré avec Bootstrap.
* Les messages d’erreur sont présents.

**À améliorer :**
* Les champs du formulaire ne sont pas liés à des variables (`v-model`), donc on ne peut pas facilement récupérer ce que l’utilisateur écrit.
* La validation n’est pas encore faite automatiquement quand on remplit le formulaire.

### Composant `FormActionButton.vue`

* Le bouton utilise bien des `props` pour être réutilisable avec différents textes et actions.

**À améliorer :**
* Le bouton n’a pas de style visible (pas de classe comme `btn` ou `btn-primary`), donc il pourrait avoir un style très simple.

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

---
## Semaine 3
---

### GameLogic
* Changement de l’ordre des vérifications `if (newPlayer.life <= 0)` et `if (newEnemy.life <= 0)` dans la fonction `attack()`.
  * Avant : l’ennemi était vérifié avant le joueur.
  * Maintenant : le joueur est vérifié avant. Cela permet de détecter une mort du joueur même si l’ennemi meurt aussi dans le même round.
* Changement de la couleur du bouton de génération d'ennemies pour rester conformes au normes

### Global
* Refactoring / Formatage de plusieurs classes pour améliorer la qualité du code dans celles-ci