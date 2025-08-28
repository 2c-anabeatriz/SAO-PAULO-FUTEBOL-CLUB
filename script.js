// Função para aumentar o tamanho da fonte do site
function ajustarFonte() {
    let body = document.body;
    let currentSize = window.getComputedStyle(body).fontSize;
    let newSize = parseFloat(currentSize) * 1.2;  // Aumenta o tamanho da fonte em 20%
    body.style.fontSize = newSize + "px";
}

// Função para alterar o contraste da página
function ajustarContraste() {
    let body = document.body;
    body.classList.toggle('alto-contraste');  // Adiciona ou remove a classe 'alto-contraste' para inverter as cores
}

// Função para ativar a leitura de tela usando o navegador (sintetizador de fala)
function lerConteudo() {
    let texto = document.body.innerText;  // Pega todo o conteúdo textual da página
    let msg = new SpeechSynthesisUtterance(texto);  // Cria um objeto de fala
    window.speechSynthesis.speak(msg);  // Fala o conteúdo da página
}

// Função para habilitar ou desabilitar a navegação por teclado
function habilitarNavegacaoTeclado() {
    let links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('focus', () => {
            link.style.outline = '2px solid #FFBF00';  // Destaca o item com uma borda amarela quando focado
        });
        link.addEventListener('blur', () => {
            link.style.outline = '';  // Remove a borda quando o foco sai
        });
    });
}

// Função para ajustar o zoom da página (alternativa para aumentar ou diminuir o zoom da página)
function ajustarZoom(fator) {
    let currentZoom = parseFloat(window.getComputedStyle(document.body).zoom || 1); // Pega o zoom atual ou 1 se não houver
    document.body.style.zoom = currentZoom * fator; // Aumenta ou diminui o zoom com base no fator
}

// Inicializa a navegação por teclado
habilitarNavegacaoTeclado();

// Eventos para os botões de acessibilidade
document.querySelector('#ajustarFonte').addEventListener('click', ajustarFonte);
document.querySelector('#ajustarContraste').addEventListener('click', ajustarContraste);
document.querySelector('#lerConteudo').addEventListener('click', lerConteudo);
