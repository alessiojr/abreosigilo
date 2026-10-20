document.addEventListener('DOMContentLoaded', () => {
  // Tabs for Perspectives and Modules
  const perspectiveBtns = document.querySelectorAll('.perspective-btn');
  const viewPanels = document.querySelectorAll('.view-panel');

  perspectiveBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-target');

      perspectiveBtns.forEach(b => b.classList.remove('active'));
      viewPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetView);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Nav buttons linking to corresponding views
  const navBtns = document.querySelectorAll('.nav-btn[data-target]');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-target');
      const matchingPerspective = document.querySelector(`.perspective-btn[data-target="${targetView}"]`);
      if (matchingPerspective) {
        matchingPerspective.click();
      }
    });
  });

  // Mock Deputies Database for Interactive Scoreboard
  const deputiesData = [
    { name: "Dep. Luiza Guimarães", state: "SP", party: "UNIÃO", status: "yes", phone: "5561999990001", email: "dep.luiza@camara.leg.br" },
    { name: "Dep. Marcos Valente", state: "MG", party: "PL", status: "undecided", phone: "5561999990002", email: "dep.marcos@camara.leg.br" },
    { name: "Dep. Carlos Barreto", state: "RJ", party: "PT", status: "yes", phone: "5561999990003", email: "dep.carlos@camara.leg.br" },
    { name: "Dep. Rodrigo Albuquerque", state: "BA", party: "PP", status: "no", phone: "5561999990004", email: "dep.rodrigo@camara.leg.br" },
    { name: "Dep. Mariana Freitas", state: "RS", party: "MDB", status: "yes", phone: "5561999990005", email: "dep.mariana@camara.leg.br" },
    { name: "Dep. Fernando Prado", state: "PR", party: "PSD", status: "undecided", phone: "5561999990006", email: "dep.fernando@camara.leg.br" },
    { name: "Dep. Beatriz Menezes", state: "PE", party: "PSB", status: "yes", phone: "5561999990007", email: "dep.beatriz@camara.leg.br" },
    { name: "Dep. Roberto Siqueira", state: "CE", party: "REPUBLICANOS", status: "undecided", phone: "5561999990008", email: "dep.roberto@camara.leg.br" },
    { name: "Dep. Eduardo Vasconcelos", state: "GO", party: "PODEMOS", status: "yes", phone: "5561999990009", email: "dep.eduardo@camara.leg.br" },
    { name: "Dep. Heloísa Ramos", state: "SC", party: "NOVO", status: "yes", phone: "5561999990010", email: "dep.heloisa@camara.leg.br" },
    { name: "Dep. Gustavo Lacerda", state: "PA", party: "PDT", status: "undecided", phone: "5561999990011", email: "dep.gustavo@camara.leg.br" },
    { name: "Dep. Vanessa Rocha", state: "DF", party: "PSOL", status: "yes", phone: "5561999990012", email: "dep.vanessa@camara.leg.br" }
  ];

  // Render Scoreboard Table
  const tbody = document.getElementById('deputies-table-body');
  const filterState = document.getElementById('filter-state');
  const filterStatus = document.getElementById('filter-status');
  const filterSearch = document.getElementById('filter-search');

  function renderTable() {
    if (!tbody) return;
    const sState = filterState ? filterState.value : 'ALL';
    const sStatus = filterStatus ? filterStatus.value : 'ALL';
    const sSearch = filterSearch ? filterSearch.value.toLowerCase() : '';

    const filtered = deputiesData.filter(d => {
      const matchState = sState === 'ALL' || d.state === sState;
      const matchStatus = sStatus === 'ALL' || d.status === sStatus;
      const matchSearch = d.name.toLowerCase().includes(sSearch) || d.party.toLowerCase().includes(sSearch);
      return matchState && matchStatus && matchSearch;
    });

    tbody.innerHTML = '';
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-dim); padding: 24px;">Nenhum parlamentar encontrado com os filtros aplicados.</td></tr>`;
      return;
    }

    filtered.forEach(d => {
      let badgeClass = 'status-undecided';
      let label = 'Indeciso';
      if (d.status === 'yes') {
        badgeClass = 'status-yes';
        label = 'Favorável (Signatário)';
      } else if (d.status === 'no') {
        badgeClass = 'status-no';
        label = 'Contrário à PEC';
      }

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${d.name}</strong></td>
        <td><span style="color: #60a5fa; font-weight: 700;">${d.party}</span></td>
        <td><span style="color: var(--text-muted);">${d.state}</span></td>
        <td><span class="status-badge ${badgeClass}">${label}</span></td>
        <td>
          <button class="btn-copy btn-pressure-trigger" data-name="${d.name}" data-state="${d.state}">
            Pressionar
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Attach event to pressure buttons inside table
    document.querySelectorAll('.btn-pressure-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        openPressureModal(name);
      });
    });
  }

  if (filterState) filterState.addEventListener('change', renderTable);
  if (filterStatus) filterStatus.addEventListener('change', renderTable);
  if (filterSearch) filterSearch.addEventListener('input', renderTable);

  renderTable();

  // Populate Select in Citizen Pressure Section
  const selectDeputy = document.getElementById('select-deputy-pressure');
  if (selectDeputy) {
    deputiesData.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.name;
      opt.textContent = `${d.name} (${d.party}-${d.state})`;
      selectDeputy.appendChild(opt);
    });

    selectDeputy.addEventListener('change', () => {
      updatePressureMessage();
    });
  }

  function openPressureModal(deputyName) {
    const pressureBtn = document.querySelector('.perspective-btn[data-target="view-pressure"]');
    if (pressureBtn) {
      pressureBtn.click();
      if (selectDeputy) {
        selectDeputy.value = deputyName;
        updatePressureMessage();
        selectDeputy.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function updatePressureMessage() {
    const msgPreview = document.getElementById('pressure-message-preview');
    const whatsappLink = document.getElementById('btn-send-whatsapp');
    const selectedName = selectDeputy ? selectDeputy.value : "Senhor(a) Deputado(a)";
    const depObj = deputiesData.find(d => d.name === selectedName);

    const text = `Prezado(a) ${selectedName}, como eleitor(a) do seu estado, exijo o seu apoio inequívoco e assinatura na PEC da Transparência Patrimonial Plena e no PLP das Inelegibilidades. Quem pede o voto popular tem a obrigação moral e constitucional de prestar contas e autorizar a auditoria fiscal contínua de seu patrimônio pela Receita Federal. O povo brasileiro está vigiando o seu posicionamento no Placar da Transparência!`;

    if (msgPreview) {
      msgPreview.value = text;
    }

    if (whatsappLink && depObj) {
      whatsappLink.href = `https://wa.me/${depObj.phone}?text=${encodeURIComponent(text)}`;
    }
  }

  // Copy Buttons handler
  document.querySelectorAll('.btn-copy[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const elem = document.getElementById(targetId);
      if (!elem) return;

      const textToCopy = elem.value !== undefined ? elem.value : elem.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `✓ Copiado!`;
        btn.style.borderColor = 'var(--accent-green)';
        btn.style.color = 'var(--accent-green)';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Falha ao copiar:', err);
      });
    });
  });

  // Initialize message generator
  updatePressureMessage();
});
