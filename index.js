var readlineSync = require('readline-sync');

var username = readlineSync.question("Hey there, what's your name?");
var score = 0;

console.log("Hey " + username + "! Lets play a quick game to test how much you know about football");
console.log("Let's begin!!");

console.log("--------------------------------------");

function play(question , answer)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer)
  {
    console.log("right!")
    score++;
  }
    
  else
    console.log("wrong!")

  console.log("Current score: "+score)
}

var questions = [{
  ques : "Which is the number one football league in the world?",
  ans :  "premier league"
},

{
  ques : "Which club does Lionel Messi play for?",
  ans :  "psg"
},

{
  ques : "Which country does Cristiano Ronaldo play for?",
  ans :  "portugal"
},

{
  ques : "Which is the only football club alongside FC Bayern Munich to win two trebles?",
  ans :  "fc barcelona"
}]

for(var i=0;i<questions.length;i++)
{
  play(questions[i].ques,questions[i].ans)
  console.log("--------------------------------------");
}

console.log(" ")

if(score === 0)
console.log("Bad luck, try again!")

else if(score>0 && score<3)
console.log("Hmmm "+score+ "! Not bad")

else if(score === 3)
console.log("Cool!! "+score+ " out of 4. You sure are an enthusiast!")

else
console.log("PERFECT!! 4 outa 4 Way to go!!")
