function quickSort()
{
    c_delay=0;

    quick_sort(0,arraySize-1);

    enableButtons();
}

function quickPartition (start, end)
{
    var i = start + 1;
    var piv = divSizes[start] ;//make the first element as pivot element.
    divUpdate(divs[start],divSizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (divSizes[ j ] < piv)
            {
                divUpdate(divs[j],divSizes[j],"yellow");//Color update

                divUpdate(divs[i],divSizes[i],"red");//Color update
                divUpdate(divs[j],divSizes[j],"red");//Color update

                var temp=divSizes[i];
                divSizes[i]=divSizes[j];
                divSizes[j]=temp;

                divUpdate(divs[i],divSizes[i],"red");//Height update
                divUpdate(divs[j],divSizes[j],"red");//Height update

                divUpdate(divs[i],divSizes[i],"blue");//Height update
                divUpdate(divs[j],divSizes[j],"blue");//Height update

                i += 1;
            }
    }
    divUpdate(divs[start],divSizes[start],"red");//Color update
    divUpdate(divs[i-1],divSizes[i-1],"red");//Color update

    var temp=divSizes[start];//put the pivot element in its proper place.
    divSizes[start]=divSizes[i-1];
    divSizes[i-1]=temp;

    divUpdate(divs[start],divSizes[start],"red");//Height update
    divUpdate(divs[i-1],divSizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        divUpdate(divs[t],divSizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var pivPos = quickPartition (start, end ) ;
        quick_sort (start, pivPos -1);//sorts the left side of pivot.
        quick_sort (pivPos +1, end) ;//sorts the right side of pivot.
    }
 }