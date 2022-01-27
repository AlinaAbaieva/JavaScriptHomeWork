const arr = [1,1,2,1,3,1];
const filter = function(item) {
    return (item > 1);
};

////

function filterArray(array, filterFunction) {
    let reArr = new Array;
    let reArrIndex = 0;
    for(let i = 0; i < array.length; i++) {
        if(filterFunction(array[i])) {
            reArr[reArrIndex] = array[i];
            reArrIndex++;
        }
    }
    return reArr;
}

////

let fin = filterArray(arr, filter);

alert(fin.toString());
