let x=10;
let y=x;
x=20;

let m={value :10};
let n=m;

m.value=20;
let obj={value :10};
function increase(obj)
{
    obj.value++;
}
increase(obj);
console.log(obj);