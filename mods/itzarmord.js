elements.teleport = {
    color: "#FFFFFF",
    behavior: behaviors.WALL,
    category: "special",
    tick: function(pixel){
        pixel.ex = 1
        pixel.why = 1
        tryMove(pixel, ex, why)
        }
  }