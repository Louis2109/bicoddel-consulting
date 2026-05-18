/**
 * BICODDEL - Centralized Content Management
 * Tous les textes, données et contenu de la landing page
 * Mise à jour au fur et à mesure des sprints
 */

export const siteContent = {
  // ===== GENERAL =====
  siteName: 'BICODDEL Consulting',
  siteDescription: 'Expert en ingénierie de projet et financement pour collectivités décentralisées',

  // ===== CONTACT & SOCIAL =====
  contact: {
    email: 'loic.nkenfack@facsciences-uy1.cm',
    phone: '+237 691 921 049',
    whatsapp: '+237691921049',
    address: 'Biyem-Assi, Yaounde, Cameroon',
    addressCity: 'Yaounde',
    addressCountry: 'Cameroon',
  },

  // ===== HEADER =====
  header: {
    logo: 'BICODDEL',
    navigation: [
      { label: 'Accueil', href: '#hero' },
      { label: 'Qui sommes-nous', href: '#about' },
      { label: 'Nos services', href: '#services' },
      { label: 'Contactez-nous', href: '#contact' },
    ],
  },

  // ===== HERO SECTION =====
  hero: {
    title: 'Transformez vos projets en financements',
    subtitle: 'Expert en ingénierie de projet et financement pour collectivités décentralisées et partenaires internationaux',
    ctaPrimary: 'Demander une consultation',
    ctaSecondary: 'Découvrir nos services',
    backgroundImage: null, // À ajouter plus tard
  },

  // ===== ABOUT SECTION =====
  about: {
    title: 'Qui sommes-nous?',
    description: 'BICODDEL Consulting accompagne les collectivités territoriales, les ONG internationales et les agences de coopération dans la structuration et le financement de leurs projets de développement. Depuis plus d\'une décennie, nous transformons les intentions locales en projets structurés, financés et exécutés selon les standards internationaux.',
    keyStats: [
      {
        number: '240M+',
        label: 'USD Financés',
        description: 'Montant total de financements sécurisés',
      },
      {
        number: '45+',
        label: 'Projets Accompagnés',
        description: 'De 2015 à 2025 dans 12 pays',
      },
      {
        number: '12',
        label: 'Années d\'Expérience',
        description: 'Expertise reconnue en financement public',
      },
    ],
  },

  // ===== SERVICES / 3 PILIERS =====
  services: {
    title: 'Notre offre complète',
    subtitle: 'Trois piliers pour sécuriser vos projets de développement',
    pillars: [
      {
        id: 'engineering',
        title: 'Ingénierie de Projet',
        description: 'Structuration et conception de projets conformes aux standards internationaux',
        items: [
          'Études de faisabilité et diagnostic',
          'Structuration technique du projet',
          'Rédaction de dossiers de financement',
          'Appui à l\'obtention de financements',
        ],
        icon: '🏗️',
      },
      {
        id: 'amo',
        title: 'Assistance à Maîtrise d\'Ouvrage',
        description: 'Accompagnement continu dans la mise en oeuvre des projets',
        items: [
          'Suivi opérationnel du projet',
          'Conformité aux exigences des bailleurs',
          'Gestion administrative et reporting',
          'Coordination avec les partenaires',
        ],
        icon: '📋',
      },
      {
        id: 'training',
        title: 'Formation & Renforcement',
        description: 'Développement des compétences des acteurs locaux',
        items: [
          'Formation des équipes de projet',
          'Transfert de savoir-faire',
          'Accompagnement à la gestion',
          'Impact durable et autonomisation',
        ],
        icon: '📚',
      },
    ],
  },

  // ===== TARGET AUDIENCE =====
  targetAudience: {
    title: 'Pour qui?',
    subtitle: 'Nous travaillons avec les acteurs clés du développement',
    audiences: [
      {
        id: 'collectivities',
        title: 'Collectivités Territoriales',
        description: 'Communes, régions et collectivités décentralisées cherchant à financer leurs projets de développement',
      },
      {
        id: 'ong',
        title: 'ONG Internationales',
        description: 'Organisations de terrain et partenaires d\'exécution de projets',
      },
      {
        id: 'agencies',
        title: 'Agences de Coopération',
        description: 'Organismes publics et partenaires bilatéraux (Commission Européenne, BAD, AFD, etc.)',
      },
    ],
  },

  // ===== CREDIBILITY / REFERENCES =====
  credibility: {
    title: 'Nos références',
    subtitle: 'Institutions avec lesquelles nous avons accompagné des projets',
    partnerLogos: [
      { name: 'Mairie Cameroun', placeholder: true },
      { name: 'Région Cameroun', placeholder: true },
      { name: 'Commission Européenne', placeholder: true },
      { name: 'BAD', placeholder: true },
      { name: 'ONG Partenaire', placeholder: true },
      { name: 'Agence Coopération', placeholder: true },
    ],
    results: {
      title: 'Résultats concrets',
      metrics: [
        {
          number: '180M',
          unit: 'USD',
          label: 'Financements sécurisés',
        },
        {
          number: '38',
          unit: '+',
          label: 'Projets accompagnés (2015-2025)',
        },
        {
          number: '15',
          unit: 'pays',
          label: 'D\'intervention',
        },
      ],
    },
  },

  // ===== WHY US / DIFFERENTIATION =====
  whyUs: {
    title: 'Pourquoi nous?',
    subtitle: 'Ce qui nous rend unique',
    differentiators: [
      {
        id: 'speed',
        icon: '⚡',
        title: 'Rapidité d\'Exécution',
        description: 'Processus 30% plus rapide que la moyenne. Nous comprenons l\'urgence des collectivités et structurons rapidement sans sacrifier la qualité.',
      },
      {
        id: 'quality',
        icon: '✓',
        title: 'Qualité Irréprochable',
        description: 'Dossiers conformes aux standards internationaux. Chaque document est validé par nos experts avant envoi aux bailleurs.',
      },
      {
        id: 'support',
        icon: '👤',
        title: 'Accompagnement Personnalisé',
        description: 'Relation directe et suivie tout au long du projet. Nous sommes des partenaires, pas juste des prestataires.',
      },
    ],
  },

  // ===== PROCESS / METHODOLOGY =====
  process: {
    title: 'Notre processus',
    subtitle: 'Comment nous structurons votre projet en 5 étapes',
    steps: [
      {
        order: 1,
        title: 'Diagnostic & Audit',
        timing: 'Semaine 1-2',
        description: 'Évaluation complète du projet, identification des risques et opportunités',
      },
      {
        order: 2,
        title: 'Structure du Projet',
        timing: 'Semaine 3-4',
        description: 'Mise en place de la gouvernance, équipes et rôles clarifiés',
      },
      {
        order: 3,
        title: 'Rédaction Dossiers',
        timing: 'Semaine 5-6',
        description: 'Production des dossiers de financement conformes aux exigences',
      },
      {
        order: 4,
        title: 'Suivi Mise en Œuvre',
        timing: 'Mois 2-6',
        description: 'Accompagnement continu, reporting, conformité bailleurs',
      },
      {
        order: 5,
        title: 'Impact & Rapports',
        timing: 'Continu',
        description: 'Évaluation des résultats, capitalisation, pérennité',
      },
    ],
  },

  // ===== CONTACT FORM =====
  contactForm: {
    title: 'Parlons de votre projet',
    subtitle: 'Remplissez ce formulaire et nous vous recontacterons sous 48h',
    fields: {
      name: {
        label: 'Votre nom ou organisation',
        placeholder: 'Ex: Commune de Yaoundé',
        required: true,
      },
      email: {
        label: 'Email',
        placeholder: 'votre.email@example.com',
        required: true,
      },
      phone: {
        label: 'Téléphone',
        placeholder: '+237 XXX XXX XXX',
        required: false,
      },
      projectType: {
        label: 'Type de projet',
        required: true,
        options: [
          { value: 'montage', label: 'Montage de projet' },
          { value: 'amo', label: 'Assistance à maîtrise d\'ouvrage' },
          { value: 'training', label: 'Formation et renforcement' },
          { value: 'autre', label: 'Autre' },
        ],
      },
      message: {
        label: 'Message',
        placeholder: 'Décrivez brièvement votre projet...',
        required: true,
      },
    },
    submitButton: 'Envoyer ma demande',
    successMessage: 'Merci! Nous avons reçu votre demande et vous recontacterons sous 48h.',
    errorMessage: 'Une erreur est survenue. Veuillez réessayer.',
  },

  // ===== FOOTER =====
  footer: {
    copyrightYear: new Date().getFullYear(),
    legalPages: [
      { label: 'Mentions légales', href: '/legal' },
      { label: 'Politique de confidentialité', href: '/privacy' },
      { label: 'Conditions d\'utilisation', href: '/terms' },
    ],
  },
};

export default siteContent;
