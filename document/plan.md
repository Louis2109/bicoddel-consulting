# 📋 PLAN DE DÉVELOPPEMENT - BICODDEL LANDING PAGE (v2)

**Projet:** Landing page institutionnelle pour BICODDEL Consulting  
**Client:** Bicoddel Consulting - Cameroun  
**Deadline:** Cette semaine  
**Méthodologie:** AGILE - Sprints avec déploiements progressifs Vercel

---

## 1️⃣ OBJECTIF DU SITE

Créer une landing page professionnelle qui:
- ✅ Rassure immédiatement les décideurs publics et partenaires internationaux
- ✅ Démontre l'expertise via preuves tangibles (chiffres, références)
- ✅ Génère des contacts via formulaire
- ✅ Positionne BICODDEL comme expert technique en financement de projets publics

---

## 2️⃣ CIBLE & TONE

**Cible principale:**
- Collectivités territoriales décentralisées (communes, régions)
- ONG internationales
- Agences de coopération

**Tone:** Institutionnel, technique, rassurant, direct, moderne

---

## 3️⃣ DESIGN SYSTEM (Jaune Primaire + Glassmorphisme)

### Palette Couleur

| Élément | Couleur | Code Hex | Usage |
|---------|---------|----------|-------|
| **Primaire** | Jaune vif | `#FFC107` | Accents, CTA, titres importants |
| **Secondaire** | Blanc  |  | Fonds, texte principal |
| **Tertiaire** | Noir foncé | `#1a1a1a` | Texte, bordures, fonds sombres |
| **Neutre** | Gris moyen | `#666666` | Texte secondaire |
| **Neutre clair** | Gris très clair | `#F5F5F5` | Fonds secondaires |
| **Glassmorphisme** | Blanc 80% opaque | `rgba(255, 255, 255, 0.8)` | Cartes/blocs avec backdrop blur |
| **Glass sombre** | Noir 10% opaque | `rgba(26, 26, 26, 0.1)` | Overlay subtil |

### Effets de Design

**Glassmorphism:**
```css
/* Composant glassmorphic standard */
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.8);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
```

**Liquid Glass (Animations):**
- Transitions smooth: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Hover effects: élévation +8px + blur augmente de 1px
- Gradients fluides jaune → blanc avec opacités variables

### Typographie

- **Titres (H1):** Sans-serif gras (Inter 700, 48px, letter-spacing: 0.5px)
- **Titres (H2):** Sans-serif gras (Inter 700, 36px)
- **Sous-titres (H3):** Sans-serif semi-bold (Inter 600, 24px)
- **Corps:** Sans-serif régulier (Inter 400, 16px/18px, line-height: 1.6)

### Composants

**Boutons:**
- **Primaire:** Fond jaune (#FFC107), texte noir, 12px 28px, radius 10px
- **Secondaire:** Glass 80% blanc, bordure jaune 2px, texte noir
- **Tertiary:** Texte jaune, underline au hover
- Transition: 0.3s ease, hover: élévation +4px + blur augmente

**Cartes Glassmorphic:**
- Fond: `rgba(255, 255, 255, 0.8)` + backdrop blur 10px
- Bordure: 1px `rgba(255, 255, 255, 0.2)` frosted
- Shadow: `0 8px 32px rgba(31, 38, 135, 0.1)`
- Radius: 16px
- Hover: blur → 12px, élévation → +8px

**CTA Blocs:**
- Fond: `rgba(255, 193, 7, 0.1)` (jaune 10% opaque)
- Bordure: 2px jaune (#FFC107)
- Glass effect avec légère opacité

**Espacements:** 8px, 16px, 24px, 32px, 48px, 64px

---

## 4️⃣ ARCHITECTURE PAGES

### 🏠 Landing Page Unique (9 sections)

| # | Section | Objectif | CTA |
|---|---------|----------|-----|
| 1 | **Hero** | Accroche + promesse | Consultation |
| 2 | **Qui sommes-nous** | Crédibilité + 3 chiffres | Scroll |
| 3 | **3 Piliers** | Clarifier l'offre | Scroll |
| 4 | **Pour qui** | Montrer la cible | Scroll |
| 5 | **Références** | Preuves + logos | Scroll |
| 6 | **Pourquoi nous** | Différenciation | Scroll |
| 7 | **Notre processus** | Rigueur méthodique | Scroll |
| 8 | **Formulaire contact** | Conversion principale | Formulaire |
| 9 | **Footer** | Infos légales + contact | Liens |

---

## 5️⃣ DONNÉES

### Données Réelles (fournies)
- ✅ Email: `loic.nkenfack@facsciences-uy1.cm`
- ✅ Téléphone: `+237 691 921 049` (WhatsApp)
- ✅ Adresse: `Biyem-Assi, Yaounde`
- ⏳ Logo: À fournir

### Données Fictives (à créer)
- Chiffres clés (financements, projets, années)
- Logos partenaires (6 min)
- Description des 3 piliers
- 5 étapes du processus
- Textes présentatifs

---

## 6️⃣ ARCHITECTURE TECHNIQUE (Modular & Agile)

```
app/
├── page.tsx                 # Page principale (aggrégation)
├── layout.tsx               # Root layout
├── components/
│   ├── sections/            # 1 fichier = 1-2 sprints
│   │   ├── Hero.tsx         # Sprint 2
│   │   ├── About.tsx        # Sprint 3
│   │   ├── Services.tsx     # Sprint 4
│   │   ├── TargetAudience.tsx # Sprint 5
│   │   ├── Credibility.tsx  # Sprint 5
│   │   ├── WhyUs.tsx        # Sprint 6
│   │   ├── Process.tsx      # Sprint 6
│   │   └── ContactForm.tsx  # Sprint 7
│   ├── layout/              # Sprint 1
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── common/              # Sprint 0 (Reusables)
│       ├── Button.tsx
│       ├── Card.tsx         # Glassmorphic
│       ├── SectionTitle.tsx
│       ├── GlassContainer.tsx # Wrapper glass effect
│       └── GradientText.tsx # Gradient text
├── data/
│   └── content.ts           # Centralized (updated per sprint)
├── styles/
│   ├── design-tokens.css    # Couleurs + effects
│   ├── globals.css
│   ├── glassmorphism.module.css # Reusable glass effects
│   └── layout.module.css    # Grid responsif
├── utils/
│   ├── cn.ts
│   └── glassMorphism.ts     # Helpers
└── public/
    └── images/              # Placeholders
```

**Principe:** Chaque sprint ajoute max 1-2 fichiers. Page toujours deployable.

---

## 7️⃣ PLAN DE TRAVAIL (AGILE - 10 Sprints)

### Méthodologie: Progressive Delivery
**Chaque sprint = 1 déploiement Vercel visible au client**

| Sprint | Tâche | Durée | Fichiers | Vercel Deploy |
|--------|-------|-------|----------|---------------|
| **0** | Setup + Design tokens + Composants base | 1h | `design-tokens.css`, `Button.tsx`, `Card.tsx`, `SectionTitle.tsx`, `GlassContainer.tsx` | ✅ Page vierge + styles |
| **1** | Header + Footer + Navigation | 1h | `Header.tsx`, `Footer.tsx`, `layout.tsx` | ✅ Header/Footer visibles |
| **2** | Hero section + CTA | 1h | `Hero.tsx`, `page.tsx` | ✅ Hero engageant |
| **3** | About + 3 chiffres clés | 1h | `About.tsx`, `content.ts` mise à jour | ✅ Crédibilité |
| **4** | 3 Piliers + descriptions | 1h | `Services.tsx`, `content.ts` | ✅ Offre claire |
| **5** | Pour qui + Références (logos) | 1h | `TargetAudience.tsx`, `Credibility.tsx` | ✅ Target + Proofs |
| **6** | Pourquoi nous + Processus | 1h | `WhyUs.tsx`, `Process.tsx` | ✅ Différenciation |
| **7** | Formulaire contact complet | 1h30 | `ContactForm.tsx`, email config | ✅ Conversion live |
| **8** | Responsive + Polish glassmorphism | 45min | CSS refinement | ✅ Mobile perfect |
| **9** | Performance + SEO + Optimisation | 45min | Lighthouse 90+, meta tags | ✅ Production-ready |
| **TOTAL** | | **~9-10h** | | |

---

## 8️⃣ LIVRABLES AGILE (Progressive Visibility)

À la fin de chaque sprint, le client peut voir la progression live sur Vercel:

- ✅ **Sprint 0:** Page blanche avec design system (styles fonctionnels)
- ✅ **Sprint 1:** Navigation visible + header/footer
- ✅ **Sprint 2:** Hero accrocheur
- ✅ **Sprint 3:** Chiffres clés + crédibilité
- ✅ **Sprint 4:** 3 piliers de l'offre
- ✅ **Sprint 5:** Cible + logos partenaires
- ✅ **Sprint 6:** Différenciation + processus
- ✅ **Sprint 7:** Formulaire de contact fonctionnel
- ✅ **Sprint 8:** Design parfaitement responsive
- ✅ **Sprint 9:** Production-ready (performance + SEO)

---

## 9️⃣ NOTES & CONTRAINTES

- 📱 Mobile-first design
- 🎨 Glassmorphism subtil, pas d'animations lourdes
- 🔒 Pas de données sensibles en dur
- ♿ Accessibilité basique (contraste WCAG AA)
- 🚀 Page légère (<200kb gzip)
- 🌐 Responsive: 320px, 768px, 1920px
- 🔄 Setup Vercel avec auto-deploy à chaque commit

---

**Status:** ✅ Plan validé  
**Prochaine étape:** Sprint 0 - Setup + Design tokens  
**Last Updated:** 18 Mai 2025
