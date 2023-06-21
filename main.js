
const computer = document.querySelector(".computer img");

const player = document.querySelector(".player img");

const computerScore = document.querySelector(".computerScore")

const playerScore = document.querySelector(".playerScore")

const options = document.querySelectorAll(".options button")

options.forEach(element => {
    element.addEventListener("click",()=>{
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");

        setTimeout(()=>{
            computer.classList.remove("shakeComputer");
            player.classList.remove("shakePlayer");

            player.src = `/${element.innerHTML}Player.png`;

            const choice = ["ROCK", "PAPER", "SCISSORS"];
            let array = Math.floor(Math.random()*3);
            let computerChoice=choice[array];
            computer.src =`/${computerChoice}Computer.png`;

            let cScore=parseInt(computerScore.innerHTML);
            let pScore=parseInt(playerScore.innerHTML);

            if(element.innerHTML==="ROCK"){
                if(computerChoice==="PAPER"){
                    computerScore.innerHTML=cScore+1;
                    document.querySelector(".message").innerHTML="Computer Won 🤖!";
                }
                else if(computerChoice==="SCISSORS"){
                    playerScore.innerHTML=pScore+1;
                    document.querySelector(".message").innerHTML="You Won 🙎!";
                }    
            }

            else if(element.innerHTML==="PAPER"){
                if(computerChoice==="SCISSORS"){
                    computerScore.innerHTML=cScore+1;
                    document.querySelector(".message").innerHTML="Computer Won 🤖!";
                }
                else if(computerChoice==="ROCK"){
                    playerScore.innerHTML=pScore+1;
                    document.querySelector(".message").innerHTML="You Won 🙎!";
                }  


            }
            else if(element.innerHTML==="SCISSORS"){
                if(computerChoice==="ROCK"){
                    computerScore.innerHTML=cScore+1;
                    document.querySelector(".message").innerHTML="Computer Won 🤖!";
                }
                else if(computerChoice==="PAPER"){
                    playerScore.innerHTML=pScore+1;
                    document.querySelector(".message").innerHTML="You Won 🙎! ";
                }  
            }

            if(element.innerHTML===computerChoice){
                document.querySelector(".message").innerHTML="Draw Hogya ! No Winner :(";
            }



        },300);

        

    });
});
