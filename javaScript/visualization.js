
//We only have to change background-color and height of the sorting element.

var speed=1000;

event2.addEventListener("input", function () {
    sortingSpeed = Number(event2.value);
    switch(sortingSpeed)
    {
        case 1: 
            speed=1;
            break;
        case 2: 
            speed=10;
            break;
        case 3: 
            speed=100;
            break;
        case 4: 
            speed=1000;
            break;
        case 5: 
            speed=10000;
            break;
    }

    delayTime=10000/(Math.floor(arraySize/10)*speed);        //Decrease numerator to increase speed.
});

var delayTime=10000/(Math.floor(arraySize/10)*speed);        //Decrease numerator to increase speed.
var delay=0;//This is updated ov every div change so that visualization is visible.

function divUpdate(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + marginSize + "%; width:" + (100/arraySize-(2*marginSize)) + "%; height:" + height + "%; background-color:" + color + ";";
    },delay+=delayTime);
}

function enableButtons()
{
    
    window.setTimeout(function() {
        heading.innerText = "Select any Sorting Algorithm from top navigation menu.";
        for(let i=0; i<algoButtons.length; i++)
        {
            algoButtons[i].classList=["nav-link"];
            
            event1.disabled = false;
            event2.disabled = false;
            newArray.disabled = false;
        }
    },delay+=delayTime);
}