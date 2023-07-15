function createCircle(radius)
{
    return {
        radius,
        draw()
        {
            console.log('drawing circle');
        }
    };
}

function Circle(radius)
{
    this.radius = radius;
    this.draw=function()
    {
        console.log('draw');
    }
}

const circle = newCircle(1);y