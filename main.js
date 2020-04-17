let displayval = "";
let output = 0;
let sum = [];
let getdecimal = document.getElementById('decimal');
let getzero = document.getElementById('zero');
let getone = document.getElementById('one');
let gettwo = document.getElementById('two');
let getthree = document.getElementById('three');
let getfour = document.getElementById('four');
let getfive = document.getElementById('five');
let getsix = document.getElementById('six');
let getseven = document.getElementById('seven');
let geteight = document.getElementById('eight');
let getnine = document.getElementById('nine');
let getsqrd = document.getElementById('sqrd');
let getclear = document.getElementById('clear');
let getallclear = document.getElementById('allclear');
let getdivide = document.getElementById('divide');
let getmultiply = document.getElementById('multiply');
let getminus = document.getElementById('minus');
let getadd = document.getElementById('add');
let getequals = document.getElementById('equals');
let getsqrt = document.getElementById('sqrt');

let decimal = getdecimal.innerHTML
let zero = getzero.innerHTML
let one = getone.innerHTML
let two = gettwo.innerHTML
let three = getthree.innerHTML
let four = getfour.innerHTML
let five = getfive.innerHTML
let six = getsix.innerHTML
let seven = getseven.innerHTML
let eight = geteight.innerHTML
let nine = getnine.innerHTML
let add = getadd.innerHTML
let minus = getminus.innerHTML
let multiply = getmultiply.innerHTML
let divide = "/"
let sqrd = getsqrd.innerHTML
let sqrt = getsqrt.innerHTML

function check(btn) {
    console.log(btn);
}
function updatedisplay() {
    document.getElementById('display').innerHTML = displayval;
}

getdecimal.addEventListener("click", function() {
    if (displayval === "0") {
        displayval += decimal
        updatedisplay()
    }
    else {displayval += decimal
        updatedisplay()}
})
getzero.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += zero
        updatedisplay()
    }
    else {displayval += zero
 updatedisplay()}
})
getone.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += one
        updatedisplay()
    }
    else {displayval += one
 updatedisplay()}
})
gettwo.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += two
        updatedisplay()
    }
    else {displayval += two
 updatedisplay()}
})
getthree.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += three
        updatedisplay()
    }
    else {displayval += three
 updatedisplay()}
})
getfour.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += four
        updatedisplay()
    }
    else {displayval += four
 updatedisplay()}
})
getfive.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += five
        updatedisplay()
    }
    else {displayval += five
 updatedisplay()}
})
getsix.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += six
        updatedisplay()
    }
    else {displayval += six
 updatedisplay()}
})
getseven.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += seven
        updatedisplay()
    }
    else {displayval += seven
 updatedisplay()}
})
geteight.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += eight
        updatedisplay()
    }
    else {displayval += eight
 updatedisplay()}
})
getnine.addEventListener("click", function() {
    if (displayval === "0") {
        displayval = ""
        displayval += nine
        updatedisplay()
    }
    else {displayval += nine
 updatedisplay()}
})
getallclear.addEventListener("click", function() {
    displayval = "0"
    updatedisplay()
})
getclear.addEventListener("click", function() {
    if (displayval.length == 1) {
        displayval = "0"
        updatedisplay();
    }
    else if (displayval.length > 1) {
        displayval = displayval.slice(0, -1)
        updatedisplay();
    }
})
getadd.addEventListener("click", function() {
    sum.push(parseFloat(displayval))
    displayval+= add
    updatedisplay();
})
getminus.addEventListener("click", function() {
    sum.push(parseFloat(displayval))
    displayval+= minus
    updatedisplay();
})
getmultiply.addEventListener("click", function() {
    sum.push(parseFloat(displayval))
    displayval+= multiply
    updatedisplay();
})
getdivide.addEventListener("click", function() {
    sum.push(parseFloat(displayval))
    displayval+= divide
    updatedisplay();
})
getsqrd.addEventListener("click", function() {
    sum.push(parseFloat(displayval))
    displayval = "";
    displayval = (sum[0] * sum[0])
    displayval = displayval.toString();
    sum = [];
    updatedisplay();
})
getsqrt.addEventListener("click", function() {
    sum.push(parseFloat(displayval))
    displayval = "";
    displayval = Math.sqrt(sum[0]);
    displayval = displayval.toString();
    sum = [];
    updatedisplay();
})
function getnum(operator) {
    return parseFloat(displayval.indexOf(operator)) + 1
}

getequals.addEventListener("click", function() {

    if (getnum("x") > 1) {
        displayval = displayval.slice(getnum("x"), displayval.length)
        sum.push(parseFloat(displayval))
        displayval = sum[0] * sum[1]
        displayval = displayval.toString();
        sum = [];
        updatedisplay();
    }
    else if (getnum("/") > 1) {
        displayval = displayval.slice(getnum("/"), displayval.length)
        sum.push(parseFloat(displayval))
        displayval = sum[0] / sum[1]
        displayval = displayval.toString();
        sum = [];
        updatedisplay();
    }
    else if (getnum("+") > 1) {
        displayval = displayval.slice(getnum("+"), displayval.length)
        sum.push(parseFloat(displayval))
        displayval = sum[0] + sum[1]
        displayval = displayval.toString();
        sum = [];
        updatedisplay();
    }
    else if (getnum("-") > 1) {
        displayval = displayval.slice(getnum("-"), displayval.length)
        sum.push(parseFloat(displayval))
        displayval = sum[0] - sum[1]
        displayval = displayval.toString();
        sum = [];
        updatedisplay();
    }
})
