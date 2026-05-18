# BICODDEL Consulting - Landing Page

**Expert en ingénierie de projet et financement pour collectivités décentralisées**

## 📌 À propos du projet

Landing page institutionnelle pour **BICODDEL Consulting**, cabinet spécialisé en:
- 🏗️ Ingénierie de projet et structuration
- 💰 Accès aux financements internationaux
- 📚 Formation et renforcement de capacités

**Cible:** Collectivités territoriales, ONG internationales, agences de coopération

---

## 🎯 Objectif

Créer une landing page professionnelle qui:
- Rassure les décideurs publics et partenaires internationaux
- Démontre l'expertise via preuves tangibles (chiffres, références)
- Génère des contacts via formulaire
- Positionne BICODDEL comme expert technique en financement de projets

---

## 🎨 Design System

**Palette:** Jaune primaire + Glassmorphisme
- **Primaire:** Jaune vif (#FFC107)
- **Secondaire:** Blanc gris 
- **Tertiaire:** Noir foncé (#1a1a1a)
- **Glassmorphism:** `backdrop-filter: blur(10px)` + `rgba(255, 255, 255, 0.8)`

**Typographie:** Inter sans-serif (gras titres 48px, régulier corps 16px)

---

## 📋 Contenu (9 sections)

1. **Hero** - Accroche + promesse principale
2. **Qui sommes-nous** - Crédibilité + 3 chiffres clés
3. **3 Piliers** - Ingénierie, AMO, Formation
4. **Pour qui** - Collectivités, ONG, Agences
5. **Références** - Logos partenaires + chiffres de preuves
6. **Pourquoi nous** - Rapidité, Qualité, Accompagnement
7. **Notre processus** - 5 étapes (Diagnostic → Impact)
8. **Formulaire contact** - CTA principal
9. **Footer** - Infos légales + contact

---

## 🚀 Stack Technique

- **Framework:** Next.js 14+ (TypeScript)
- **Styling:** CSS Modules + Design Tokens
- **Components:** Modulaires et réutilisables
- **Responsive:** Mobile-first
- **Performance:** Optimisée (Lighthouse 90+)

---

## 📂 Architecture

```
app/
├── components/
│   ├── sections/         # 1 fichier par section (modulaire)
│   ├── layout/           # Header + Footer
│   └── common/           # Composants réutilisables
├── data/
│   └── content.ts        # Contenu centralisé
├── styles/
│   ├── design-tokens.css      # Couleurs + spacing
│   └── glassmorphism.module.css # Effets glass
└── utils/
```

**Principe:** Chaque sprint ajoute max 1-2 fichiers. Page toujours déployable.

---

## 📞 Contact

- **Email:** loic.nkenfack@facsciences-uy1.cm
- **Téléphone:** +237 691 921 049 (WhatsApp)
- **Adresse:** Biyem-Assi, Yaounde

---

## 🚀 Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🏃 Méthodologie AGILE

**10 Sprints progressifs** avec déploiement Vercel après chaque sprint:

| Sprint | Livrable | URL Vercel |
|--------|----------|-----------|
| 0 | Design tokens + Composants | bicoddel-sprint0.vercel.app |
| 1 | Header + Footer | bicoddel-sprint1.vercel.app |
| 2 | Hero section | bicoddel-sprint2.vercel.app |
| 3 | About + Chiffres | bicoddel-sprint3.vercel.app |
| 4 | Services (3 piliers) | bicoddel-sprint4.vercel.app |
| 5 | Target + Références | bicoddel-sprint5.vercel.app |
| 6 | Différenciation + Process | bicoddel-sprint6.vercel.app |
| 7 | Contact form | bicoddel-sprint7.vercel.app |
| 8 | Responsive + Polish | bicoddel-sprint8.vercel.app |
| 9 | Performance + SEO | bicoddel.vercel.app (production) |

**Avantage:** Client voit la progression en temps réel, peut valider/demander ajustements chaque sprint.

---

## 📊 Statut

- ✅ Planification terminée (Sprints agiles validés)
- ⏳ Développement en cours
- 📅 Deadline: Cette semaine

**Méthodologie:** AGILE - 10 Sprints progressifs avec déploiements Vercel

**Documentation complète:** Voir `/document/plan.md` et `/document/process.md`
