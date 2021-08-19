 
var event1 = document.querySelector("#arraySize");
var arraySize = Number(event1.value);
var event2 = document.querySelector("#speed");
var sortingSpeed = Number(event2.value);
var newArray = document.querySelector(".newArray");
var divSizes = [];
var divs = [];
var content = document.querySelector(".array_container");
var algoButtons = document.querySelectorAll("#navbar ul li a");
var marginSize = 0.1;
var heading = document.querySelector(".heading");

generateNewArray();

event1.addEventListener("input", function() {
    arraySize = Number(event1.value);
    generateNewArray();
});


newArray.addEventListener("click", function() {
    generateNewArray();
});


function generateNewArray() {
    content.innerHTML="";
    divSizes = [];
    divs = [];
    for(var i=0;i<arraySize;i++)
    {
        divSizes[i]=Math.floor(Math.random() * 0.5*(event1.max - event1.min) ) + 10;
        divs[i]=document.createElement("div");
        content.appendChild(divs[i]);
        
        divs[i].style=" margin:0% " + marginSize + "%; background-color:blue; width:" + (100/arraySize-(2*marginSize)) + "%; height:" + (divSizes[i]) + "%;";
    }
    
}

for (let i=0; i<algoButtons.length; i++) {
    algoButtons[i].addEventListener("click", function() {
        
        runAlgorithm(this);
    });
}

function disableButtons() {
  for (let i = 0; i < algoButtons.length; i++) {
    // algoButtons[i].classList = [];
    algoButtons[i].classList.add("disabled");

    algoButtons[i].disabled = true;
    event1.disabled = true;
    event2.disabled = true;
    newArray.disabled = true;
  }
}

function runAlgorithm(clickedAlgo)
{
    disableButtons();
    
    switch(clickedAlgo.innerText)
    {
        
        case "Bubble Sort":
            bubbleSort();
            heading.innerText = clickedAlgo.innerText;
            break;
        case "Selection Sort":
            selectionSort();
            heading.innerText = clickedAlgo.innerText;
            break;
        case "Insertion Sort":
            insertionSort();
            heading.innerText = clickedAlgo.innerText;
            break;
        case "Merge Sort":
            mergeSort();
            heading.innerText = clickedAlgo.innerText;
            break;
        case "Quick Sort":
            quickSort();
            heading.innerText = clickedAlgo.innerText;
            break;
        case "Heap Sort":
            heapSort();
            heading.innerText = clickedAlgo.innerText;
            break;
    }
}

if( window.innerWidth > 700 && window.innerWidth < 992) {
    $("nav").addClass("d-flex flex-column");
    $("nav div ul li").addClass("mx-1");
} else {
    $("nav div ul li").addClass("temp");
}


$(window).resize(function () {

    var viewport = window.innerWidth;
    if (viewport > 700 && viewport < 992) {
        console.log(window.innerWidth);
        $("nav").addClass("d-flex flex-column");
        $("nav div ul li").removeClass("temp");
        $("nav div ul li").addClass("mx-1");
    } else {
        $("nav").removeClass("d-flex flex-column");
        $("nav div ul li").removeClass("mx-1");
        $("nav div ul li").addClass("temp");
    }
});