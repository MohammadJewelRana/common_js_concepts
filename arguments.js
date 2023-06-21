
//take parameter 2
//but send lots of parameter
//all is called arguments
function sum(a,b){
    console.log(arguments);//convert in object

   //loop diye sobgula paoa jabe

   //convert array like obj in normal array
   const arr=[...arguments];
   console.log(arr);

    console.log(arguments[4]);//array like object
    return a+b;
}

const total=sum(4,67,32,7,87,37);//here value=arguments
console.log(total);





