function insert(num)
{
    const numero = document.getElementById('screen').innerText;
    document.getElementById('screen').innerText = numero + num;
}
function clean()
{
    document.getElementById('screen').innerHTML = "";
}
function back()
{
    const resultado = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    const resultado = document.getElementById('screen').innerHTML;
    if(resultado)
    {
        document.getElementById('screen').innerHTML = eval(resultado);
    }
    else
    {
     alert("Paramentros não definidos...");
    }
}

function alterSize() {
    const screenElement = document.getElementById('container');
    const contentLength = document.getElementById('screen');

    for ( let fontSize = 275 ;contentLength.offsetWidth >= screenElement.offsetWidth;fontSize = fontSize * 0.999 ){
        screenElement.style.fontSize = fontSize + 'px';
    };


}
    function adjustSize(){
        const screenElement = document.getElementById('container');
        screenElement.style.fontSize = 10000 + 'px';
    }
    


//Initial call to set the font size when the page loads
    alterSize();



    adjustSize();


// Adjust font size on window resize
window.addEventListener('resize', alterSize);

// Adjust font size on content change
new MutationObserver(alterSize).observe(document.getElementById('screen'), { characterData: true, childList: true, subtree: true });
// Initial call to set the font size when the page loads
alterSize();

 
