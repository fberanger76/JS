let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultat = document.querySelector(".resultat > p");
const pierre = document.getElementById("rock");
const feuille = document.getElementById("paper");
const ciseaux = document.getElementById("scissors");
const choix = {"p": "Pierre", "f": "Feuille", "c": "Ciseaux"};

function computerChoice(){
    const choix = ["p", "f", "c"];
    const randomNumber = Math.floor(Math.random()*3);
    return choix[randomNumber];
}

function win(user, computer){
    userScore++;
    userScoreSpan.innerHTML=userScore;
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : <br>Bravo, c'est gagné !`;
}

function lose(user, computer){
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : <br>Dommage, c'est perdu !`;
}

function draw(user, computer){
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : <br>Égalité, on recommence !`;

}

function game(user) {
    const computer = computerChoice();
    switch (user + computer){
        case "pc":
        case "fp":
        case "cf":
            win(user, computer);
            break;
        case "cp":
        case "pf":
        case "fc":
            lose(user, computer);
            break;
        case "pp":
        case "ff":
        case "cc":
            draw(user, computer);
            break;
    }
}

function main(){
    pierre.addEventListener('click', function(){
        game("p");
    });    
    
    feuille.addEventListener('click', function(){
        game("f");
    });

    ciseaux.addEventListener('click', function(){
        game("c");
    });
}

main();

$( "#rock" ).click(function() {
    $( "#rock" ).animate({
      opacity: 0.4,
    }, 1500 );
    $( "#paper" ).animate({
        opacity: 1,
      }, 1500 );
      $( "#scissors" ).animate({
        opacity: 1,
      }, 1500 );
  });

  $( "#paper" ).click(function() {
    $( "#paper" ).animate({
      opacity: 0.4,
    }, 1500 );
    $( "#scissors" ).animate({
        opacity: 1,
      }, 1500 );
      $( "#rock" ).animate({
        opacity: 1,
      }, 1500 );
  });

  $( "#scissors" ).click(function() {
    $( "#scissors" ).animate({
      opacity: 0.4,
    }, 1500 );
    $( "#rock" ).animate({
        opacity: 1,
      }, 1500 );
      $( "#paper" ).animate({
        opacity: 1,
      }, 1500 );
  });