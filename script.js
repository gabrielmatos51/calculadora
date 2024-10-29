function insert(num)
{
    var numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('screen').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('screen').innerHTML;
    if(resultado)
    {
        document.getElementById('screen').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('screen').innerHTML = "Nada..."
    }
}

function alterSize() {
    var screenElement = document.getElementById('screen');
    var contentLength = screenElement.textContent.length;

   
    if (contentLength >= 7 && contentLength < 22) {
        let fontSize = 85 - (contentLength * 2.2);
        if (fontSize) {
            screenElement.style.fontSize = fontSize + 'px';
        }
    } else if (contentLength >= 22 && contentLength <= 40) {
        let fontSize = 85 - (22 * 1.5) - ((contentLength - 22) * 2);
        if (fontSize) {
            screenElement.style.fontSize = fontSize + 'px';
        }
    } else if (contentLength >= 40) {
        screenElement.innerHTML = "ERRO: QUANTITY NOT SUPPORTED";
        screenElement.style.fontSize = '30px';
    }
    
    else {
        screenElement.style.fontSize = '90px';
    }
}

// Initial call to set the font size when the page loads
alterSize();

// Adjust font size on window resize
window.addEventListener('resize', alterSize);

// Adjust font size on content change
new MutationObserver(alterSize).observe(document.getElementById('screen'), { characterData: true, childList: true, subtree: true });
// Initial call to set the font size when the page loads
alterSize();

 
