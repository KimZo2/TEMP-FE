import Phaser from 'phaser';


export class TempWorld extends Phaser.Scene {

    #TILE_SIZE;

    #TILE_COUNT = {}

    #MAP_SIZE = {}

    constructor(){
        super({ key: 'TempWorld' });
        this.#TILE_SIZE = tileSize;

        this.#MAP_SIZE.height = height;
        this.#MAP_SIZE.width = width;

        this.#TILE_COUNT.height = height / tileSize;
        this.#TILE_COUNT.width = width / tileSize;
    }

    
    // 맵 로딩에 필요한 데이터 fetch
    preload() {
        this.load.image('background', '/assets/mapTile1.png'); // 바닥
        this.load.image('character', '/assets/manWithHat.svg'); // 캐릭터
    }

    // 맵 생성
    create() {
        this.createMap("background");
        this.setCharacter(this.getCenterSpawnLocation());
        this.setCameraFollow();
        this.createKeyboardCursor();
    }

    // 맵 업데이트
    update() {
        const speed = 400;
        const p = this.player;
        p.setVelocity(0);

        if (this.cursors.left.isDown) p.setVelocityX(-speed);
        if (this.cursors.right.isDown) p.setVelocityX(speed);
        if (this.cursors.up.isDown) p.setVelocityY(-speed);
        if (this.cursors.down.isDown) p.setVelocityY(speed);
    }

    createMap(tileName) {
        const map = this.make.tilemap({
            tileWidth: this.#TILE_SIZE,
            tileHeight: this.#TILE_SIZE,
            width: this.#TILE_COUNT.width,
            height: this.#TILE_COUNT.height
        });

        const tileSet = map.addTilesetImage(tileName);

        const layer = map.createBlankLayer(0, tileSet, 0, 0);
        layer.fill(0);

        return this;
    }


    setCharacter({spawnX, spawnY}) {
        this.player = this.physics.add
            .image(spawnX, spawnY, 'character')
            .setCollideWorldBounds(true);
        
        return this;
    }

    
    setCameraFollow(){
        this.cameras.main.startFollow(this.player, false, 1, 1); 
        return this;
    }

    createKeyboardCursor() {
        this.cursors = this.input.keyboard.createCursorKeys();
        return this;
    }

    getCenterSpawnLocation() {
        const worldW = this.#TILE_COUNT.width * this.#TILE_SIZE;
        const worldH = this.#TILE_COUNT.height * this.#TILE_SIZE;

        const spawnX = worldW / 2;
        const spawnY = worldH / 2;

        return {spawnX, spawnY};
    }
}

