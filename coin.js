AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        const id = `coin${i}`;
  
        //position variables     
        const posX =(Math.random() * 100 + (-50));      
        const posY = (Math.random() * 5 + (5));
        const posZ = (Math.random() * 60 + (-40));
  
        const position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      const islandEl = document.querySelector("#island");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      
      coinEl.setAttribute("material","color","#ff9100");
      
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 }); 
      
      coinEl.setAttribute("animation",{
        property:"rotation",
        to:"0 360 0",
        loop:"true",
        dur:1000
      });

      coinEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:2,
      });
  
      coinEl.setAttribute("game-play",{
        elementId:`#${id}`,
      });
  
      islandEl.appendChild(coinEl);
    }
  });