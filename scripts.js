const flashcards = [
    {question: "O que é Engenharia de Software?", answer: "É a aplicação de uma abordagem sistemática, disciplinada e quantificável para o desenvolvimento, operação e manutenção de software."},
    {question: "O que é um Requisito Funcional?", answer: "É uma especificação de comportamento que um sistema ou componente de software deve ter."},
    {question: "O que é um Requisito Não Funcional?", answer: "São critérios que julgam a operação de um sistema, como desempenho, usabilidade, confiabilidade, etc."},
    {question: "O que é um Ciclo de Vida de Software?", answer: "Conjunto de fases que um software passa desde sua concepção até sua descontinuação."},
    {question: "O que é Teste de Software?", answer: "É o processo de avaliar a funcionalidade de um software com a intenção de encontrar falhas."},
    {question: "O que é UML?", answer: "Unified Modeling Language, é uma linguagem padrão para especificar, visualizar e documentar artefatos de software."},
    {question: "O que é um Padrão de Projeto?", answer: "Solução reutilizável para problemas comuns no desenvolvimento de software."},
    {question: "O que é Integração Contínua?", answer: "Prática de automatizar a integração de código de vários desenvolvedores em um repositório compartilhado."},
    {question: "O que é Refatoração?", answer: "Processo de alterar a estrutura interna do código sem alterar seu comportamento externo."},
    {question: "O que é Gerenciamento de Configuração de Software?", answer: "Disciplina de acompanhar e controlar as mudanças no software durante seu ciclo de vida."}
];

let currentCard = 0;

document.getElementById("question").onclick = function() {
    document.getElementById("question").innerHTML = flashcards[currentCard].question;
}

document.getElementById("answer").onclick = function() {
    document.getElementById("answer").innerHTML = flashcards[currentCard].answer;
}

function showNextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    document.getElementById("question").innerHTML = "Clique para ver a pergunta";
    document.getElementById("answer").innerHTML = "Clique para ver a resposta";
}