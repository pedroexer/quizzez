const perguntas = [
    {
        pergunta: "Qual a principal fonte de proteina na dieta de um atleta?",
        opcoes: [
            "Carnes e ovos",
            "Legumes",
            "Frutas",
            "Doces"
        ],
        resposta: 0 // índice da resposta correta
    },
    {
        pergunta: "Qual é o objetivo principal do treinamento de força?",
        opcoes: [
            "Aumentar a flexibilidade",
            "Reduzir o peso corporal",
            "Ganhar massa muscular",
            "Melhorar a resistencia cardiovascular"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual desses suplementos é usado na recuperação muscular?",
        opcoes: [
            "Creatina",
            "vitamina C",
            "Chá Verde",
            "açucar refinado"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual a pratíca comum entre bodybuilders para maximizar o ganho muscular?",
        opcoes: [
            "treinamento de força apenas uma vez por semana",
            "Fazer dietas extremamentes restritas",
            "Ciclar a carga de treino",
            "Evitar completamente carboidratos"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual tipo de exercicio é fundamental?",
        opcoes: [
            "Exercicios de alogamento",
            "Exercicios aerobicos",
            "Levantamento de peso",
            "Dança"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual desses é um campeonato famoso para bodybuilders?",
        opcoes: [
            "Copa do Mundo",
            "Jogos Olimpicos",
            "Mr. Olympia",
            "Campeonato de pokemon"
        ],
        resposta: 2
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

