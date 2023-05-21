function minimum (value1, value2) {
   let result =   (value1 < value2)   ? value1 
                : (value1 > value2)   ? value2
                : (value1 === value2) ? 'Equal values'
                : NaN;
    return result
}
