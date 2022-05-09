function start(){

    let getNumbers = Array.from(document.querySelectorAll(".number"));
    const getDisplay = document.getElementById("display");
    const getRandom = document.getElementById("random");
    const getStart = document.getElementById('start');

    for (let buttons of getNumbers){
        buttons.addEventListener("click", ()=>{
            if (getDisplay.innerText === 0 || getDisplay.innerText==='Happy Birthday!')
                getDisplay.innerText = buttons.innerText;
            else { 
                getDisplay.innerText += buttons.innerText;
        }
        })
    };

    getRandom.addEventListener("click", ()=> {
        getDisplay.innerText = Math.floor(Math.random() * 500);
    })

    getStart.addEventListener('click', ()=> {
        let t = setInterval(function() {
            if (getDisplay.innerText) getDisplay.innerText -= 1;
            if (getDisplay.innerText==='0') {
                clearInterval(t);
                getDisplay.innerText='Happy Birthday!';
            }
        },1);
    });
}

start();