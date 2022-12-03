console.log('Functions tutorial in js');

// 1]
function greet(name, ptext = "We are by default bruh") {
    console.log(ptext + "  " + name);
    console.log(name + " is a good boy");
}

function greet(same, stext) {
    console.log(stext + "  " + same);
    console.log(same + " is a good boy");
}


let name1 = "Sudarshan";
let name2 = "Kiran";
let same1 = "prajwal";
let same2 = "niraj";
let ptext = "Good Morning";
let stext = "Good NIght";
greet(name1, ptext);
greet(name2, ptext);
greet(same1, stext);
greet(same2, stext);

// 2]
function minus(a, b, c) {
    return d = a - b - c;
    console.log("function is returned")
    // above line will never be executed, bcoz nothing will be written after return statement
}

let call = minus(12, 6, 4);
console.log(call);

// 3]
function multiply(f, g, h) {
    return i = f * g * h;
}

let mall = multiply(4, 5, 6);
console.log(mall);

// 4]
function checker(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater");
    }


    else {
        console.log(num2 + " is greater");
    }
}

checker(6, 5);

// 5]
function converter(c) {
    let far = c * 1.8 + 32;
    return far;
}

let far = converter(30);
console.log(far);


// 6]
function acceptor(ce){
    k = ce + 273;
    return k;
}

let kyle = acceptor(27);
console.log(kyle);

// 7]
function receiver(deg){
    rad = deg*0.0174445;
    return rad;
}

let fan = receiver(114.64);
console.log(fan);

// let tell = checker(6, 5);
// console.log(tell);


// console.log(name1 + " is a good boy");
// console.log(name2 + " is a badd boy");
// console.log(name3 + " is a anchor boy");
// console.log(name4 + " is a short boy");