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
    var contentLength = screenElement.innerHTML.length;

    if (contentLength >= 7 && contentLength < 22) {
        let fontSize = 85 - (contentLength * 3.2);
        screenElement.style.fontSize = fontSize + 'px';
        if(fontSize > 15){
            screenElement.style.fontSize = fontSize + 'px';
        }
    } else if (contentLength >= 22 && contentLength < 50 ) {
        let fontSize = 85 - (22 * 2.5) - ((contentLength - 22) * 2.8);

        if(fontSize > 15){
            screenElement.style.fontSize = fontSize + 'px';
        }
        
    }
    else {
        screenElement.style.fontSize = '90px';
    }
}

// Initial call to set the font size when the page loads
alterSize();

// Adjust font size on window resize
window.addEventListener('resize', alterSize);

// Adjust font size on content change (if applicable)
new MutationObserver(alterSize).observe(document.getElementById('screen'), { characterData: true, childList: true, subtree: true });