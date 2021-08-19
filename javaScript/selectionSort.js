function selectionSort() {
    delay = 0;
    let i, j, minIdx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < arraySize; i++) {
        divUpdate(divs[i],divSizes[i],"yellow");

        // Find the minimum element in unsorted array
        minIdx = i;
        j = i+1;
        for (; j < arraySize; j++) {

            if (divSizes[j] < divSizes[minIdx]) {
                if(minIdx != i) {
                    divUpdate(divs[minIdx], divSizes[minIdx], "blue");
                }
                minIdx = j;
                divUpdate(divs[j], divSizes[j], "red");
            }
            
        }
        
 
        // Swap the found minimum element with the first element
        divUpdate(divs[i],divSizes[i],"red");//Color update
        

        let temp = divSizes[i];
        divSizes[i] = divSizes[minIdx];
        divSizes[minIdx] = temp;

        divUpdate(divs[i],divSizes[i],"red");//Height update
        divUpdate(divs[minIdx],divSizes[minIdx],"red");//Height update

        divUpdate(divs[minIdx], divSizes[minIdx], "blue");
        //mark the finish index green
        divUpdate(divs[i], divSizes[i], "green");
        
    }

    enableButtons();
}