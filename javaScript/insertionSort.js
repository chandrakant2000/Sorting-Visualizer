function insertionSort()
{
    delay=0;

    for(var j=0;j<arraySize;j++)
    {
        divUpdate(divs[j],divSizes[j],"yellow");//Color update

        var key= divSizes[j];
        var i=j-1;
        while(i>=0 && divSizes[i]>key)
        {
            divUpdate(divs[i],divSizes[i],"red");//Color update
            divUpdate(divs[i+1],divSizes[i+1],"red");//Color update

            divSizes[i+1]=divSizes[i];

            divUpdate(divs[i],divSizes[i],"red");//Height update
            divUpdate(divs[i+1],divSizes[i+1],"red");//Height update

            divUpdate(divs[i],divSizes[i],"blue");//Color update
            if(i==(j-1))
            {
                divUpdate(divs[i+1],divSizes[i+1],"yellow");//Color update
            }
            else
            {
                divUpdate(divs[i+1],divSizes[i+1],"blue");//Color update
            }
            i-=1;
            
        }
        divSizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            divUpdate(divs[t],divSizes[t],"green");//Color update
        }
    }
    divUpdate(divs[j-1],divSizes[j-1],"green");//Color update

    enableButtons();
}