// アセット読み込みシステム
class AssetLoader {
    constructor() {
        this.images = {};
        this.sounds = {};
        this.loaded = false;
    }

    async loadAssets() {
        // プレースホルダー画像を生成（後でAI生成画像に置き換え可能）
        await this.generatePlaceholderAssets();
        this.loaded = true;
        return true;
    }

    async generatePlaceholderAssets() {
        // キャラクター（ドット絵風）
        this.images.player = this.createPlayer();
        this.images.npc = this.createNPC();
        this.images.enemy_slime = this.createSlime();
        this.images.enemy_goblin = this.createGoblin();
        this.images.enemy_skeleton = this.createSkeleton();
        this.images.enemy_dragon = this.createDragon();
        this.images.boss_demon = this.createDemon();

        // タイル
        this.images.tile_grass = this.createGrassTile();
        this.images.tile_water = this.createWaterTile();
        this.images.tile_stone = this.createStoneTile();
        this.images.tile_floor = this.createFloorTile();
        this.images.tile_wall = this.createWallTile();
        this.images.tile_door = this.createDoorTile();
        this.images.tile_chest = this.createChestTile();

        return true;
    }

    // ===== キャラクター生成 =====

    createPlayer() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(12, 28, 8, 2);

        // 体（青い鎧）
        ctx.fillStyle = '#4a90e2';
        ctx.fillRect(12, 16, 8, 10);

        // 腕
        ctx.fillStyle = '#3d7bc7';
        ctx.fillRect(10, 18, 2, 6); // 左腕
        ctx.fillRect(20, 18, 2, 6); // 右腕

        // 頭（肌色）
        ctx.fillStyle = '#ffdbac';
        ctx.fillRect(13, 10, 6, 6);

        // 髪（茶色）
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(12, 8, 8, 3);

        // 目
        ctx.fillStyle = '#000';
        ctx.fillRect(14, 12, 1, 1);
        ctx.fillRect(17, 12, 1, 1);

        // 剣
        ctx.fillStyle = '#c0c0c0';
        ctx.fillRect(22, 16, 2, 8);
        ctx.fillStyle = '#8b7355';
        ctx.fillRect(22, 22, 2, 2);

        // 輪郭強調
        this.addOutline(ctx, 32, 32);

        return canvas;
    }

    createNPC() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(12, 28, 8, 2);

        // 体（緑の服）
        ctx.fillStyle = '#50c878';
        ctx.fillRect(12, 16, 8, 10);

        // 腕
        ctx.fillStyle = '#ffdbac';
        ctx.fillRect(10, 18, 2, 6);
        ctx.fillRect(20, 18, 2, 6);

        // 頭（肌色）
        ctx.fillStyle = '#ffdbac';
        ctx.fillRect(13, 10, 6, 6);

        // 髪（黒）
        ctx.fillStyle = '#3e2723';
        ctx.fillRect(12, 8, 8, 3);

        // 目
        ctx.fillStyle = '#000';
        ctx.fillRect(14, 12, 1, 1);
        ctx.fillRect(17, 12, 1, 1);

        // 口
        ctx.fillStyle = '#000';
        ctx.fillRect(15, 14, 2, 1);

        this.addOutline(ctx, 32, 32);
        return canvas;
    }

    createSlime() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(10, 28, 12, 2);

        // 体（紫のスライム）
        ctx.fillStyle = '#9b59b6';
        ctx.fillRect(11, 18, 10, 8);
        ctx.fillRect(10, 20, 12, 4);
        ctx.fillRect(9, 21, 14, 2);

        // ハイライト
        ctx.fillStyle = '#be7dd4';
        ctx.fillRect(12, 19, 3, 2);

        // 目
        ctx.fillStyle = '#000';
        ctx.fillRect(13, 22, 2, 2);
        ctx.fillRect(17, 22, 2, 2);

        // 目のハイライト
        ctx.fillStyle = '#fff';
        ctx.fillRect(14, 22, 1, 1);
        ctx.fillRect(18, 22, 1, 1);

        this.addOutline(ctx, 32, 32);
        return canvas;
    }

    createGoblin() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(12, 28, 8, 2);

        // 体（茶色の服）
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(12, 18, 8, 8);

        // 頭（緑の肌）
        ctx.fillStyle = '#7cb342';
        ctx.fillRect(12, 10, 8, 8);

        // 耳
        ctx.fillStyle = '#689f38';
        ctx.fillRect(10, 12, 2, 3); // 左耳
        ctx.fillRect(20, 12, 2, 3); // 右耳

        // 目（大きく、邪悪）
        ctx.fillStyle = '#ff0';
        ctx.fillRect(13, 13, 2, 2);
        ctx.fillRect(17, 13, 2, 2);
        ctx.fillStyle = '#000';
        ctx.fillRect(14, 14, 1, 1);
        ctx.fillRect(18, 14, 1, 1);

        // 牙
        ctx.fillStyle = '#fff';
        ctx.fillRect(13, 16, 1, 2);
        ctx.fillRect(18, 16, 1, 2);

        this.addOutline(ctx, 32, 32);
        return canvas;
    }

    createSkeleton() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(12, 28, 8, 2);

        // 体（骨）
        ctx.fillStyle = '#eceff1';
        ctx.fillRect(13, 18, 6, 8);

        // 肋骨
        ctx.fillStyle = '#b0bec5';
        ctx.fillRect(13, 19, 6, 1);
        ctx.fillRect(13, 21, 6, 1);
        ctx.fillRect(13, 23, 6, 1);

        // 頭蓋骨
        ctx.fillStyle = '#eceff1';
        ctx.fillRect(12, 10, 8, 8);

        // 目窩（黒）
        ctx.fillStyle = '#000';
        ctx.fillRect(13, 12, 2, 3);
        ctx.fillRect(17, 12, 2, 3);

        // 鼻孔
        ctx.fillRect(15, 15, 2, 1);

        // 歯
        ctx.fillStyle = '#000';
        ctx.fillRect(13, 16, 1, 1);
        ctx.fillRect(15, 16, 1, 1);
        ctx.fillRect(17, 16, 1, 1);

        this.addOutline(ctx, 32, 32);
        return canvas;
    }

    createDragon() {
        const canvas = document.createElement('canvas');
        canvas.width = 48;
        canvas.height = 48;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(16, 42, 16, 3);

        // 翼（左）
        ctx.fillStyle = '#8b0000';
        ctx.fillRect(8, 20, 8, 12);
        ctx.fillRect(6, 22, 2, 8);

        // 体（赤）
        ctx.fillStyle = '#c0392b';
        ctx.fillRect(18, 22, 12, 14);

        // 翼（右）
        ctx.fillStyle = '#8b0000';
        ctx.fillRect(32, 20, 8, 12);
        ctx.fillRect(40, 22, 2, 8);

        // 首
        ctx.fillStyle = '#c0392b';
        ctx.fillRect(20, 16, 8, 6);

        // 頭
        ctx.fillStyle = '#c0392b';
        ctx.fillRect(18, 10, 12, 8);

        // 角
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(18, 8, 2, 3);
        ctx.fillRect(28, 8, 2, 3);

        // 目
        ctx.fillStyle = '#ff0';
        ctx.fillRect(20, 13, 3, 2);
        ctx.fillRect(25, 13, 3, 2);
        ctx.fillStyle = '#000';
        ctx.fillRect(21, 13, 1, 2);
        ctx.fillRect(26, 13, 1, 2);

        // 鼻息（煙）
        ctx.fillStyle = '#757575';
        ctx.fillRect(16, 16, 2, 2);
        ctx.fillRect(14, 14, 2, 2);

        // 腹部（明るい赤）
        ctx.fillStyle = '#e74c3c';
        ctx.fillRect(20, 26, 8, 8);

        this.addOutline(ctx, 48, 48);
        return canvas;
    }

    createDemon() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(22, 58, 20, 4);

        // 体（黒い鎧）
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(24, 32, 16, 20);

        // マント
        ctx.fillStyle = '#000';
        ctx.fillRect(20, 34, 24, 18);

        // 肩アーマー
        ctx.fillStyle = '#34495e';
        ctx.fillRect(20, 30, 6, 8);
        ctx.fillRect(38, 30, 6, 8);

        // 頭
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(26, 16, 12, 14);

        // 角（大きい）
        ctx.fillStyle = '#424242';
        ctx.fillRect(24, 10, 3, 8);
        ctx.fillRect(37, 10, 3, 8);
        ctx.fillRect(22, 8, 3, 4);
        ctx.fillRect(39, 8, 3, 4);

        // 目（赤く光る）
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(28, 20, 3, 4);
        ctx.fillRect(33, 20, 3, 4);

        // 目のハイライト
        ctx.fillStyle = '#ff6b6b';
        ctx.fillRect(28, 20, 1, 2);
        ctx.fillRect(33, 20, 1, 2);

        // 口（邪悪な笑み）
        ctx.fillStyle = '#000';
        ctx.fillRect(28, 26, 8, 2);
        ctx.fillRect(26, 25, 2, 1);
        ctx.fillRect(36, 25, 2, 1);

        // オーラ（紫の魔力）
        ctx.fillStyle = 'rgba(138, 43, 226, 0.3)';
        ctx.fillRect(18, 28, 28, 26);

        this.addOutline(ctx, 64, 64);
        return canvas;
    }

    // ===== タイル生成 =====

    createGrassTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // ベース草色
        ctx.fillStyle = '#7cb342';
        ctx.fillRect(0, 0, 32, 32);

        // 草のディテール（暗い緑）
        ctx.fillStyle = '#689f38';
        for (let i = 0; i < 20; i++) {
            const x = Math.floor(Math.random() * 32);
            const y = Math.floor(Math.random() * 32);
            ctx.fillRect(x, y, 2, 2);
        }

        // 明るい草
        ctx.fillStyle = '#9ccc65';
        for (let i = 0; i < 15; i++) {
            const x = Math.floor(Math.random() * 32);
            const y = Math.floor(Math.random() * 32);
            ctx.fillRect(x, y, 1, 2);
        }

        return canvas;
    }

    createWaterTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 水色ベース
        ctx.fillStyle = '#2196f3';
        ctx.fillRect(0, 0, 32, 32);

        // 波模様
        ctx.fillStyle = '#1976d2';
        ctx.fillRect(0, 8, 32, 2);
        ctx.fillRect(4, 16, 28, 2);
        ctx.fillRect(0, 24, 32, 2);

        // 光の反射
        ctx.fillStyle = '#64b5f6';
        ctx.fillRect(8, 4, 4, 2);
        ctx.fillRect(20, 12, 6, 2);
        ctx.fillRect(6, 20, 5, 2);

        return canvas;
    }

    createStoneTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // グレーベース
        ctx.fillStyle = '#757575';
        ctx.fillRect(0, 0, 32, 32);

        // 石畳の目地
        ctx.fillStyle = '#424242';
        ctx.fillRect(0, 15, 32, 2);
        ctx.fillRect(15, 0, 2, 32);

        // ハイライト
        ctx.fillStyle = '#9e9e9e';
        ctx.fillRect(2, 2, 10, 10);
        ctx.fillRect(18, 2, 10, 10);
        ctx.fillRect(2, 18, 10, 10);
        ctx.fillRect(18, 18, 10, 10);

        // 汚れ
        ctx.fillStyle = '#616161';
        for (let i = 0; i < 10; i++) {
            const x = Math.floor(Math.random() * 32);
            const y = Math.floor(Math.random() * 32);
            ctx.fillRect(x, y, 2, 2);
        }

        return canvas;
    }

    createFloorTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 木の床ベース
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(0, 0, 32, 32);

        // 板の継ぎ目
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(0, 10, 32, 1);
        ctx.fillRect(0, 21, 32, 1);

        // 木目
        ctx.fillStyle = '#6d4c41';
        for (let i = 0; i < 8; i++) {
            const x = Math.floor(Math.random() * 30);
            const y = Math.floor(Math.random() * 30);
            ctx.fillRect(x, y, 12, 1);
        }

        return canvas;
    }

    createWallTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 暗いグレーベース
        ctx.fillStyle = '#424242';
        ctx.fillRect(0, 0, 32, 32);

        // レンガ模様
        ctx.fillStyle = '#212121';
        // 横線
        ctx.fillRect(0, 8, 32, 1);
        ctx.fillRect(0, 16, 32, 1);
        ctx.fillRect(0, 24, 32, 1);
        // 縦線（千鳥配置）
        ctx.fillRect(16, 0, 1, 8);
        ctx.fillRect(8, 8, 1, 8);
        ctx.fillRect(24, 8, 1, 8);
        ctx.fillRect(16, 16, 1, 8);
        ctx.fillRect(8, 24, 1, 8);
        ctx.fillRect(24, 24, 1, 8);

        // ハイライト
        ctx.fillStyle = '#616161';
        ctx.fillRect(1, 1, 2, 2);
        ctx.fillRect(10, 10, 2, 2);
        ctx.fillRect(20, 20, 2, 2);

        return canvas;
    }

    createDoorTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 木のドア
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(8, 4, 16, 26);

        // ドア枠
        ctx.fillStyle = '#3e2723';
        ctx.fillRect(6, 2, 20, 2);
        ctx.fillRect(6, 2, 2, 28);
        ctx.fillRect(24, 2, 2, 28);
        ctx.fillRect(6, 28, 20, 2);

        // 板の模様
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(8, 8, 16, 1);
        ctx.fillRect(8, 16, 16, 1);
        ctx.fillRect(8, 24, 16, 1);

        // ドアノブ
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(18, 16, 3, 3);

        return canvas;
    }

    createChestTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(8, 26, 16, 2);

        // 宝箱本体（茶色）
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(8, 16, 16, 10);

        // 金の装飾
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(7, 15, 18, 2);
        ctx.fillRect(7, 25, 18, 2);
        ctx.fillRect(15, 14, 2, 13);

        // 鍵穴
        ctx.fillStyle = '#424242';
        ctx.fillRect(15, 19, 2, 3);

        // ハイライト
        ctx.fillStyle = '#ffeb3b';
        ctx.fillRect(8, 16, 2, 2);
        ctx.fillRect(16, 15, 1, 2);

        return canvas;
    }

    // ===== ヘルパーメソッド =====

    addOutline(ctx, width, height) {
        // 軽い輪郭を追加（ピクセルアート風）
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const outlineData = ctx.createImageData(width, height);

        // 簡素化のため、アウトライン処理はスキップ
        // (パフォーマンス考慮)
        return;
    }

    createColoredSquare(width, height, color) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // グラデーション背景
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, this.lightenColor(color, 20));
        gradient.addColorStop(1, color);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // 境界線
        ctx.strokeStyle = this.darkenColor(color, 30);
        ctx.lineWidth = 2;
        ctx.strokeRect(1, 1, width - 2, height - 2);

        return canvas;
    }

    lightenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, (num >> 16) + amt);
        const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
        const B = Math.min(255, (num & 0x0000FF) + amt);
        return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, (num >> 16) - amt);
        const G = Math.max(0, (num >> 8 & 0x00FF) - amt);
        const B = Math.max(0, (num & 0x0000FF) - amt);
        return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }

    getImage(name) {
        return this.images[name] || null;
    }
}

const assetLoader = new AssetLoader();
