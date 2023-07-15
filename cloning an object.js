const circle={
    radius: 1,
    draw()
    {
        console.log('draw');
    }
};

const another={};

for(let i in circle)
{
    another[i]=circle[i];
}
console.log(another);

const okkk=Object.assign({},circle);
console.log(okkk);

const hey={...circle};
console.log(hey);