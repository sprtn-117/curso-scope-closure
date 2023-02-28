/*
con ayude de closure una funcion puede recordar el valor
de una variable, para ello necesitamos una funcion anidada
*/
function moneyBox(){
    let saveCoins = 0;

    return function countCoins(coins=0){
        saveCoins += coins;
        console.log(`Usted a ahorado ${saveCoins}`);
    }
}

/*
la constante save recibe la funcion countCoins como valor
*/
const save = moneyBox();
save();
save(5);
save(5);