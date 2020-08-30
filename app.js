function combine(n1, n2) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineAges = combine(30, 36);
console.log(combineAges);
var combineNames = combine("Bohdan", "Max");
console.log(combineNames);
