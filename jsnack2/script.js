


const guestList = ['beatles', 'iron-maiden', 'metallica', 'cure', 'clash'];

const userName = prompt('Insert your name');

let realGuest = false;

for (let index = 0; index < guestList.length; index++) {

    if(guestList[index].toLowerCase === userName.toLowerCase){

    realGuest = true;

    } 
};


if(realGuest){

    console.log('Welcome')

}else{

    console.log('Go to home!')

}