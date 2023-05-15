function exponential (base, exponent) {
    let result = 1;   

    if (base === 0) {
        result = exponent === 0 ? NaN : 0;
    } else {
        for (let iteration =1; iteration <= exponent; iteration++) {
            result *= base;
        }

    }

    console.log(result);

}

exponential(4, 5);
