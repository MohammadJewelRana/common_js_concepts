/*
truthy /falsy::
1.true
2.any +val,-val truthy except 0
3.any string truthy truthy except empty string
4.undefined /null==falsy
*/
const x='solaiman';
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('falsy');
}


//== and ===
/*
==  ->value same check
===  -> value and type check
*/
const first=2;
const second=true;
if(first==second){
    console.log('value is equal because positive value')
}
else{
    console.log('not equal')
}

if(first===second){

    console.log('=== value is equal  ')
}

else{
    console.log(' === not equal')
}




