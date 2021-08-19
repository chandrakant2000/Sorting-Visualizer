function bubbleSort()
{
    delay=0;

    for(var i=0;i<arraySize-1;i++)
    {
        for(var j=0;j<arraySize-i-1;j++)
        {
            divUpdate(divs[j],divSizes[j],"yellow");//Color update

            if(divSizes[j]>divSizes[j+1])
            {
                divUpdate(divs[j],divSizes[j], "red");//Color update
                divUpdate(divs[j+1],divSizes[j+1], "red");//Color update

                let temp=divSizes[j];
                divSizes[j]=divSizes[j+1];
                divSizes[j+1]=temp;

                divUpdate(divs[j],divSizes[j], "red");//Height update
                divUpdate(divs[j+1],divSizes[j+1], "red");//Height update
            }
            divUpdate(divs[j],divSizes[j], "blue");//Color update
        }
        divUpdate(divs[j],divSizes[j], "green");//Color update
    }
    divUpdate(divs[0],divSizes[0], "green");//Color update

    enableButtons();
}