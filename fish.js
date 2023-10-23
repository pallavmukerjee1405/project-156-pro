AFRAME.registerComponent("obstacle-fish",{

    init : function(){
        for(var i=1;i<=20;i++){
            var id=`hurdle${i}`;

            const posX=(Math.random()*3000 + (-1000));
            const posY=(Math.random()*2 + (-1));
            const posZ=(Math.random()*3000 + (-1000));

            const position={x:posX,y:posY,z:posZ};

            this.obstacleFish(id, position)
        }
    },

    obstacleFish: function(id, position){
        var islandEl=document.querySelector("#island");
        var fishEl=document.createElement("a-entity");

        fishEl.setAttribute("id", id);
        fishEl.setAttribute("position", position);
        fishEl.setAttribute("scale",{x:500,y:500,z:500});

        fishEl.setAttribute("gltf-model","./assets/gold_fish/scene.gltf");
        fishEl.setAttribute("animation-mixer",{});

        fishEl.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:5,
          });
      
          fishEl.setAttribute("game-play",{
            elementId:`#${id}`,
          });

        islandEl.appendChild(fishEl);
    }

})