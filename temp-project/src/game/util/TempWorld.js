import Phaser from 'phaser';


export class TempWorld extends Phaser.Scene {

    #TILE_SIZE;

    #TILE_COUNT = {}

    #MAP_SIZE = {}

    constructor() {
        super({ key: 'TempWorld' });

        this.#TILE_SIZE = 64; // TODO: 변경해야 함

        // this.init();
    }

    init() {
        const config = this.sys.game.config;
        this.#MAP_SIZE.width = config.width;
        this.#MAP_SIZE.height = config.height;

        this.#TILE_COUNT.width = this.#MAP_SIZE.width / this.#TILE_SIZE;
        this.#TILE_COUNT.height = this.#MAP_SIZE.height / this.#TILE_SIZE;
    }


    // 맵 로딩에 필요한 데이터 fetch
    preload() {
        this.load.image('background', '/assets/mapTile1.png'); // 바닥
        this.load.image('player', '/assets/manWithHat.svg');
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

        // 닉네임과 상태 텍스트 위치 업데이트 (캐릭터 위)
        this.updateNickNameAndStatus();
    }

    updateNickNameAndStatus() {
        this.nickname.setPosition(this.player.x - this.nickname.width / 2, this.player.y - 80);
        this.status.setPosition(this.player.x - this.status.width / 2, this.player.y - 62);
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

    setNickNameAndStatus(name, status) {
        this.nickname = this.add.text(0, 0, `닉네임: ${name}`, {
            fontSize: '15px',
            fill: '#fff',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: { x: 5, y: 2 },
            align: 'center'
        });

        this.status = this.add.text(0, 0, `상태: ${status}`, {
            fontSize: '15px',
            fill: '#0f0',
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: { x: 4, y: 2 },
            align: 'center'
        });
    }


    setCharacter({ spawnX, spawnY }) {
        const nickname = localStorage.getItem("nickname");
        const token = localStorage.getItem("token");

        if (nickname && token) {
            this.player = this.physics.add
                .image(spawnX, spawnY, 'player')
                .setCollideWorldBounds(true);
            this.setNickNameAndStatus(nickname, "Online");
        }

        else {
            alert("로그인이 필요합니다.")
        }

        return this;
    }


    setCameraFollow() {
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

        return { spawnX, spawnY };
    }


}

