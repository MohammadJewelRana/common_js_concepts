
//closure
//ekta fn er vitor arekta fn return korle eta k closure bole
//
function kitchen(){
    let roast=0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer=kitchen();
console.log(firstServer());





