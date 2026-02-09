let exames = [];
let total = 0;

fetch("exames.json")
  .then(res => res.json())
  .then(data => exames = data)
  .catch(err => console.error('Erro ao carregar exames:', err));

const searchInput = document.getElementById("search");
const results = document.getElementById("results");
const totalSpan = document.getElementById("total");

searchInput.addEventListener("input", () => {
  results.innerHTML = "";
  const termo = searchInput.value.toLowerCase();

  exames
    .filter(e => e.nome.toLowerCase().includes(termo))
    .forEach(exame => {
      const li = document.createElement("li");
        li.innerHTML = exame.nome + ' <strong>R$ ' + Number(exame.preco).toFixed(2) + '</strong>';
      li.onclick = () => adicionar(exame);
      results.appendChild(li);
    });
});

function adicionar(exame) {
  total += parseFloat(exame.preco) || 0;
  totalSpan.textContent = total.toFixed(2);
  searchInput.value = "";
  results.innerHTML = "";
}

function limpar() {
  total = 0;
  totalSpan.textContent = "0.00";
}
