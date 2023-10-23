AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#coin1"},
    },

    update: function(){
        this.isCollided(this.data.elementId);
    },

    init: function () {
        var duration = 120;
        const timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
      },
    
      startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        setInterval(()=> {
          if (duration >= 0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            clearInterval(timer);        
          }
        },1000)
      },

    isCollided: function(elementId){
        const element=document.querySelector(elementId);
        element.addEventListener("collide",(e) =>{
            if(elementId.includes("#coin")){
                element.setAttribute("visible", false);
                this.updateScore();
                this.updateTargets();
            }
            else{
                this.gameOver();
            }
        });

    },

    updateTargets: function(){
        var element=document.querySelector("#targets");
        var count=element.getAttribute("text").value;
        var currentTargets=parseInt(count);
        currentTargets-=1;
        element.setAttribute("text",{
          value:currentTargets,
        });
      },
    
    updateScore: function(){
        var element=document.querySelector("#score");
        var count=element.getAttribute("text").value;
        var currentScore=parseInt(count);
        currentScore+=50;
        element.setAttribute("text",{
          value:currentScore,
        });
    },
    
    gameOver: function(){
        var diverEl=document.querySelector("#diver");
        var element=document.querySelector("#game_over_text");
        element.setAttribute("visible",true);
        diverEl.setAttribute("dynamic-body",{
          mass: 1
        });
    },
});