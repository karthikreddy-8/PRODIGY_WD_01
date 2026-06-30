# Responsive Landing Page | DevCraft Portfolio

A modern, professional, and fully responsive landing page built with pure HTML, CSS, and Vanilla JavaScript. The design features a premium tech-focused aesthetic leveraging dark blue and violet themes, glassmorphism cards, glowing gradient elements, and custom scroll animations.

## Features

1. **Modern Navigation Bar**:
   - Fixed-to-top layout.
   - Smoothly transitions from transparent to a blur glassmorphic styling on scroll.
   - Fully responsive hamburger navigation overlay on mobile screen widths.
   - Active section tracking (highlights the current menu link as you scroll through sections).

2. **Aesthetic Hero Section**:
   - Split grid containing bold developer tags, high-impact headings, action call-to-actions, and an abstract floating visual asset.
   - Responsive layouts adapting from side-by-side grids to centered column overlays.

3. **Detailed About Grid**:
   - Split column mapping a stylized developer avatar alongside modular timeline layouts.
   - Glassmorphic panels containing detailed Experience histories, Tool tags, and Education certificates.

4. **Interactive Services Cards**:
   - A grid of 6 cards illustrating primary frontend competencies (Web Design, Responsive Dev, UI/UX, optimization, etc.).
   - Modern scale, color overlay hover transitions, and glow-shadow boundaries.

5. **Project Grid Mockups**:
   - 4 card items displaying generated premium application mockups.
   - Slide-up content overlays revealing tags, descriptions, and custom demo actions on hover.

6. **Interactive Contact Form**:
   - Glassmorphic input controls featuring transition-based label states and glow boundaries.
   - Standard client-side script validation checks alongside dynamic mock processing states (loading loops and success/error message indicators).

7. **Footer & Quick-actions**:
   - Section link indexing, legal notes, and animated social links.
   - Floating back-to-top button appearing after scrolling past thresholds.

---

## File Structure

```text
Responsive-Landing-Page/
│
├── index.html         # Main semantic structure & CDN icons
├── style.css          # Design system, CSS grid, variables, and responsive queries
├── script.js          # Intersection Observers, navigation overlays, form hooks
├── images/            # Directory containing generated graphic elements
│   ├── hero_illustration.png
│   ├── about_avatar.png
│   ├── project_portfolio.png
│   ├── project_weather.png
│   ├── project_stopwatch.png
│   └── project_tictactoe.png
└── README.md          # Technical overview documentation
```

---

## Tech Stack & Libraries
*   **Structure**: HTML5 (semantic elements)
*   **Styles**: Vanilla CSS3 (custom CSS grid, flexbox, CSS variables, and Keyframes)
*   **Interactions**: Vanilla Javascript (ES6+, Intersection Observer APIs)
*   **Iconography**: Lucide Icons (loaded securely via CDN)

---

## How to View and Customize

### 1. Running Locally
Simply open the `index.html` file directly in any modern web browser, or launch it using a local development server (such as VS Code Live Server or python `http.server`).
```bash
# If you have python installed, run:
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### 2. Tailoring Colors & Fonts
To change the theme colors or fonts, modify the `:root` variables defined at the top of the `style.css` file:
```css
:root {
    --bg-primary: #030712;      /* Midnight Black-Blue */
    --primary: #8b5cf6;         /* Violet Accent */
    --secondary: #06b6d4;       /* Cyan Accent */
    ...
}
```
You can replace these hex values with any other theme of your choosing.
