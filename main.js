const rock = document.querySelector('#rock');
rock.addEventListener('click', playerPlay);
const paper = document.querySelector('#paper');
paper.addEventListener('click', playerPlay);
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', playerPlay);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', start));

const results = document.querySelector('.results');
const para = document.createElement('p');


function computerPlay() {
    function random() {
        return Math.floor(Math.random() * 3)
    }
    if (random() == 0) {
        return "rock"
    }
    else if (random() == 1) {
        return "paper"
    }
    else {
        return "scissor"
    }
}
//var in wich playerSelection is stored    
var a

function playerPlay(e) {
    a = this.id;
}

function game1(p, c) {
    //this check for P>R
    if (p === "paper" && c === "rock") {
        checkA++
        return "You won! Paper beats rock"
        //this check for P<S
    }
    else if (p === "paper" && c === "scissor") {
        checkB++
        return "You lose! Scissor beats paper"
        //this check for R>S
    }
    else if (p === "rock" && c === "scissor") {
        checkA++
        return "You won! Rock beats scissor"
        //this check for R<P
    }
    else if (p === "rock" && c === "paper") {
        checkB++
        return "You lose! Paper beats rock"
        //this check for S<R
    }
    else if (p === "scissor" && c === "rock") {
        checkB++
        return "You lose! Rock beats scissor"
        //this check for S>P
    }
    else if (p === "scissor" && c === "paper") {
        checkA++
        return "You won! Scissor beats paper"
        //this check for even
    }
    else if (p === c) {
        return "That is even"
    }
}

function start(event) {
    // console.log(game1(a,computerPlay()))
    para.textContent = (game1(a, computerPlay()))
    results.appendChild(para);
}


//this variable check the victories of user
let checkA = 0;
//this variable check the victories of computer
let checkB = 0;


// //start with i=1 so it can log out game1,which sounds better than game0
// for (let i=1; i<6; i++){

//         console.log("Game " + i +" "+ game1(playerPlay(),computerPlay()));
// }


// function checker(checkB , checkA){
// if (checkA > checkB){
//         console.log("You won, congratulations!")
//     }else if(checkB > checkA){
//         console.log("The computer won, try one more time")
//     }else if(checkA === undefined || checkB === undefined || checkA === null || checkB === null){
//         console.log("Huston, we have a problem")
//     }else{
//         console.log("It's a tie!")
//     }
// }

// checker(checkB, checkA);