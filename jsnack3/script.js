


const numberList = [];

for (let index = 0; index < 6; index++) {

    const userNumber = parseInt(prompt('Insert a number'));

    if( !isNaN(userNumber) && userNumber % 2 === 1 ){

        numberList.push(userNumber);
    }
    
};

console.log(numberList);














