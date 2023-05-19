


let userNumber = parseInt(prompt('Insert a number with four digits number'));

if( !(userNumber > 999 && userNumber <= 9999)){

    userNumber = parseInt(prompt('Insert a number with four digits number'));

};

let sum = 0;

for (let index = 0; index < userNumber.length; index++) {

    sum += parseInt ( userNumber.charAt(index) );
    
};

console.log(sum);