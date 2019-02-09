function makeCounter() {
    var count = 0;
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}
var doCount = makeCounter();
var my = doCount;


console.log(my());
console.log(my());
console.log(my());
