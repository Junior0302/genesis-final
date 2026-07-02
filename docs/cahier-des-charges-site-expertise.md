# Cahier des charges - Site expertise dedie

## 1. Contexte

Genesis Connect dispose aujourd'hui d'un site principal qui melange plusieurs dimensions :

- studio / image de marque / univers premium
- projets realises
- programme `help`
- offre `expertise` tres orientee services

L'objectif est de separer clairement l'offre `expertise` dans un site dedie, avec sa propre page d'accueil, sa propre structure editoriale, ses propres parcours de conversion et son propre positionnement.

Le site principal doit rester concentre sur :

- le studio
- les projets / work
- la prise de contact
- le programme `help`
- les autres sections deja presentes hors `expertise`

## 2. Objectif du nouveau site

Creer un site distinct pour porter l'ensemble des services `expertise` avec un discours plus clair, plus commercial et plus specialise, sans diluer le positionnement du site principal.

Ce nouveau site doit :

- presenter les offres de services de maniere structuree
- rassurer des prospects plus operationnels
- generer des demandes de devis ou de diagnostic
- separer l'image `studio premium` du discours `services / support / expertise`
- centraliser tous les contenus actuellement disperses dans `expertise`

## 3. Positionnement du nouveau site

### Role

Le nouveau site expertise devient le site de services, d'accompagnement et d'intervention.

### Promesse

"Une expertise numerique claire, fiable et actionnable pour les entreprises, independants, petites structures et organisations qui ont besoin de solutions concretes."

### Differenciation

- discours plus direct et plus oriente resultat
- pages service dediees
- meilleur cadrage des besoins
- meilleure orientation conversion
- SEO local et SEO service plus lisible

## 4. Perimetre fonctionnel

Le nouveau site doit couvrir au minimum :

- une page d'accueil propre
- une page hub `services` ou `expertise`
- une page detaillee par service
- une page `a propos`
- une page `contact / demande`
- une FAQ
- des mentions legales, privacy et cookies

## 5. Inventaire des services a migrer

Contenus actuellement identifies dans le site principal :

1. Creation de sites internet
2. Developpement web et applications
3. Depannage informatique
4. Maintenance informatique
5. Cybersecurite
6. Reseaux et Wi-Fi
7. SEO et visibilite locale
8. Solutions cloud
9. Experiences 3D

## 6. Cibles

### Cibles principales

- TPE / PME
- independants
- entrepreneurs
- associations
- structures locales

### Cibles secondaires

- marques ayant besoin d'une execution technique plus operationnelle
- structures ayant un besoin mixte web + IT + SEO + cloud

## 7. Objectifs business

- augmenter les demandes de contact qualifiees
- clarifier les parcours par besoin
- mieux convertir sur des requetes de services
- rendre les offres plus lisibles que sur le site principal
- mieux separer l'image de marque du discours de service

## 8. Arborescence recommandee

### Navigation principale

- Accueil
- Services
- Secteurs ou Cas d'usage
- A propos
- FAQ
- Contact

### Arborescence detaillee

- `/`
- `/services`
- `/services/creation-sites-internet`
- `/services/developpement-web-applications`
- `/services/depannage-informatique`
- `/services/maintenance-informatique`
- `/services/cybersecurite`
- `/services/reseaux-wifi`
- `/services/seo-visibilite-locale`
- `/services/solutions-cloud`
- `/services/experiences-3d`
- `/a-propos`
- `/faq`
- `/contact`
- `/mentions-legales`
- `/confidentialite`
- `/cookies`

Option utile a moyen terme :

- `/secteurs`
- `/secteurs/restauration`
- `/secteurs/sante`
- `/secteurs/retail`
- `/secteurs/associations`
- `/audit`

## 9. Structure recommandee de la page d'accueil

### Hero

- promesse claire
- sous-texte orientee resultat
- CTA principal `Demander un diagnostic`
- CTA secondaire `Voir les services`

### Bloc 1 - Besoins

Presenter les grands besoins :

- site internet
- support informatique
- SEO local
- cloud et organisation
- cybersecurite

### Bloc 2 - Services

Grille ou liste des 9 services avec lien detail.

### Bloc 3 - Pourquoi nous

- clarte
- execution
- accompagnement humain
- vision premium mais pragmatique

### Bloc 4 - Cas d'usage

Exemples de situations :

- entreprise qui veut refaire son site
- commerce local qui veut etre plus visible
- equipe qui a besoin de cloud / maintenance / securite
- structure qui veut un seul interlocuteur

### Bloc 5 - Methode

- diagnostic
- priorisation
- proposition
- mise en oeuvre
- suivi

### Bloc 6 - FAQ

Questions les plus frequentes sur les services.

### Bloc 7 - Contact

Bloc de conversion final avec formulaire ou email structure.

## 10. Modele d'une page service

Chaque page service doit suivre une structure stable :

1. Hero avec promesse claire
2. Problemes traites
3. Ce qui est inclus
4. Pour qui c'est utile
5. Methode d'intervention
6. FAQ service
7. CTA contact

## 11. Ton editorial

Le ton doit etre :

- plus direct que le site principal
- plus concret
- plus lisible
- moins "studio manifeste"
- plus utile et oriente decision

Le niveau de gamme reste premium, mais la priorite devient :

- clarte
- credibilite
- comprehension des besoins
- conversion

## 12. UX / UI

Le nouveau site peut rester coherent avec l'univers Genesis Connect, mais avec des ajustements :

- hierarchie plus fonctionnelle
- titres plus directs
- paragraphs plus lisibles
- CTA plus visibles
- navigation service plus simple
- moins de mise en scene artistique que le site principal

## 13. SEO et acquisition

Le site expertise doit porter le SEO service et local.

Priorites :

- une page par service
- titles et descriptions dedies
- FAQ par page
- donnees structurees `Service`, `FAQPage`, `BreadcrumbList`
- contenu local si besoin
- schema organisation / professional service

## 14. Conversion

Les conversions attendues :

- formulaire de demande
- email structure
- demande de diagnostic
- prise de rendez-vous

Champs recommandes :

- nom
- prenom
- entreprise
- secteur
- besoin principal
- description
- budget
- delais
- priorite

## 15. Reprise des contenus existants

Sources actuelles dans le site principal :

- `src/app/[locale]/expertise/page.tsx`
- `src/app/[locale]/expertise/*/page.tsx`
- `src/lib/seo.ts`
- `src/components/seo/StructuredData.tsx`
- contenu visible dans la home
- FAQ et descriptions deja presentes dans les pages service

## 16. Separation avec le site principal

### Site principal conserve

- home studio
- studio
- work
- help
- contact
- formation
- abonnement
- other
- blog

### Site expertise recupere

- tout le hub `expertise`
- toutes les pages service
- le discours de service
- la logique SEO service / local

## 17. Retrait a appliquer sur le site principal

Retrait visible seulement :

- retirer `expertise` de la navigation
- retirer les references visibles a `expertise` sur la home
- rediriger les anciennes pages publiques `expertise` vers `help`
- ne plus exposer `expertise` comme axe principal du site courant

## 18. Strategie technique recommandee

Option recommandee :

- garder un repo separe pour le site expertise
- reutiliser le design system / composants communs si besoin
- garder un domaine ou sous-domaine dedie

Options de domaine :

- `expertise.genesisconnectstudio.com`
- `services.genesisconnectstudio.com`
- domaine dedie si besoin business distinct

## 19. Livrables recommandes pour la phase 1

1. architecture du site
2. homepage expertise
3. hub services
4. 9 pages service
5. page contact
6. FAQ
7. base SEO
8. schema de conversion

## 20. Phasage recommande

### Phase 1

- cadrage
- arborescence
- copywriting homepage
- copywriting hub services

### Phase 2

- pages service
- contact
- FAQ
- SEO technique

### Phase 3

- cas d'usage / secteurs
- blog expertise
- automatisation leads
- optimisation conversion

## 21. Decision retenue pour l'existant

Sur le site principal actuel :

- `help` reste bien en place
- `expertise` doit sortir de la navigation et des sections visibles
- les routes `expertise` doivent cesser d'etre exposees publiquement

---

Document de base prepare a partir des contenus actuellement presents dans le projet `Genesis Connect`.
