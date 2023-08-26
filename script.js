var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");
var res=Math.floor(Math.random()*20)-1;
var number_of_guesses=0;
var guessed_numbers=[];

function play(){
    var guessed_number=document.querySelector("#guess").value;
    
    if(guessed_number<1||guessed_number>20)
    {
        alert("guess number between 1-20")
    }
    else {
        number_of_guesses++;
        guessed_numbers.push(guessed_number);
        if(guessed_number<res)
        {
            msg1.textContent="value is low";
            msg2.textContent="number of guesses :"+ number_of_guesses;
            msg3.textContent="guessed numbers are "+ guessed_numbers;
        }
        else if(guessed_number>res)
        {
          msg1.textContent="value is high";
          msg2.textContent="number of guesses :"+ number_of_guesses;
            msg3.textContent="guessed numbers are "+ guessed_numbers;
        }
        else
        {
            msg1.textContent="Correct Ans"; 
            // msg2.textContent="the number is"+ res;
            msg2.textContent="Ojasvv is great";
            // msg3.textContent="you guesssed "+ number_of_guesses+" times";
            msg3.textContent="you are dumb";

        }
    }
}