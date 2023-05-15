function factorial (number) {
    let result = 1;
    
    for (let iteration = 1;  iteration <= number; iteration++) {
        result *= iteration;
    }
    console.log(result);
}

factorial(10);