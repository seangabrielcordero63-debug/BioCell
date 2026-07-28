const organelles = [
  { name: "Nucleus", role: "Control center", desc: "Houses DNA and directs all cellular activity, growth, and reproduction." },
  { name: "Mitochondria", role: "Powerhouse", desc: "Produces ATP energy through cellular respiration — the cell's engine." },
  { name: "Ribosomes", role: "Protein synthesis", desc: "Tiny factories that translate RNA into proteins essential for life." },
  { name: "Endoplasmic Reticulum", role: "Transport network", desc: "Rough ER folds proteins; smooth ER synthesizes lipids and detoxifies." },
  { name: "Golgi Apparatus", role: "Packaging", desc: "Modifies, sorts, and ships proteins and lipids to their destinations." },
  { name: "Chloroplasts", role: "Photosynthesis", desc: "Capture sunlight to produce glucose — found only in plant cells." },
  { name: "Vacuoles", role: "Storage", desc: "Store water, nutrients, and waste; large central vacuole gives plants rigidity." },
  { name: "Lysosomes", role: "Digestion", desc: "Break down waste and foreign material — the cell's recycling unit." },
  { name: "Cell Membrane", role: "Gatekeeper", desc: "Semipermeable barrier controlling what enters and exits the cell." },
  { name: "Cell Wall", role: "Structural support", desc: "Rigid outer layer of cellulose giving plant cells their fixed shape." },
];

const organisms = [
  { name: "Amoeba", desc: "Moves using pseudopodia (false feet) and engulfs food by phagocytosis." },
  { name: "Paramecium", desc: "Covered in cilia for swimming; feeds through an oral groove." },
  { name: "Euglena", desc: "Has both plant and animal traits — photosynthesizes yet can move." },
  { name: "Bacteria (E. coli)", desc: "Prokaryotic — no nucleus; reproduces rapidly and adapts fast." },
  { name: "Yeast", desc: "Single-celled fungus used in baking and brewing via fermentation." },
  { name: "Diatoms", desc: "Algae with intricate silica shells; major oxygen producers." },
];

const tissues = [
  { group: "Meristematic", role: "Growth & division", desc: "Actively dividing cells found at root and shoot tips — responsible for plant growth.", items: ["Apical meristem", "Lateral meristem", "Intercalary meristem"] },
  { group: "Dermal", role: "Protection", desc: "The outer protective layer — epidermis in leaves and periderm in woody stems.", items: ["Epidermis", "Stomata guard cells", "Bark (periderm)"] },
  { group: "Ground", role: "Support & storage", desc: "Fills between dermal and vascular tissue; performs photosynthesis and stores food.", items: ["Parenchyma", "Collenchyma", "Sclerenchyma"] },
  { group: "Vascular", role: "Transport", desc: "The plant's plumbing — moves water, minerals, and food throughout the body.", items: ["Xylem (water up)", "Phloem (food all directions)", "Companion cells"] },
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