\# 🎨 UI Design System & Component Specifications

\*\*Target Audience for this document:\*\* AI Coding Agents / Frontend Developers.    
\*\*Goal:\*\* Provide explicit CSS rules, layout structures, and design tokens to generate pixel-perfect HTML/CSS for the Personal Portfolio SPA.

\---

\#\# 1\. Design Tokens (CSS Variables)

\> \*\*AI Agent Instruction:\*\* Implement these tokens as CSS variables (\`:root\` for Light Mode, \`\[data-theme="dark"\]\` for Dark Mode).

\#\#\# 1.1. Color Palette

\`\`\`css  
:root {  
  /\* Colors \*/  
  \--bg-primary: \#FEFEFE;  
  \--bg-secondary: \#D9D9D9; /\* Used for borders, subtle backgrounds \*/  
  \--text-main: \#353535;  
  \--accent-primary: \#284B63; /\* CTA buttons, active states, links \*/  
  \--accent-secondary: \#3C6E71; /\* Hover states, secondary accents \*/  
    
  /\* Glassmorphism \*/  
  \--glass-bg: rgba(255, 255, 255, 0.4);  
  \--glass-border: rgba(255, 255, 255, 0.6);  
    
  /\* Z-Index Hierarchy \*/  
  \--z-background: \-1;  
  \--z-normal: 1;  
  \--z-navbar: 50;  
  \--z-modal-overlay: 100;  
  \--z-modal-content: 110;  
}

\[data-theme="dark"\] {  
  \--bg-primary: \#1A1C1E;  
  \--bg-secondary: \#2A2C2E;  
  \--text-main: \#F5F5F5;  
  \--accent-primary: \#5A8BA8;  
  \--accent-secondary: \#4A8C90;  
  \--glass-bg: rgba(26, 28, 30, 0.4);  
  \--glass-border: rgba(255, 255, 255, 0.1);  
}  
\`\`\`

\#\#\# 1.2. Typography  
\*   \*\*Logo/Brand Font:\*\* \`'Vujahday Script', cursive;\` (Weight: 400).  
\*   \*\*Base Font:\*\* \`'Chiron Hei HK', sans-serif;\`   
    \*   \*Weights:\* 400 for body, 600 for subheadings, 700 for headings/titles.

\#\#\# 1.3. Glassmorphism Utilities

\> \*\*AI Agent Instruction:\*\* Apply these rules to any component tagged with \`\[Glassmorphism\]\`.

\`\`\`css  
.glass {  
  background: var(--glass-bg);  
  backdrop-filter: blur(12px);  
  \-webkit-backdrop-filter: blur(12px);  
  border: 1px solid var(--glass-border);  
  border-radius: 16px;  
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);  
}  
\`\`\`

\---

\#\# 2\. Global Elements

\#\#\# 2.1. Background Pattern  
The website MUST use a specific SVG as a fixed background.

\> \*\*AI Agent Instruction:\*\* Apply this via CSS \`background-image\` or inline HTML. If using Dark Mode, lower the opacity or apply a CSS filter to \`mix-blend-mode\` so it doesn't overpower the dark theme. Ensure it stays behind all content using \`var(--z-background)\`.

\`\`\`html  
\<svg xmlns="http://www.w3.org/2000/svg"\>\<defs\>\<pattern id="a" width="29" height="33.487" patternTransform="rotate(30)" patternUnits="userSpaceOnUse"\>\<rect width="100%" height="100%" fill="\#bdb9b2"/\>\<path fill="none" stroke="\#f5f4f0" stroke-width=".5" d="M29 20.928v14.813M14.5 12.56v16.745M29-2.559v6.744l-14.5 8.374L0 4.189v-6.745m29 6.742 14.5 8.37m0 16.745L29 20.928l-14.5 8.376L0 20.931l-14.5 8.376m0-16.744L0 4.189m0 31.487V20.931"/\>\</pattern\>\</defs\>\<rect width="800%" height="800%" fill="url(\#a)" transform="translate(0 \-66.974)"/\>\</svg\>   
\`\`\`

\---

\#\# 3\. Component Specifications

\#\#\# 3.1. Navbar & Header  
\*   \*\*Layout:\*\* Flexbox, \`justify-content: space-between\`, \`align-items: center\`. \`z-index: var(--z-navbar)\`.  
\*   \*\*Left Side:\*\* Logo text "Fatih Akmal" (Font: Vujahday Script, Font Size: 2rem).  
\*   \*\*Right Side:\*\* Language Toggle (ID/EN) and Theme Toggle (Sun/Moon icon).  
\*   \*\*Style:\*\* Buttons should be \`\[Glassmorphism\]\` pills.

\#\#\# 3.2. Hero Section (Landing Page)  
\*(Based on Reference Image 4)\*

\*   \*\*Layout (Desktop):\*\* CSS Grid or Flexbox Split (50% / 50%).  
\*   \*\*Left Column (Text):\*\*  
    \*   \*\*Heading:\*\* Large, bold, dark.  
    \*   \*\*Subtext:\*\* \`var(--text-main)\`, smaller.  
    \*   \*\*Action Area:\*\* Two buttons (Flex row, gap 1rem).   
        \*   \*Button 1:\* Solid background \`var(--text-main)\`.   
        \*   \*Button 2:\* Outline border: \`1px solid var(--bg-secondary)\`.   
        \*   \*Shape:\* Both buttons are pill-shaped (\`border-radius: 9999px\`).  
\*   \*\*Right Column (Visual):\*\* A 3x3 or asymmetrical Bento Grid of images.  
    \*   Images must have \`border-radius: 24px\` (or mixed large radiuses like 48px on opposite corners for artistic effect).  
    \*   Images use \`object-fit: cover\`.

\#\#\# 3.3. Experience & Education Section  
\*(Based on Reference Image 1)\*

\*   \*\*Container:\*\* \`\[Glassmorphism\]\` card, \`padding: 2rem\`.  
\*   \*\*Tabs:\*\* Flex row. Active tab text has \`border-bottom: 2px solid var(--accent-primary)\` and \`color: var(--accent-primary)\`. Inactive tabs use \`var(--text-main)\` with 60% opacity.  
\*   \*\*Timeline Layout:\*\*  
    \*   Left border vertical line (\`border-left: 1px solid var(--accent-primary)\`).  
    \*   Relative positioning for dots (\`position: absolute; left: \-5px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent-primary)\`).  
\*   \*\*Timeline Content Typography:\*\*  
    \*   \*Date:\* Small, regular weight.  
    \*   \*Role/Company:\* Bold, Italic (\`font-style: italic; font-weight: 700;\`).  
    \*   \*Description Points:\* Regular weight, \`line-height: 1.6\`.

\#\#\# 3.4. Project Portfolio Section  
\*(Based on Reference Image 2)\*

\*   \*\*Heading:\*\* Center aligned, bold text (e.g., "Recent Work").  
\*   \*\*Grid Layout:\*\* CSS Grid. \`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\`, \`gap: 2rem\`.  
\*   \*\*Project Card Structure:\*\*  
    \*   \*Container:\* \`\[Glassmorphism\]\`, \`padding: 1.5rem\`.  
    \*   \*Image Wrapper:\* \`border-radius: 8px\`, \`overflow: hidden\`, \`margin-bottom: 1rem\`.  
    \*   \*Image:\* \`width: 100%\`, \`aspect-ratio: 16/9\`, \`object-fit: cover\`.  
    \*   \*Title:\* Bold, Italic, left-aligned.  
    \*   \*Button:\* Pill-shaped (\`border-radius: 9999px\`), light blue/transparent background (\`rgba(40, 75, 99, 0.1)\`), text color \`var(--accent-primary)\`, thin border (\`border: 1px solid rgba(40, 75, 99, 0.3)\`).

\#\#\# 3.5. Project Pop-up Modal  
\*(Based on Reference Image 3)\*

\*   \*\*Overlay:\*\* Fixed full screen, \`z-index: var(--z-modal-overlay)\`, \`background: rgba(0, 0, 0, 0.5)\`, \`backdrop-filter: blur(5px)\`. Flex center.  
\*   \*\*Modal Container:\*\* \`max-width: 800px\`, \`width: 90%\`, \`\[Glassmorphism\]\`, \`max-height: 90vh\`, \`overflow-y: auto\`, \`z-index: var(--z-modal-content)\`.  
\*   \*\*Close Button (X):\*\* Absolute top-right, floating outside or inside top-right edge. Circle shape, blue text.  
\*   \*\*Content Layout:\*\*  
    \*   \*Top:\* Large preview image (\`border-radius: 8px\`).  
    \*   \*Title:\* Bold, Italic, Large font size.  
    \*   \*Description:\* Regular paragraph (\`line-height: 1.6\`).  
    \*   \*Meta Details\* (Date, Tech, Type, Links): Flex column, \`gap: 0.5rem\`.  
    \*   \*"View Code" Link:\* Text color \`\#FF7F50\` (Coral/Orange accent specifically for links inside the modal).

\---

\#\# 4\. Interaction & Animation Rules

\*   \*\*Hover states:\*\* All interactive elements (\`button\`, \`a\`, Project Cards) must include \`transition: all 0.3s ease;\`.  
\*   \*\*Project Card Hover:\*\*   
    \`\`\`css  
    .project-card:hover {  
      transform: translateY(-5px);   
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);  
    }  
    \`\`\`  
\*   \*\*Modal Entrance:\*\*   
    \`\`\`css  
    @keyframes fadeIn {   
      from { opacity: 0; transform: scale(0.95); }   
      to { opacity: 1; transform: scale(1); }   
    }  
      
    .modal-container {  
      animation: fadeIn 0.3s ease-out forwards;  
    }  
    \`\`\`

\---

\#\# 5\. Responsive Design (Media Queries)

\> \*\*AI Agent Instruction:\*\* Follow a Mobile-First approach. Use these exact breakpoints for media queries to ensure layout consistency.

\`\`\`css  
/\* Mobile First (Default styles outside media queries are for screens \< 480px) \*/

/\* Phablet / Tablet Portrait \*/  
@media (min-width: 480px) {   
  /\* Add spacing and minor layout adjustments \*/  
}

/\* Tablet Landscape & Small Desktop \*/  
@media (min-width: 768px) {   
  /\* Hero Section: Switch to Split 50/50 Layout \*/   
  /\* Project Grid: 2 columns \*/   
  /\* Carousel: Show more items if applicable \*/   
}

/\* Large Desktop \*/  
@media (min-width: 1024px) {   
  /\* Project Grid: 3 columns \*/   
  /\* Modal: Max-width strictly enforced to 800px \*/   
}  
\`\`\`

\---

\#\# 6\. Z-Index Management

\> \*\*AI Agent Instruction:\*\* Do \*\*NOT\*\* use arbitrary z-index values (like \`z-index: 99999\`). Strictly use the CSS variables defined in the \`:root\` section above to manage the stacking context and prevent overlap bugs.

\---

\#\# 7\. Accessibility (a11y) & Focus States

\> \*\*AI Agent Instruction:\*\* Ensure the website is keyboard navigable. Hide the default outline but provide a custom focus ring for all interactive elements (\`button\`, \`a\`, \`input\`, \`\[tabindex\]\`).

\`\`\`css  
/\* Remove default outline but add a highly visible custom focus state \*/   
\*:focus-visible {   
  outline: 2px solid var(--accent-primary);   
  outline-offset: 4px;   
  border-radius: 4px;   
}

/\* Specific focus for pill/rounded buttons \*/   
.pill-button:focus-visible {   
  border-radius: 9999px;   
}  
\`\`\`

\---

\#\# 8\. Custom Scrollbar (UI Consistency)

\> \*\*AI Agent Instruction:\*\* Apply a custom scrollbar to the \`\<body\>\` and any scrollable containers (like the Project Pop-up Modal) to match the modern/glassmorphism aesthetic.

\`\`\`css  
/\* Webkit Browsers (Chrome, Edge, Safari) \*/   
::-webkit-scrollbar {   
  width: 8px;   
}

::-webkit-scrollbar-track {   
  background: var(--bg-primary);   
}

::-webkit-scrollbar-thumb {   
  background: var(--bg-secondary);   
  border-radius: 10px;   
}

::-webkit-scrollbar-thumb:hover {   
  background: var(--accent-secondary);   
}  
\`\`\`

