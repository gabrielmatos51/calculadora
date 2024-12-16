const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const divList = [];

// Referenciar elementos
const btns = [...document.querySelectorAll(".button"), ...document.querySelectorAll(".buttonOper")];

// Função para gerar cor hexadecimal aleatória
function generateHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

// Função para adicionar um novo div
function addNewDiv(color) {
    const newDiv = document.createElement("div");
    newDiv.className = "newDiv";
    newDiv.style.color = color;
    newDiv.id = color;

    document.getElementById("screen")?.appendChild(newDiv); // Adicionar apenas se o elemento existir
    divList.push(color);
}

// Função para obter número aleatório
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// Adicionar evento a todos os botões
btns.forEach(button => {
    button.addEventListener("click", function () {
        const color = generateHexColor();
        addNewDiv(color);
    });
});