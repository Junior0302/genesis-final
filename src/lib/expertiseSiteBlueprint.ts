export type ExpertiseServiceBlueprint = {
  slug: string;
  title: string;
  summary: string;
};

export type ExpertisePageBlueprint = {
  slug: string;
  title: string;
  goal: string;
};

export const expertiseSitePositioning = {
  name: "Genesis Connect Expertise",
  promise:
    "Une expertise numerique claire, fiable et actionnable pour les entreprises, independants et structures qui ont besoin de solutions concretes.",
  primaryCtas: ["Demander un diagnostic", "Voir les services"],
} as const;

export const expertiseSiteServices: ExpertiseServiceBlueprint[] = [
  {
    slug: "creation-sites-internet",
    title: "Creation de sites internet",
    summary:
      "Sites vitrines, sites professionnels, e-commerce, refonte, maintenance, hebergement et optimisation SEO.",
  },
  {
    slug: "developpement-web-applications",
    title: "Developpement web et applications",
    summary:
      "Solutions sur mesure, outils metier, automatisation et plateformes professionnelles modernes.",
  },
  {
    slug: "depannage-informatique",
    title: "Depannage informatique",
    summary:
      "Reparation PC, suppression de virus, assistance a distance, sauvegarde et intervention sur site.",
  },
  {
    slug: "maintenance-informatique",
    title: "Maintenance informatique",
    summary:
      "Maintenance preventive, corrective, mises a jour, supervision legere et securite.",
  },
  {
    slug: "cybersecurite",
    title: "Cybersecurite",
    summary:
      "Audit, protection des postes, gestion des acces, sauvegardes et sensibilisation utilisateurs.",
  },
  {
    slug: "reseaux-wifi",
    title: "Reseaux et Wi-Fi",
    summary:
      "Installation reseau, configuration Wi-Fi, securisation, deploiement materiel et optimisation.",
  },
  {
    slug: "seo-visibilite-locale",
    title: "SEO et visibilite locale",
    summary:
      "SEO local, Google Business Profile, Google Maps, optimisation technique et optimisation IA.",
  },
  {
    slug: "solutions-cloud",
    title: "Solutions cloud",
    summary:
      "Microsoft 365, Google Workspace, sauvegarde cloud, collaboration et migration.",
  },
  {
    slug: "experiences-3d",
    title: "Experiences 3D",
    summary:
      "Univers interactifs premium, narration immersive et experiences numeriques haut de gamme.",
  },
];

export const expertiseSitePages: ExpertisePageBlueprint[] = [
  {
    slug: "/",
    title: "Accueil",
    goal: "Presenter l'offre, les besoins couverts et orienter vers les services ou le contact.",
  },
  {
    slug: "/services",
    title: "Hub services",
    goal: "Afficher tous les services de maniere claire avec un premier niveau de qualification.",
  },
  {
    slug: "/a-propos",
    title: "A propos",
    goal: "Donner de la credibilite, expliquer la methode et rassurer sur l'accompagnement.",
  },
  {
    slug: "/faq",
    title: "FAQ",
    goal: "Traiter les objections et reponses frequentes avant prise de contact.",
  },
  {
    slug: "/contact",
    title: "Contact",
    goal: "Convertir avec un formulaire ou un mail structure.",
  },
];

export const expertiseSiteHomeSections = [
  "Hero",
  "Besoins couverts",
  "Services",
  "Pourquoi nous",
  "Cas d'usage",
  "Methode",
  "FAQ",
  "Contact",
] as const;

export const expertiseSiteLeadFields = [
  "nom",
  "prenom",
  "entreprise",
  "secteur",
  "besoin_principal",
  "description",
  "budget",
  "delais",
  "priorite",
] as const;
