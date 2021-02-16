class Quiz{
    constructor(){}

        getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        }

            update(state){
                database.ref('/').update({
                  gameState: state
                })
              }

              async start(){
                if(gameState === 0){
                  contestant = new Contestant();
                  var contestantCountref = await database.ref('contestantCount').once("value" )
            
                  if(contestantCountref.exists()){
                    contestantCount = contestantCountref.val();
                    contestant.getCount();
                  }
                  question = new Question();
                  question.display();
                }

            }

            play(){
              question.hide();
              text("Game Start",120,100)
              contestant.getContestantInfo();
          
              if(allContestants !== undefined){
        
            for(var con in allContestants){
                  index+=1;
                  x+=100;
                  y = displayHeight-allContestants[con].distance
              
                  }
        }
        
            
      }     
}
