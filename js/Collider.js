// Registering component in Collider.js
AFRAME.registerComponent("swimming-fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables
        var posX = Math.floor(Math.random() * 3000 + -1000);
        var posY = Math.floor(Math.random() * 2 + -1);
        var posZ = Math.floor(Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.swimmingFish(id, position);
      }
    },
    swimmingFish: (id, position) => {
      //Get the terrain element
      var islandEl = document.querySelector("#island");
  
      //creating the bird model entity
      var fishEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      fishEl.setAttribute("id", id);
  
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");
  
      //animated models
      fishEl.setAttribute("animation-mixer", {});
  
      //append the bird entity as the child of the terrain entity
      islandEl.appendChild(fishEl);
    }
  });
  
  