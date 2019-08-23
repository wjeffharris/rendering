

function RollCall(person){
    

    let AttendanceStat =""
    let boxColor
    
    if(person.isPresent == true){
       AttendanceStat ="present"
       boxColor = "student-green" 
    }
    else{
        AttendanceStat ="Absent"
        boxColor = "student-red"
    }
   
   return `
    <div class="text-center mt-5">
        <div class ="Student ${boxColor}">
            <div class="name">${person.name}</div> 
            <div class ="attendance">${AttendanceStat}</div>
            
        </div>
    </div>


`

}
function renderStudents(studentsList) {
  
    var studentArray = studentsList.map(RollCall)
    var studentStr = studentArray.join(" ");
    return `
        <div class='parent'>
                <h1> Roll Call! </h1>
                ${studentStr}

        </div>
    `
    
   
}

function students() {
    var content = document.getElementById('content');

    
    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }

    ]
        
  
    content.innerHTML = renderStudents(studentsAbstraction);
}