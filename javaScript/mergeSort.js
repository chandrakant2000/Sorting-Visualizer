function mergeSort()
{
    delay=0;
    mergePartition(0,arraySize-1);
    enableButtons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=divSizes[q++];
            divUpdate(divs[q-1],divSizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=divSizes[p++];
            divUpdate(divs[p-1],divSizes[p-1],"red");//Color update
        }
        else if(divSizes[p]<divSizes[q])
        {
            Arr[k++]=divSizes[p++];
            divUpdate(divs[p-1],divSizes[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=divSizes[q++];
            divUpdate(divs[q-1],divSizes[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        divSizes[start++]=Arr[t];
        divUpdate(divs[start-1],divSizes[start-1],"green");//Color update
    }
}

function mergePartition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        divUpdate(divs[mid],divSizes[mid],"yellow");//Color update

        mergePartition(start,mid);
        mergePartition(mid+1,end);

        merge_sort(start,mid,end);
    }
}