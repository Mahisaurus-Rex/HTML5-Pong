function startGame() {
  myGameArea.start();
}

var myGameArea = {
  const canvas : document.getElementById("canvas"),
  start : function() {
    this.context = this.canvas.getContext("2d");
  }
}