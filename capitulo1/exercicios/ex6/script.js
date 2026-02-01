const display = document.querySelector('#display');
const botoes = document.querySelector('.botoes');

botoes.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;

    const btn = e.target;
    const acao = btn.dataset.acao;
    const valor = btn.dataset.valor;

    if (valor) {
        display.value += valor;
    } else if (acao === 'limpar') {
        display.value = '';
    } else if (acao === 'apagar') {
        display.value = display.value.slice(0, -1);
    } else if (acao === 'calcular') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Erro";
            setTimeout(() => display.value = "", 1500);
        }
    }
});