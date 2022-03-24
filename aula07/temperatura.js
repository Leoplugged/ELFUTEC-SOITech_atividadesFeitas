//Queremos fazer um problema para dizer se hoje está frio ou calor.

//ESTRUTURAS CONDICIONAIS

function calorOuFrio(temperatura){
    if (temperatura>30){
        console.log("Está calor!")
    }else if (temperatura<20){
        console.log("Está frio!")
    }else{
        console.log("Está favorável!")
    }
}

calorOuFrio(40);
calorOuFrio(19);
calorOuFrio(21);