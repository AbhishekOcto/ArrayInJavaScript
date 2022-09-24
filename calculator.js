class Calculator{
    constructor(){

    }
    
    addition(n1 , n2){
        return n1+n2;
    }

    subtraction(n1, n2){
        return n1-n2;
    }

    multiplication(n1, n2){
        return n1*n2;
    }

    division(n1, n2){
        return n1/n2;
    }
}

    let calci = new Calculator();
    console.log(calci.addition(5,6));
    console.log(calci.subtraction(5,6));
    console.log(calci.multiplication(5,6));
    console.log(calci.division(5,6));

