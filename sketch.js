var canvas;
var gameState, contestantCount, database, quiz, question, contestant, allContestants, answer;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  gameState = 0
  quiz = new Quiz()
  //question = new Question();
  contestant = new Contestant();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  //quiz.display();
  //question.display();
  //contestant.display();
}
