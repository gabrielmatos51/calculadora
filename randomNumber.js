 const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  const divList = [];

//Button that change color of number on screen.
 const btn = document.querySelectorAll(".button");
const btnOp = document.querySelectorAll(".buttonOper");

 btn.forEach(function(button) {
    button.addEventListener("click", function(){
    
   const newDiv = document.createElement("div");

    document.getElementById("screen").appendChild(newDiv);

    
    let hexColor = "#";
    for ( let i = 0; i < 6; i++) {

        hexColor += hex[getRandomNumber()];
      
    };

    newDiv.className = 'newDiv';
    newDiv.style.color = hexColor;
    newDiv.id = hexColor
    divList.push(hexColor);
    

   
    

    });

});



btnOp.forEach(function(buttonOp) {
    buttonOp.addEventListener("click", function(){
    
    const newDiv = document.createElement("div");

    document.getElementById("screen").appendChild(newDiv);

    
    let hexColor = "#";
    for ( let i = 0; i < 6; i++) {

        hexColor += hex[getRandomNumber()];
      
    };

    newDiv.className = 'newDiv';
    newDiv.style.color = hexColor;
    newDiv.id = hexColor
    divList.push(hexColor);
    

   
    

    });

});




function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};
