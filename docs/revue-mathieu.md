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