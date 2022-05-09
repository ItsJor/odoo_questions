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

    getRandom.addEventListener("click", async ()=> {
        //getDisplay.innerText = Math.floor(Math.random() * 500);
        try {
            let get = await fetch('https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new,');
            let change = await get.json();
            getDisplay.innerHTML= change;
        }
        catch (error) {
            console.log(error);
            getDisplay.innerText = Math.floor(Math.random() * 500);
        }

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