import Position from './position';
import KB from './key_codes';
import MonstersRepository from './monsters_repository';

export default class WorldMap {
  constructor(ctx, maps, player, controller, eventDispatcher) {
    this.ctx = ctx;
    this.maps = maps;
    this.player = player;
    this.controller = controller;
    this.eventDispatcher = eventDispatcher;

    this.moveAnimation = false;
  }

  draw() {
    this.drawBoard();
    this.drawPlayer();
  }

  update() {
    this.updatePlayerPosition();

    if (this.controller.isKeyPressed(KB.Q)) {
      let opponents = [MonstersRepository.find('dummy')];
      this.eventDispatcher({type: 'fight_start', opponents: opponents});
    }
  }

  drawBoard() {
    for (let y = -3; y <= 3; y++) {
      for (let x = -3; x <= 3; x++) {
        let position = new Position(this.player.position.x + x, this.player.position.y + y);
        this.map().getTile(position).image.draw(this.ctx, (x + 3) * 32, (y + 3) * 32);
      }
    }
  }

  drawPlayer() {
    this.player.image.draw(this.ctx, 32 * 3, 32 * 3);
  }

  map() {
    return this.maps[this.player.map];
  }

  updatePlayerPosition() {
    if (this.moveAnimation)
      return true;

    let destinationPosition = null;
    if (this.controller.isKeyPressed(KB.LEFT) || this.controller.isKeyPressed(KB.A))
      destinationPosition = this.player.position.left();
    if (this.controller.isKeyPressed(KB.RIGHT) || this.controller.isKeyPressed(KB.D))
      destinationPosition = this.player.position.right();
    if (this.controller.isKeyPressed(KB.UP) || this.controller.isKeyPressed(KB.W))
      destinationPosition = this.player.position.up();
    if (this.controller.isKeyPressed(KB.DOWN) || this.controller.isKeyPressed(KB.S))
      destinationPosition = this.player.position.down();

    if (!destinationPosition)
      return true;

    if (this.map().isWalkablePosition(destinationPosition)) {

      if (this.map().isPassagePosition(destinationPosition)) {
        let destination = this.map().getPassageDestination(destinationPosition);

        this.player.moveTo(destination.position);
        this.player.moveToMap(destination.mapId);
      }
      else {
        this.player.moveTo(destinationPosition);
      }

      this.moveAnimation = true;
      setTimeout(() => { this.moveAnimation = false; }, 250);
    }
  }
}
