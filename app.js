const game = ()=> {
    let pScore = 0;
    let cScore = 0; 
   //let's play
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        
        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeout")
            match.classList.add("fadeIn");
        }); 
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand =>{
          hand.addEventListener('animationend', function(){
            this.style.animation = "";
          })
        })
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];
        
        options.forEach(option=>{
           option.addEventListener('click', function(){
             //computeur choice
            const computerNumber = Math.floor(Math.random() * 3)
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() =>{
              //here is where we call compare Hands
              compareHands(this.textContent, computerChoice);
             //uptade img
              playerHand.src = `./assets/${this.textContent}.png`;
              computerHand.src = `./assets/${computerChoice}.png`;},2000)
            //animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
           });
        }); 
    };

    const udapteScore = () =>{
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) =>{
      //udapte text
      const winner = document.querySelector('.winner');
      //check for tie
      if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie';
        return;
      }
      //check for rock
      if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
          winner.textContent = 'player wins';
          pScore++;
         udapteScore();
          return; 
        }else{
          winner.textContent = 'computer wins';
          cScore++;
          udapteScore();
          return; 
        }
        //check for paper
      }
      if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
          winner.textContent = 'computer wins';
          cScore++;
          udapteScore();
          return; 
        }else{
          winner.textContent = 'player wins';
          pScore++;
          udapteScore();
          return;
        }
        //check for scissors
      }
      if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
          winner.textContent = 'computer wins';
          cScore++;
          udapteScore();
          return; 
        }else{
          winner.textContent = 'player wins';
          pScore++;
          udapteScore();
          return;
        }
        
      }
    };
      //is call all the inner function
    startGame(); 
    playMatch(); 
   
};
//start the game function
game();


