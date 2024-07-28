// Registering component in Target.js

AFRAME.registerComponent("shiny-coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables     
        var posX = Math.random() * 100 + -50;      
        var posY = Math.random() * 5 + 5;
        var posZ = Math.random() * 60 + -40;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    },
  
    createCoins: function(id, position) { 
      
      const treasureEntity = document.querySelector("#treasureCoins");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("material","color","#ff9100");
      
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });  
      
      coinEl.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000
      });
  
      islandEl.appendChild(coinEl);
    }
  });
  
  