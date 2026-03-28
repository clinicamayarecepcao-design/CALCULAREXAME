let exames = [];
let total = 0;

document.addEventListener('DOMContentLoaded', function() {
  // Agora fetch e DOM são seguros
  fetch('../exames.json')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      exames = data;
      console.log('✅ Exames carregados com sucesso:', exames);
    })
    .catch(err => console.error('❌ Erro ao carregar exames:', err));

  // Agora os elementos do DOM existem
  const searchInput = document.getElementById('search');
  const results = document.getElementById('results');
  const totalSpan = document.getElementById('total');

  if (!searchInput || !results || !totalSpan) {
    console.error('❌ Elementos do DOM não encontrados!');
    return;
  }

  searchInput.addEventListener('input', () => {
    results.innerHTML = '';
    const termo = searchInput.value.toLowerCase();

    exames
      .filter(e => e.nome.toLowerCase().includes(termo))
      .forEach(exame => {
        const li = document.createElement('li');
        li.innerHTML = exame.nome + ' <strong>R$ ' + Number(exame.preco).toFixed(2) + '</strong>';
        li.onclick = () => adicionar(exame);
        results.appendChild(li);
      });
  });
});

function adicionar(exame) {
  total += parseFloat(exame.preco) || 0;
  document.getElementById('total').textContent = total.toFixed(2);
  document.getElementById('search').value = '';
  document.getElementById('results').innerHTML = '';
}

function limpar() {
  total = 0;
  document.getElementById('total').textContent = '0.00';
}