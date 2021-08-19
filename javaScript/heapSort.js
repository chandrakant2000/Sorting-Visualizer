function heapSort()
{
    c_delay=0;
    heap_sort();
    enableButtons();
}

function swap(i,j)
{
    divUpdate(divs[i],divSizes[i],"red");//Color update
    divUpdate(divs[j],divSizes[j],"red");//Color update

    var temp=divSizes[i];
    divSizes[i]=divSizes[j];
    divSizes[j]=temp;

    divUpdate(divs[i],divSizes[i],"red");//Height update
    divUpdate(divs[j],divSizes[j],"red");//Height update

    divUpdate(divs[i],divSizes[i],"blue");//Color update
    divUpdate(divs[j],divSizes[j],"blue");//Color update
}

function maxHeapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && divSizes[l]>divSizes[largest])
    {
        if(largest!=i)
        {
            divUpdate(divs[largest],divSizes[largest],"blue");//Color update
        }

        largest=l;

        divUpdate(divs[largest],divSizes[largest],"red");//Color update
    }

    if(r<n && divSizes[r]>divSizes[largest])
    {
        if(largest!=i)
        {
            divUpdate(divs[largest],divSizes[largest],"blue");//Color update
        }

        largest=r;

        divUpdate(divs[largest],divSizes[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        maxHeapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(arraySize/2)-1;i>=0;i--)
    {
        maxHeapify(arraySize,i);
    }

    for(var i=arraySize-1;i>0;i--)
    {
        swap(0,i);
        divUpdate(divs[i],divSizes[i],"green");//Color update
        divUpdate(divs[i],divSizes[i],"yellow");//Color update

        maxHeapify(i,0);

        divUpdate(divs[i],divSizes[i],"blue");//Color update
        divUpdate(divs[i],divSizes[i],"green");//Color update
    }
    divUpdate(divs[i],divSizes[i],"green");//Color update
}