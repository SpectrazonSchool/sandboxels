elements.teleport2 = {
    color: "#FFFFFF",
    behavior: behaviors.WALL,
    category: "special",
    tick: function(pixel){
        var rand1 = Math.floor(Math.random() * 166);
        var rand2 = Math.floor(Math.random() * 84);
        pixel.ex = rand1
        pixel.why = rand2
        
        tryMove(pixel, pixel.ex, pixel.why)
        }
  }
