const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que acabar a aula você vai para casa?
        alternativas: [
            {
                texto:  "Sim,pois almoço la.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não, geralmente prefiro ir em um restaurante e almoçar por la.",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Pós almoço você vai dormir?",
        alternativas: [
            {
                texto:"Sim,estou cansada da minha manhã.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Não,ajudo a organizar a casa.",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Quando termina de organizar a casa vai estudar?",
            {
                texto:"Sim,estudo os conteudos vistos em sala no dia.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Não, normalmente vou ajudar meu pai no trabalho.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "A 18:00 você vai para ua casa?",
        alternativas: [
            {
                texto:"Sim,me arrumo para ir para aula do cursinho.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Não,encontro com minha mãe e vou no shopping.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Você vai dormir a 22:00?",
        alternativas: [
            {
                texto: "Sim,pois meu dia foi muito cansativo.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Não,chego em casa depois da aula só as 23:00 até me arrumar para dormir, durmo um pouco mais tarde.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();