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
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
