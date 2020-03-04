//normal way for square a number

const numbers = [3,5,6,9,8];
const output = [];
for (let i= 0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result)
}


//use map for square a value *****
function square(element){
    return element * element;
}

const result =  numbers.map(function(element){
    return element * element;
})


//most important and so easy *****************
const result = numbers.map(x => x*x);
console.log(result);



//filter 
const bigger = numbers.filter(x => x>5);
console.log(bigger);

//find
const here = numbers.filter(x => x>5);
console.log(here);
