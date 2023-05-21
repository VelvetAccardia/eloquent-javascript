function isEven (number) {
    let result
    if (number >= 0) {
        result = (number === 0) ? true
               : (number === 1) ? false
               : (isEven(number - 2));
    } else result = isEven(number+2);

  return result;    
}

console.log(isEven(-2))

