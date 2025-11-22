// メインゲームクラス
class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.running = false;
        this.lastTime = 0;

        // カメラ
        this.cameraX = 0;
        this.cameraY = 0;

        // システム
        this.player = null;
        this.mapSystem = null;
        this.battleSystem = null;
        this.dialogSystem = null;
        this.inventorySystem = null;
        this.uiManager = null;

        // FPS
        this.fps = 60;
        this.frameDelay = 1000 / this.fps;
    }

    async init() {
        console.log('ゲーム初期化中...');

        // アセット読み込み
        await assetLoader.loadAssets();

        // システム初期化
        this.player = new Player(gameState.player.x, gameState.player.y);
        this.battleSystem = new BattleSystem();
        this.dialogSystem = new DialogSystem();
        this.inventorySystem = new InventorySystem();
        this.uiManager = new UIManager();

        // グローバル参照（他のシステムからアクセスするため）
        window.battleSystem = this.battleSystem;

        // マップ読み込み
        this.loadMap(gameState.currentMap);

        // イベントリスナー
        this.setupEventListeners();

        // UI初期化
        gameState.updateUI();

        // ローディング画面を非表示
        document.getElementById('loading-screen').style.display = 'none';

        // ゲーム状態を「フィールド」に
        gameState.setState('field');

        console.log('ゲーム初期化完了！');
    }

    setupEventListeners() {
        eventBus.on('mapTransition', (data) => {
            this.transitionToMap(data.targetMap, data.targetX, data.targetY);
        });

        eventBus.on('mapEvent', (event) => {
            if (event.dialogId) {
                this.dialogSystem.showDialog(event.dialogId);
            }
        });
    }

    loadMap(mapName) {
        const mapData = gameData.maps[mapName];
        if (!mapData) {
            console.error(`Map ${mapName} not found`);
            return;
        }

        this.mapSystem = new MapSystem(mapData);
        window.currentMapSystem = this.mapSystem;

        console.log(`マップ読み込み: ${mapData.name}`);
    }

    transitionToMap(mapName, x, y) {
        this.loadMap(mapName);
        this.player.setPosition(x, y);
        gameState.setMap(mapName);
        gameState.player.x = x;
        gameState.player.y = y;
    }

    start() {
        if (this.running) return;

        this.running = true;
        this.lastTime = performance.now();
        this.gameLoop();
    }

    stop() {
        this.running = false;
    }

    gameLoop(currentTime = 0) {
        if (!this.running) return;

        // デルタタイム計算
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // 更新
        this.update(deltaTime);

        // 描画
        this.render();

        // 次フレーム
        requestAnimationFrame((time) => this.gameLoop(time));
    }

    update(deltaTime) {
        const state = gameState.getState();

        // ゲーム時間を更新
        if (state === 'field') {
            gameState.gameTime += deltaTime;
        }

        // 状態に応じた更新
        switch (state) {
            case 'field':
                this.player.update(deltaTime);
                this.mapSystem.update(deltaTime);
                this.updateCamera();
                break;

            case 'battle':
                // 戦闘システムは独自のタイミングで更新
                break;

            case 'menu':
            case 'dialog':
                // メニュー・ダイアログ中は更新なし
                break;
        }
    }

    updateCamera() {
        // カメラをプレイヤー中心に
        const targetX = this.canvas.width / 2 - (this.player.x * 32) - 16;
        const targetY = this.canvas.height / 2 - (this.player.y * 32) - 16;

        // マップ境界チェック
        const mapWidth = this.mapSystem.width * 32;
        const mapHeight = this.mapSystem.height * 32;

        this.cameraX = Math.min(0, Math.max(this.canvas.width - mapWidth, targetX));
        this.cameraY = Math.min(0, Math.max(this.canvas.height - mapHeight, targetY));
    }

    render() {
        // 画面クリア
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const state = gameState.getState();

        switch (state) {
            case 'field':
            case 'menu':
            case 'dialog':
                // マップ描画
                if (this.mapSystem) {
                    this.mapSystem.draw(this.ctx, this.cameraX, this.cameraY);
                }

                // プレイヤー描画
                this.player.draw(this.ctx, this.cameraX, this.cameraY);
                break;

            case 'battle':
                // 戦闘画面描画
                this.battleSystem.draw(this.ctx);
                break;
        }
    }

    save() {
        return gameState.save();
    }

    load() {
        const success = gameState.load();
        if (success) {
            this.player.setPosition(gameState.player.x, gameState.player.y);
            this.loadMap(gameState.currentMap);
            return true;
        }
        return false;
    }
}
