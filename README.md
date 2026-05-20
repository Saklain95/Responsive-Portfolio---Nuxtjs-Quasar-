# 🧑‍💻 Saqlain Ahamed Baig — Portfolio

A modern, responsive portfolio built with **Nuxt.js 3** + **Quasar Framework** in a clean light theme.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or download this project
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## 📁 Project Structure

```
portfolio/
├── app.vue                    # Root app component
├── nuxt.config.ts             # Nuxt + Quasar configuration
├── package.json
├── assets/
│   └── css/
│       └── main.css           # Global styles & design tokens
├── layouts/
│   └── default.vue            # Nav + Footer layout
├── pages/
│   └── index.vue              # Main page (assembles all sections)
└── components/
    ├── HeroSection.vue        # Landing hero
    ├── AboutSection.vue       # About me
    ├── SkillsSection.vue      # Skills with progress bars
    ├── ProjectsSection.vue    # Project cards + filter
    ├── ExperienceSection.vue  # Career timeline
    └── ContactSection.vue     # Contact form + links
```

---

## ✏️ Customization

### 1. Personal Info
Update placeholder text in each component:

| Component | What to Change |
|-----------|---------------|
| `layouts/default.vue` | Your name in the nav logo |
| `components/HeroSection.vue` | Title, description, stats |
| `components/AboutSection.vue` | Bio, location, education |
| `components/ExperienceSection.vue` | Your actual work history |
| `components/ContactSection.vue` | Email & social links |

### 2. Add Your Photo
In `HeroSection.vue`, replace the emoji with:
```html
<img src="/your-photo.jpg" alt="Your Name" style="width:100%;height:100%;object-fit:cover;">
```
Place your photo in the `/public` folder.

### 3. Color Customization
Edit CSS variables in `assets/css/main.css`:
```css
:root {
  --clr-accent: #e94560;   /* Change to your brand color */
  --clr-ink: #0f0f1a;      /* Main text color */
  ...
}
```

### 4. Add Projects
In `components/ProjectsSection.vue`, add to the `projects` array:
```js
{
  title: 'My Project',
  emoji: '🚀',
  bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
  desc: 'Short description',
  longDesc: 'Full description for the detail view',
  tags: ['Vue.js', 'Nuxt.js'],
  category: 'Web App',
}
```

---

## 🏗️ Build for Production

```bash
# Build static site
npm run generate

# Output is in .output/public/
# Deploy to Vercel, Netlify, or any static host
```

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --dir=.output/public
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Nuxt.js 3 |
| UI Library | Quasar Framework v2 |
| Language | Vue 3 (Composition API) + TypeScript |
| Styling | Custom CSS + Quasar components |
| Icons | Material Design Icons (MDI) |
| Fonts | DM Serif Display + Space Grotesk |

---

## 📦 Dependencies

```json
{
  "nuxt": "^3.10.0",
  "quasar": "^2.14.0",
  "@quasar/extras": "^1.16.9",
  "nuxt-quasar-ui": "^2.1.2"
}
```

---

## 📄 License
MIT — feel free to use and customize for your own portfolio!
