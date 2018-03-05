class EquipArena {
  constructor(ctx, player, controller, opponents) {
    this.ctx = ctx;
    this.player = player;
    this.controller = controller;
    this.state = 'none';
    this.opponents = opponents;
  }

  draw() {

    this.drawBoard();
  }

  update() {
  }

  drawBoard() {
    this.ctx.fillStyle = '#b5f232';
    this.ctx.rect(0, 0, 250, 250);
    this.ctx.fill();
  }

}


export {
  EquipArena as default
};
