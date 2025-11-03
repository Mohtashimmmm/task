function findpairs(arr , target = 10){
    let allpair = [];
    let uniquepairs = new Set();
    let combpairs = new Set();


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++ )
        if (i !== j && arr[i] + arr[j]===target){
            allpair.push( [arr[i], arr[j]]);
        }
        }
}
allpair.foreach (pair => {
    uniquepairs.add(pair.toString());

});

allpair.foreach(pair => {
    let [a, b] = pair;

    combpairs.add([Math.min(a ,b),
        Math.max (a, b)].toString()

    );
} 

);

const