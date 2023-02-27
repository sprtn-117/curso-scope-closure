function fruits(){
    if(true){
        var fruit1 = "apple";   //function scope
        let fruit2 = "kiwi";    //block scope
        const fruit3 = "banana";    //block scope
        
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();




const myCar = [];
console.log(myCar);

myCar.push("ranault");
console.log(myCar);

myCar.pop();
console.log(myCar);