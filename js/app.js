/* =========================================================
   MON PARCOURS PROFESSIONNEL MMI — app.js
   R3.12 – Développement Front & Intégration — Séance 1
   Auteur : Lévy CINQ-VAL — BUT MMI 1ère année

   Objectif de cette séance : poser les bases de données
   (objet "stage" + tableau "missions") et afficher ce
   contenu dynamiquement dans la page (pas de HTML en dur).
   ========================================================= */

/* ---------------------------------------------------------
   1. DONNÉES — MON STAGE
   Rappel : aucune donnée confidentielle appartenant à
   l'entreprise n'est publiée ici (infos générales uniquement).
   --------------------------------------------------------- */
const stage = {
  entreprise: "SmartPlay",
  secteur: "Communication visuelle & publicité (covering, impression grand format, signalétique)",
  lieu: "Les Abymes, Guadeloupe",
  periode: "01/06/2026 - 30/06/2026",
  poste: "Stagiaire MMI 1ère année",
  fondation: "2009",
  accroche:
    "Un mois d'immersion au sein d'une entreprise guadeloupéenne spécialisée dans le marquage publicitaire, le covering de véhicules et la création de contenus digitaux."
};

/* ---------------------------------------------------------
   2. DONNÉES — MES MISSIONS
   Extraites de mon journal de bord de stage réel.
   Chaque mission respecte au minimum : titre, categorie,
   description, outils. Les descriptions restent au niveau
   du processus / des compétences, sans donnée confidentielle
   (montants, contrats, informations internes à l'entreprise).
   --------------------------------------------------------- */
const missions = [
  {
    titre: "Découverte et contrôle des Bons à Tirer (BAT)",
    categorie: "Contrôle qualité",
    description:
      "Découverte du rôle du Bon à Tirer dans la chaîne de production graphique : contrôle de l'orthographe, des couleurs, des marges et des visuels avant validation finale d'un support imprimé.",
    outils: ["Adobe Photoshop", "Documentation interne"],
    competences: ["Contrôle qualité", "Rigueur", "Analyse de maquettes"],
    difficultes:
      "Comprendre les implications d'une validation finale et l'importance d'un contrôle méthodique avant impression.",
    resultats:
      "Acquisition d'une méthode de vérification fiable applicable à tous les projets suivants."
  },
  {
    titre: "Covering intégral d'un bus impérial",
    categorie: "Marquage publicitaire",
    description:
      "Participation complète à un projet de covering intégral (préparation des fichiers, pose sur le véhicule puis finitions) pour une campagne de recrutement, avec gestion des contraintes d'impression grand format et de l'échelle 1/10.",
    outils: ["Films adhésifs grand format", "Fichiers PDF / CMJN"],
    competences: ["Travail en équipe", "Gestion des échelles d'impression", "Précision de pose"],
    difficultes:
      "Adapter la résolution des visuels à un support conçu à l'échelle réduite, puis poser des visuels sur une très grande surface courbe.",
    resultats:
      "Habillage complet du véhicule livré dans les délais, avec un rendu visuel homogène."
  },
  {
    titre: "Création de contenus Instagram (carrousel & Reel)",
    categorie: "Communication digitale",
    description:
      "Conception de publications carrousel et de vidéos courtes (Reels) pour valoriser des réalisations de l'entreprise (covering deux-roues, projet automobile) sur les réseaux sociaux, dans le respect de l'identité visuelle des clients.",
    outils: ["Adobe Photoshop", "Canva", "CapCut", "Instagram"],
    competences: ["Storytelling visuel", "Montage vidéo", "Créativité"],
    difficultes:
      "Sélectionner les visuels les plus pertinents et respecter les objectifs de communication du client.",
    resultats:
      "Publications engageantes, dont une vidéo ayant généré environ 6000 vues."
  },
  {
    titre: "BAT de tenues professionnelles pour une pharmacie",
    categorie: "Design graphique",
    description:
      "Réalisation de maquettes numériques pour des tenues professionnelles (pharmaciens, préparateurs, encadrement) avec intégration cohérente des éléments d'identité visuelle du client sur plusieurs types de vêtements.",
    outils: ["Adobe Photoshop", "Canva", "Procreate", "Affinity Designer"],
    competences: ["Mise en page graphique", "Gestion d'identité visuelle", "Sens du détail"],
    difficultes:
      "Conserver une identité graphique homogène tout en différenciant chaque catégorie de vêtement.",
    resultats: "BAT validé et transmis pour fabrication."
  },
  {
    titre: "BAT autonome : collection textile à motifs",
    categorie: "Design graphique",
    description:
      "Réalisation en autonomie d'un projet complet : analyse du besoin client, conception de motifs originaux, mise à l'échelle précise et vectorisation des visuels pour les rendre exploitables en production textile.",
    outils: ["Adobe Photoshop", "Procreate", "Outils de vectorisation"],
    competences: ["Autonomie", "Vectorisation", "Respect des contraintes techniques"],
    difficultes:
      "Transformer des références visuelles en design original tout en garantissant leur exploitation par les machines de production.",
    resultats: "Premier projet mené intégralement en autonomie, du brief client au BAT final."
  },
  {
    titre: "Semi-covering et sécurité pour un véhicule de rallye",
    categorie: "Marquage publicitaire",
    description:
      "Pose d'un semi-covering sur un véhicule engagé en compétition, incluant l'application d'éléments rétro-réfléchissants pour améliorer la visibilité du véhicule lors des épreuves de nuit.",
    outils: ["Films adhésifs spécialisés", "Matériaux rétro-réfléchissants"],
    competences: ["Précision sur surfaces complexes", "Réactivité", "Respect des délais"],
    difficultes:
      "Réaliser une pose précise en respectant les lignes de carrosserie et les zones réservées aux partenaires, dans un délai très court.",
    resultats: "Véhicule livré le jour même, prêt pour la compétition."
  },
  {
    titre: "Découverte de DaVinci Resolve",
    categorie: "Audiovisuel",
    description:
      "Prise en main autonome d'un logiciel professionnel de montage, d'étalonnage et d'effets visuels, avec exploration des outils d'animation afin d'élargir mes compétences en création de contenus audiovisuels.",
    outils: ["DaVinci Resolve"],
    competences: ["Veille technologique", "Autonomie", "Motion design"],
    difficultes:
      "S'approprier un logiciel riche en fonctionnalités en un temps limité.",
    resultats: "Premières animations réalisées et bases posées pour de futurs projets vidéo."
  },
  {
    titre: "Supports de communication véhicule + vitrine",
    categorie: "Marquage publicitaire",
    description:
      "Conception de BAT pour l'habillage graphique d'un camion professionnel et pour des affiches destinées à un point de vente, avec adaptation d'une même identité visuelle à plusieurs formats.",
    outils: ["Adobe Photoshop", "Canva", "Affinity Designer"],
    competences: ["Adaptation multi-supports", "Mise en page", "Communication professionnelle"],
    difficultes:
      "Garantir la lisibilité des informations sur un support mobile (camion) comme sur un support fixe (vitrine).",
    resultats: "BAT validés par le client avant lancement de la production."
  },
  {
    titre: "Semi-covering d'un camion de chantier + contenus dédiés",
    categorie: "Marquage publicitaire",
    description:
      "Préparation, pose et finitions d'un semi-covering sur un camion de chantier, puis création de contenus Instagram (carrousel et Reel) pour valoriser la réalisation.",
    outils: ["Films adhésifs", "CapCut", "Instagram"],
    competences: ["Pose sur formes complexes", "Création de contenus", "Organisation"],
    difficultes:
      "Poser proprement sur des zones du véhicule présentant des formes irrégulières.",
    resultats: "Rendu professionnel validé et contenu social publié."
  },
  {
    titre: "Bilan de stage et perspective d'alternance",
    categorie: "Bilan professionnel",
    description:
      "Présentation des projets réalisés durant le mois de stage, transmission des dossiers en cours et échange avec l'équipe sur la suite de mon parcours, notamment une possible alternance.",
    outils: ["Messagerie professionnelle"],
    competences: ["Prise de parole", "Autoévaluation", "Esprit d'équipe"],
    difficultes: "Synthétiser un mois de missions variées en une présentation claire.",
    resultats: "Bilan positif partagé avec l'équipe et piste d'alternance évoquée."
  }
];

/* ---------------------------------------------------------
   3. RENDU DYNAMIQUE — MON STAGE
   --------------------------------------------------------- */
function afficherStage() {
  const container = document.getElementById("stage-info");
  if (!container) return;

  container.innerHTML = `
    <div class="stage-card">
      <p><span class="stage-label">Entreprise</span> ${stage.entreprise} (créée en ${stage.fondation})</p>
      <p><span class="stage-label">Secteur d'activité</span> ${stage.secteur}</p>
      <p><span class="stage-label">Lieu</span> ${stage.lieu}</p>
      <p><span class="stage-label">Période</span> ${stage.periode}</p>
      <p><span class="stage-label">Poste occupé</span> ${stage.poste}</p>
    </div>
    <p class="stage-accroche">${stage.accroche}</p>
  `;
}

/* ---------------------------------------------------------
   4. RENDU DYNAMIQUE — MES MISSIONS
   Les missions ne sont jamais écrites en dur dans le HTML :
   elles sont générées ici à partir du tableau "missions".
   --------------------------------------------------------- */
function afficherMissions() {
  const container = document.getElementById("missions-liste");
  if (!container) return;

  container.innerHTML = "";

  missions.forEach(function (mission, index) {
    const carte = document.createElement("article");
    carte.className = "mission-card";
    carte.setAttribute("tabindex", "0");

    const outilsHTML = mission.outils
      .map((outil) => `<li>${outil}</li>`)
      .join("");

    carte.innerHTML = `
      <span class="mission-index">Mission ${index + 1}</span>
      <h3 class="mission-titre">${mission.titre}</h3>
      <span class="mission-categorie">${mission.categorie}</span>
      <p class="mission-description">${mission.description}</p>
      <ul class="mission-outils">${outilsHTML}</ul>
    `;

    container.appendChild(carte);
  });

  const compteur = document.getElementById("missions-compteur");
  if (compteur) {
    compteur.textContent = `${missions.length} missions réalisées`;
  }
}

/* ---------------------------------------------------------
   5. DÉFIS DE LA SÉANCE 1 (console)
   --------------------------------------------------------- */

// Défi n°1 : afficher le titre et la catégorie de chaque mission
missions.forEach(function (mission) {
  console.log(mission.titre + " - " + mission.categorie);
});

// Défi n°2 : afficher le nombre total de missions
console.log(missions.length + " missions réalisées");

/* ---------------------------------------------------------
   6. INITIALISATION
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  afficherStage();
  afficherMissions();
});
