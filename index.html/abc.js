const inputs = document.querySelector(".inputs"),
resetBtn =document.querySelector(".reset btn"),
hint =document.querySelector(".hint span");

function randomword(){
    //getting random object from wordlist
    let ranobj = wordList[Math.floor(math.random()*wordList.length)];
    let word = ranobj.word;
    hint.innerText = ranobj.hint;
    let html ="";
    for( let i=0; i< word.length; i++)
    {
        html += `<input type ="text" disabled>`;
    }
    inputs.innerHTML = html;

}
randomword();
resetBtn.addEventListener("click", randomword);