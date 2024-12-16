async function insert(num){  
  let tamanho = divList.length ;

    // atrasa em alguns milisegundos a execução dessa função.
    await new Promise(resolve => setTimeout(resolve, 10));
    document.getElementById(divList[tamanho]).innerText = num;
       

    
        
}

    
function clean(){

    document.getElementById('screen').innerHTML = "";
    divList.length = 0

}

function back() {
    const screen = document.getElementById("screen");
    const listClass = screen.querySelectorAll(".newDiv");

    if (listClass.length > 0) {
        const lastDiv = listClass[listClass.length - 1];
        screen.removeChild(lastDiv); // Remove o último
        divList.pop(); // Remove a última cor da lista
    }
}


/*function calcular()
{
    const LocalScreen = document.getElementById('screen');
    const divs = LocalScreen.querySelectorAll(".newDiv");
    let resultado = "";
    

    divs.forEach(div => {
        resultado += div.textContent.trim();

    });

    
    LocalScreen.style.color = divList[divList.length -1];


    
   
    if(resultado)
    {
        const LocalScreen = document.getElementById('screen');
        const divs = LocalScreen.querySelectorAll(".newDiv");
        let screenDiv = LocalScreen.textContent
        
       

        resultado = screenDiv;
        document.getElementById("screen").innerText = eval(resultado);
        console.log( resultado = screenDiv)

    

    }
    else
    {
     alert("Paramentros não definidos...");

    }
    


}*/

  async function calcular() {
    const LocalScreen = document.getElementById('screen');
    const divs = LocalScreen.querySelectorAll(".newDiv");
    let resultado = "";

    // Concatena o conteúdo de todas as divs
    divs.forEach(div => {
        resultado += div.textContent.trim();
    });

    if (resultado) {
        try {
            const calculado = eval(resultado); // Use com cuidado

            const divs = LocalScreen.querySelectorAll("div");

            await new Promise(resolve => setTimeout(resolve, 10));
            
            divs.forEach((div,index) =>{
                if(index >= 0) {
                    div.remove();
                }
            });

            divList.splice(0, divList.length - 1);

            document.getElementById(divList[0]).innerText = calculado;
            document.getElementById(divList[0]).style.color = divList[0];

        } catch (e) {
            alert("Erro ao calcular: parâmetros inválidos.");
            
        }
    } else {
        alert("Parâmetros não definidos...");
        
    }
}



function alterSize() {
    const screenElement = document.getElementById('container');
    const contentLength = document.getElementById('screen');
    const divElements = document.querySelectorAll('.newDiv');

    // Verifica se os elementos existem
    if (!screenElement || !contentLength) {
        console.error("Elementos 'container' ou 'screen' não encontrados.");
        return;
    }

    // Ajusta a fonte se o conteúdo exceder o tamanho do container
    for(let font = 275; contentLength.clientWidth > screenElement.clientWidth; font = font * 0.999) {
        
        // Itera sobre as divs para ajustar o tamanho da fonte
        divElements.forEach(element => {
            element.style.fontSize = font + 'px';
           
        });
    }
}

function adjustSize() {
   
    if(contentLength.clientWidth < screenElement.clientWidth){ 
        const divElements = document.querySelectorAll('.newDiv');
        // Define um tamanho de fonte inicial muito grande
        divElements.forEach(element => {
        element.style.fontSize = '1000' + 'px';
    });}
}


// Ajusta a fonte ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    alterSize();
    adjustSize();
});

// Ajusta a fonte ao redimensionar a janela
window.addEventListener('resize', alterSize);

// Ajusta a fonte quando o conteúdo muda
 screenElemen = document.getElementById('screen');
if (screenElemen) {
    new MutationObserver(() => {
        alterSize();
    }).observe(screenElemen, { characterData: true, childList: true, subtree: true });
}
 
