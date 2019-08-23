

function nametageContent(tags){
    return `
    <div class="text-center mt-5">
        <div style="width: 200px; 
                    height: 100px; 
                    background-color: blue ;" 
                    <p><font color="red">${tags}</font></p>
        </div>
    </div>
`
}

function renderNametags(nametags) {
  
    return nametags.map(nametageContent).join('')
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}