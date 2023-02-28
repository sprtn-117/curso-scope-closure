function petList(){
    const pets = [];

    return function addPet(newPet) {
        if (newPet === "" | newPet === undefined)
            console.log(`zoo ${pets}`);
        else
            pets.push(newPet)
        return pets;
    }
}


const animals = petList();
animals();
animals("cat");
animals("dog");
animals();
animals("squirrel");
animals();