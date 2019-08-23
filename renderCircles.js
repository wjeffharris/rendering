function createSingleCircle(indCircle){

        return `
            <div >
                <div class= "text-center mt-5" style="width:${indCircle.radius}px ; height:${indCircle.radius}px; border-radius:${indCircle.radius}px ; background-color:${indCircle.color} ;" </div>
            </div>
        
        `
}



function renderCircles(arrayOfData) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 

    return arrayOfData.map(createSingleCircle).join('')


}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}