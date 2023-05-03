/* Função antiga:
function fizzBuzz () {
    let number = 1;
    while ( number <= 100 ) {
        
        if ( (number % 3) === 0 && (number % 5) === 0) {
            console.log('FizzBuzz');
        }
        else if ( (number % 3) === 0) {
            console.log('Fizz');
        }
        else if ( (number % 5) === 0) {
            console.log('Buzz');
        } else {
            console.log(number);
        }
        number++; 
    }        
}
*/

function fizzBuzz () {
    let number = 1;
    while ( number <= 100 ) {
        let output = (number % 3 === 0 && number % 5 === 0) ? 'FizzBuzz'
                   : (number % 3 === 0) ? 'Fizz'
                   : (number % 5 === 0) ? 'Buzz'
                   : number;
        console.log(output);
        number++;
    }        
}

fizzBuzz();