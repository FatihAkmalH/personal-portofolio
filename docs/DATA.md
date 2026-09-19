\# 🗄️ Data Structures & JSON Schema

\*\*Target Audience:\*\* AI Coding Agents / Frontend Developers.    
\*\*Goal:\*\* Define the exact JSON structures used for the portfolio projects, multi-language dictionary, and experience timeline. All JavaScript logic MUST adhere to these keys.

\---

\#\# 1\. Projects Data (\`projects.json\`)  
\*\*Location:\*\* \`/data/projects.json\`

This file contains the array of objects for the portfolio items. The JavaScript will fetch this to render the Project Grid and populate the Pop-up Modal.

\#\#\# Expected JSON Schema:  
\`\`\`json  
\[  
  {  
    "id": "project-1",  
    "title": "Split Bill",  
    "description": "Ini adalah website yang dibuat untuk Split Bill hasil belanja kita dengan rekan kerja, website ini gratis dan dapat digunakan oleh siapapun.",  
    "date": "Oktober 2024",  
    "technologies": \["HTML", "Bootstrap", "Javascript"\],  
    "category": "Front End",  
    "image\_thumbnail": "./assets/images/project/splitbill-thumb.webp",  
    "image\_modal": "./assets/images/project/splitbill-full.webp",  
    "link": "\[https://marisplitbill.netlify.app\](https://marisplitbill.netlify.app)"  
  },  
  {  
    "id": "project-2",  
    "title": "Color Palette Generator",  
    "description": "Aplikasi berbasis web untuk menghasilkan kombinasi warna secara acak yang cocok untuk desain UI/UX.",  
    "date": "September 2024",  
    "technologies": \["HTML", "CSS", "Vanilla JS"\],  
    "category": "Front End",  
    "image\_thumbnail": "./assets/images/project/color-thumb.webp",  
    "image\_modal": "./assets/images/project/color-full.webp",  
    "link": "\[https://colorpalette.netlify.app\](https://colorpalette.netlify.app)"  
  }  
\]  
\`\`\`

\---

\#\# 2\. Multi-Language Dictionary (\`translations.json\`)  
\*\*Location:\*\* \`/data/translations.json\`

This file handles the English (\`en\`) and Indonesian (\`id\`) translations. The JavaScript will use \`localStorage\` to check the current language and replace the \`textContent\` of HTML elements that have a matching \`data-i18n\` attribute. \*Except for nav section

\#\#\# Expected JSON Schema:  
\`\`\`json  
{  
  "id": {  
    "nav\_about": "About",  
    "nav\_experience": "Experience",  
    "nav\_project": "Project",  
    "nav\_contact": "Contact",  
      
    "hero\_greeting": "Halo, Saya",  
    "hero\_role": "Pengembang Web & Frontend Enthusiast",  
    "hero\_btn\_primary": "Lihat Portofolio",  
    "hero\_btn\_secondary": "Unduh CV",  
      
    "section\_project\_title": "Pekerjaan Terbaru",  
    "btn\_view\_project": "Lihat Project",  
      
    "modal\_created": "Dibuat",  
    "modal\_tech": "Teknologi Digunakan",  
    "modal\_type": "Jenis",  
    "modal\_link": "View Code"  
  },  
  "en": {  
    "nav\_about": "About",  
    "nav\_experience": "Experience",  
    "nav\_project": "Projects",  
    "nav\_contact": "Contact",  
      
    "hero\_greeting": "Hello, I am",  
    "hero\_role": "Web Developer & Frontend Enthusiast",  
    "hero\_btn\_primary": "View Portfolio",  
    "hero\_btn\_secondary": "Download CV",  
      
    "section\_project\_title": "Recent Work",  
    "btn\_view\_project": "View Project",  
      
    "modal\_created": "Created",  
    "modal\_tech": "Tech Stack",  
    "modal\_type": "Type",  
    "modal\_link": "View Code"  
  }  
}  
\`\`\`

\---

\#\# 3\. Experience, Education & Organization Data (\`experience.json\`)  
\*\*Location:\*\* \`/data/experience.json\`

This file contains the structured data for the Carousel/Tab section in the Experience area. JavaScript will parse this data to render the timeline items based on the active tab category.

\#\#\# Expected JSON Schema:  
\`\`\`json  
{  
  "experience": \[  
    {  
      "period": "Mei 2024 \- Sekarang",  
      "role": "Junior Program Development",  
      "institution": "MDTV Media Technologie",  
      "description": \[  
        "Bertanggung Jawab dalam Pengembangan Beberapa Program TV.",  
        "Mampu Mengoperasikan Nielsen Arianna untuk mengetahui Trend Industry TV.",  
        "Berkontribusi dalam mengolah data survey tentang program TV.",  
        "Berkontribusi dalam melakukan Evaluasi Program TV.",  
        "Bertanggung jawab menyediakan Pivot Konten Program TV.",  
        "Preview dan Review Program NET maupun program kompetitor.",  
        "Bertanggung jawab Menganalisis secara keseluruhan suatu program TV.",  
        "Bertanggung jawab membuat Simple Excel Macro dan mengubah template excel."  
      \]  
    },  
    {  
      "period": "Okt 2023 \- Apr 2024",  
      "role": "Freelance Program Development",  
      "institution": "NET Mediatama Televisi",  
      "description": \[  
        "Bertanggung Jawab dalam Pengembangan Beberapa Program TV.",  
        "Mampu Mengoperasikan Nielsen Arianna untuk mengetahui Trend Industry TV.",  
        "Berkontribusi dalam mengolah data survey tentang program TV."  
      \]  
    }  
  \],  
  "education": \[  
    {  
      "period": "2020 \- 2024",  
      "role": "S1 Ilmu Komputer / Informatika",  
      "institution": "Nama Universitas",  
      "description": \[  
        "Fokus pada pengembangan perangkat lunak dan antarmuka web.",  
        "Aktif dalam organisasi mahasiswa bidang teknologi."  
      \]  
    }  
  \],  
  "organization": \[  
    {  
      "period": "2022 \- 2023",  
      "role": "Koordinator Divisi IT",  
      "institution": "Nama Organisasi / Himpunan",  
      "description": \[  
        "Bertanggung jawab atas pengelolaan website dan aset digital organisasi.",  
        "Memimpin beberapa workshop terkait pemograman web dasar."  
      \]  
    }  
  \]  
}  
\`\`\`

\---

\#\# 4\. Developer Instructions for AI Agent

\> \*\*Crucial Implementation Details for the AI Agent/Developer:\*\*

1\. \*\*Translation Mapping:\*\* When generating \`index.html\`, ensure all translatable text elements include a \`data-i18n\` attribute that corresponds exactly to the keys in \`translations.json\`.   
   \* \*Example:\* \`\<h1 data-i18n="hero\_role"\>Pengembang Web & Frontend Enthusiast\</h1\>\`  
2\. \*\*Default Language Fallback:\*\* The default language on the first load MUST be Indonesian (\`id\`), unless a previously saved preference is found in the browser (i.e., \`localStorage.getItem('lang')\` specifies otherwise).  
3\. \*\*Data Fetching:\*\* Ensure asynchronous fetching (\`async/await\`) is used for all \`.json\` files, and include error handling (\`try...catch\`) in case the files are missing or unreadable.

