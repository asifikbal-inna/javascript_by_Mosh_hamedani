const circle={
    radius: 1,
    draw()
    {
        console.log('draw');
    }
};

for(let i in circle)
{
    console.log(i,circle[i]);
}

