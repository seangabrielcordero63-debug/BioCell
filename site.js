const organelles = [
  {
    name: "Nucleus",
    role: "Control center",
    desc: "Houses DNA and directs all cellular activity, growth, and reproduction.\n\nMedical Example: Cancer develops when mutations in the nucleus cause uncontrolled cell division."
  },

  {
    name: "Mitochondria",
    role: "Powerhouse",
    desc: "Produces ATP energy through cellular respiration.\n\nMedical Example: Mitochondrial diseases such as Leigh syndrome reduce ATP production, causing muscle weakness."
  },

  {
    name: "Ribosomes",
    role: "Protein synthesis",
    desc: "Produces proteins needed for growth and repair.\n\nMedical Example: Some antibiotics kill bacteria by targeting their ribosomes."
  },

  {
    name: "Endoplasmic Reticulum",
    role: "Transport network",
    desc: "Synthesizes proteins and lipids while transporting materials.\n\nMedical Example: Misfolded proteins in the ER are linked to cystic fibrosis."
  },

  {
    name: "Golgi Apparatus",
    role: "Packaging",
    desc: "Packages and ships proteins.\n\nMedical Example: Defects in the Golgi can affect hormone secretion."
  },

  {
    name: "Chloroplasts",
    role: "Photosynthesis",
    desc: "Produces glucose from sunlight.\n\nMedical Example: Medicinal plants rely on chloroplasts to produce compounds used in drugs."
  },

  {
    name: "Vacuoles",
    role: "Storage",
    desc: "Stores water and nutrients.\n\nMedical Example: Plant vacuoles store many medicinal compounds used in herbal medicine."
  },

  {
    name: "Lysosomes",
    role: "Digestion",
    desc: "Break down waste materials.\n\nMedical Example: Tay-Sachs disease occurs when lysosomes cannot break down certain fats."
  },

  {
    name: "Cell Membrane",
    role: "Gatekeeper",
    desc: "Controls movement in and out of the cell.\n\nMedical Example: Diabetes affects how glucose crosses cell membranes."
  },

  {
    name: "Cell Wall",
    role: "Structural support",
    desc: "Provides support for plant cells.\n\nMedical Example: Many antibiotics attack bacterial cell walls without harming human cells."
  }
];

const organisms = [
  {
    name: "Amoeba",
    desc: "Moves using pseudopodia.\n\nMedical Example: Entamoeba histolytica causes amoebiasis, leading to severe diarrhea."
  },

  {
    name: "Paramecium",
    desc: "Covered in cilia for movement.\n\nMedical Example: Used in laboratory studies to understand cell movement."
  },

  {
    name: "Euglena",
    desc: "Can photosynthesize and swim.\n\nMedical Example: Studied for producing vitamins and bioactive compounds."
  },

  {
    name: "Bacteria (E. coli)",
    desc: "A prokaryotic organism.\n\nMedical Example: Harmful strains can cause food poisoning and urinary tract infections."
  },

  {
    name: "Yeast",
    desc: "Single-celled fungus.\n\nMedical Example: Used to produce vaccines, insulin, and medicines."
  },

  {
    name: "Diatoms",
    desc: "Photosynthetic algae.\n\nMedical Example: Diatom fossils are used in forensic investigations."
  }
];

const tissues = [
  {
    group: "Meristematic",
    role: "Growth & division",
    desc: "Actively dividing cells responsible for plant growth.\n\nMedical Example: Scientists study meristem cells to improve medicinal plants.",
    items: ["Apical meristem", "Lateral meristem", "Intercalary meristem"]
  },

  {
    group: "Dermal",
    role: "Protection",
    desc: "Protects the plant from injury and pathogens.\n\nMedical Example: A damaged epidermis makes plants more vulnerable to disease.",
    items: ["Epidermis", "Stomata guard cells", "Periderm"]
  },

  {
    group: "Ground",
    role: "Support & storage",
    desc: "Stores nutrients and performs photosynthesis.\n\nMedical Example: Many medicinal compounds are stored in ground tissues.",
    items: ["Parenchyma", "Collenchyma", "Sclerenchyma"]
  },

  {
    group: "Vascular",
    role: "Transport",
    desc: "Moves water and nutrients throughout the plant.\n\nMedical Example: Tree injections use xylem to distribute medicine against plant diseases.",
    items: ["Xylem", "Phloem", "Companion cells"]
  }
];

const animalTissues = [
  {
    group: "Epithelial Tissue",
    role: "Protection",
    desc: "Covers body surfaces and lines organs. It protects against injury, infection, and water loss.\n\nMedical Examples:\n• Skin protects against bacteria and viruses.\n• Skin burns damage epithelial tissue, increasing infection risk.",
    items: [
      "Skin",
      "Lining of the stomach",
      "Lining of the lungs"
    ]
  },

  {
    group: "Connective Tissue",
    role: "Support",
    desc: "Supports, binds, and protects organs while storing energy and transporting substances.\n\nMedical Examples:\n• Osteoporosis weakens bone tissue.\n• Blood transfusions replace lost blood tissue.",
    items: [
      "Bone",
      "Blood",
      "Cartilage"
    ]
  },

  {
    group: "Muscle Tissue",
    role: "Movement",
    desc: "Produces movement through contraction and generates body heat.\n\nMedical Examples:\n• Heart muscle pumps blood continuously.\n• Muscular dystrophy causes progressive muscle weakness.",
    items: [
      "Skeletal muscle",
      "Cardiac muscle",
      "Smooth muscle"
    ]
  },

  {
    group: "Nervous Tissue",
    role: "Communication",
    desc: "Receives, processes, and sends electrical signals throughout the body.\n\nMedical Examples:\n• Stroke damages brain nervous tissue.\n• Alzheimer's disease destroys neurons and affects memory.",
    items: [
      "Brain",
      "Spinal cord",
      "Peripheral nerves"
    ]
  }
];

// Render organelle buttons + detail
const listEl = document.getElementById('organelle-list');
const detailEl = document.getElementById('organelle-detail');

function renderDetail(o) {
  detailEl.innerHTML = `
    <span class="role">${o.role}</span>
    <h3>${o.name}</h3>
    <p>${o.desc}</p>
  `;
}

organelles.forEach((o, i) => {
  const btn = document.createElement('button');
  btn.className = 'org-btn' + (i === 0 ? ' active' : '');
  btn.innerHTML = `<div class="org-name">${o.name}</div><div class="org-role">${o.role}</div>`;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.org-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDetail(o);
  });
  listEl.appendChild(btn);
});
renderDetail(organelles[0]);

// Render organisms
document.getElementById('organism-grid').innerHTML = organisms.map(o => `
  <article class="organism">
    <div class="dot"><span></span></div>
    <h3>${o.name}</h3>
    <p>${o.desc}</p>
  </article>
`).join('');

// Render tissues
document.getElementById('tissue-grid').innerHTML = tissues.map(t => `
  <article class="tissue">
    <div class="tissue-top">
      <h3>${t.group}</h3>
      <span class="tissue-role">${t.role}</span>
    </div>
    <p>${t.desc}</p>
    <div class="tissue-items">${t.items.map(i => `<span>${i}</span>`).join('')}</div>
  </article>
`).join('');

// Render animal tissues
document.getElementById('animal-tissue-grid').innerHTML = animalTissues.map(t => `
  <article class="tissue">
    <div class="tissue-top">
      <h3>${t.group}</h3>
      <span class="tissue-role">${t.role}</span>
    </div>

    <p>${t.desc.replace(/\n/g, "<br>")}</p>

    <div class="tissue-items">
      ${t.items.map(i => `<span>${i}</span>`).join("")}
    </div>
  </article>
`).join("");
