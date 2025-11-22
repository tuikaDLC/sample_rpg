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
        this.images.tile_dirt = this.createDirtTile();
        this.images.tile_wood_floor = this.createWoodFloorTile();
        this.images.tile_carpet = this.createCarpetTile();
        this.images.tile_brick = this.createBrickTile();

        // 自然オブジェクト
        this.images.obj_oak_tree = this.createOakTree();
        this.images.obj_pine_tree = this.createPineTree();
        this.images.obj_palm_tree = this.createPalmTree();
        this.images.obj_small_tree = this.createSmallTree();
        this.images.obj_bush = this.createBush();
        this.images.obj_flower_red = this.createFlowerRed();
        this.images.obj_flower_blue = this.createFlowerBlue();
        this.images.obj_flower_yellow = this.createFlowerYellow();
        this.images.obj_rock = this.createRock();
        this.images.obj_small_rock = this.createSmallRock();
        this.images.obj_stump = this.createStump();
        this.images.obj_tall_grass = this.createTallGrass();

        // 建物
        this.images.obj_house_small = this.createHouseSmall();
        this.images.obj_house_large = this.createHouseLarge();
        this.images.obj_shop = this.createShop();
        this.images.obj_inn = this.createInn();
        this.images.obj_roof_red = this.createRoofRed();
        this.images.obj_roof_blue = this.createRoofBlue();

        // 町の設備
        this.images.obj_well = this.createWell();
        this.images.obj_sign = this.createSign();
        this.images.obj_lamppost = this.createLamppost();
        this.images.obj_bench = this.createBench();
        this.images.obj_barrel = this.createBarrel();
        this.images.obj_crate = this.createCrate();
        this.images.obj_fence_h = this.createFenceHorizontal();
        this.images.obj_fence_v = this.createFenceVertical();
        this.images.obj_fence_corner = this.createFenceCorner();
        this.images.obj_pot = this.createPot();
        this.images.obj_window = this.createWindow();

        // 家具（室内用）
        this.images.obj_table = this.createTable();
        this.images.obj_chair = this.createChair();
        this.images.obj_bed = this.createBed();
        this.images.obj_bookshelf = this.createBookshelf();

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

    // ===== 追加タイル =====

    createDirtTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 土色ベース
        ctx.fillStyle = '#8b7355';
        ctx.fillRect(0, 0, 32, 32);

        // 暗い土
        ctx.fillStyle = '#6d5c47';
        for (let i = 0; i < 15; i++) {
            const x = Math.floor(Math.random() * 32);
            const y = Math.floor(Math.random() * 32);
            ctx.fillRect(x, y, 3, 3);
        }

        // 小石
        ctx.fillStyle = '#9e9e9e';
        for (let i = 0; i < 8; i++) {
            const x = Math.floor(Math.random() * 32);
            const y = Math.floor(Math.random() * 32);
            ctx.fillRect(x, y, 2, 2);
        }

        return canvas;
    }

    createWoodFloorTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 明るい木の床
        ctx.fillStyle = '#a1887f';
        ctx.fillRect(0, 0, 32, 32);

        // 板の継ぎ目
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(0, 15, 32, 2);

        // 木目
        ctx.fillStyle = '#8d6e63';
        for (let i = 0; i < 6; i++) {
            const x = Math.floor(Math.random() * 30);
            const y = Math.floor(Math.random() * 30);
            ctx.fillRect(x, y, 10, 1);
        }

        return canvas;
    }

    createCarpetTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // カーペット（赤）
        ctx.fillStyle = '#c62828';
        ctx.fillRect(0, 0, 32, 32);

        // 模様（金色）
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(8, 8, 2, 2);
        ctx.fillRect(22, 8, 2, 2);
        ctx.fillRect(8, 22, 2, 2);
        ctx.fillRect(22, 22, 2, 2);
        ctx.fillRect(15, 15, 2, 2);

        // 縁取り
        ctx.fillStyle = '#8b0000';
        ctx.fillRect(0, 0, 32, 2);
        ctx.fillRect(0, 30, 32, 2);
        ctx.fillRect(0, 0, 2, 32);
        ctx.fillRect(30, 0, 2, 32);

        return canvas;
    }

    createBrickTile() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // レンガ色
        ctx.fillStyle = '#a0522d';
        ctx.fillRect(0, 0, 32, 32);

        // モルタル（目地）
        ctx.fillStyle = '#8b7355';
        ctx.fillRect(0, 10, 32, 2);
        ctx.fillRect(0, 22, 32, 2);
        ctx.fillRect(16, 0, 2, 10);
        ctx.fillRect(8, 12, 2, 10);
        ctx.fillRect(24, 12, 2, 10);
        ctx.fillRect(16, 24, 2, 8);

        return canvas;
    }

    // ===== 自然オブジェクト =====

    createOakTree() {
        const canvas = document.createElement('canvas');
        canvas.width = 48;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(16, 60, 16, 3);

        // 幹
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(20, 36, 8, 26);

        // 幹のディテール
        ctx.fillStyle = '#4e342e';
        ctx.fillRect(21, 40, 2, 4);
        ctx.fillRect(24, 48, 2, 3);

        // 葉（緑の円形）
        ctx.fillStyle = '#2e7d32';
        // 下層
        ctx.fillRect(12, 24, 24, 16);
        ctx.fillRect(16, 20, 16, 4);
        ctx.fillRect(16, 40, 16, 4);
        // 中層
        ctx.fillRect(14, 16, 20, 16);
        // 上層
        ctx.fillStyle = '#43a047';
        ctx.fillRect(16, 12, 16, 12);
        ctx.fillRect(20, 8, 8, 4);

        // ハイライト
        ctx.fillStyle = '#66bb6a';
        ctx.fillRect(20, 14, 6, 6);

        return canvas;
    }

    createPineTree() {
        const canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 56;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(16, 52, 8, 3);

        // 幹
        ctx.fillStyle = '#4e342e';
        ctx.fillRect(18, 32, 4, 22);

        // 針葉（三角形の層）
        ctx.fillStyle = '#1b5e20';
        // 下層
        ctx.fillRect(10, 32, 20, 4);
        ctx.fillRect(12, 28, 16, 4);
        // 中層
        ctx.fillRect(12, 20, 16, 8);
        ctx.fillRect(14, 16, 12, 4);
        // 上層
        ctx.fillRect(14, 10, 12, 6);
        ctx.fillRect(16, 6, 8, 4);
        // 先端
        ctx.fillRect(18, 2, 4, 4);

        // ハイライト
        ctx.fillStyle = '#2e7d32';
        ctx.fillRect(16, 12, 4, 4);

        return canvas;
    }

    createPalmTree() {
        const canvas = document.createElement('canvas');
        canvas.width = 48;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(18, 60, 12, 3);

        // 幹（カーブした感じ）
        ctx.fillStyle = '#8b7355';
        ctx.fillRect(22, 34, 4, 28);
        ctx.fillRect(21, 30, 4, 4);
        ctx.fillRect(20, 26, 4, 4);
        ctx.fillRect(19, 22, 4, 4);

        // 幹の模様
        ctx.fillStyle = '#6d5c47';
        ctx.fillRect(22, 36, 4, 2);
        ctx.fillRect(22, 44, 4, 2);
        ctx.fillRect(22, 52, 4, 2);

        // ヤシの葉
        ctx.fillStyle = '#558b2f';
        // 左
        ctx.fillRect(8, 18, 12, 4);
        ctx.fillRect(6, 16, 8, 2);
        // 右
        ctx.fillRect(28, 18, 12, 4);
        ctx.fillRect(34, 16, 8, 2);
        // 上
        ctx.fillRect(18, 8, 12, 12);
        ctx.fillRect(20, 6, 8, 2);
        // 斜め左上
        ctx.fillRect(12, 10, 10, 4);
        // 斜め右上
        ctx.fillRect(26, 10, 10, 4);

        return canvas;
    }

    createSmallTree() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 40;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(12, 36, 8, 2);

        // 幹
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(14, 24, 4, 14);

        // 葉
        ctx.fillStyle = '#43a047';
        ctx.fillRect(10, 16, 12, 12);
        ctx.fillRect(12, 12, 8, 4);
        ctx.fillRect(12, 28, 8, 2);

        // ハイライト
        ctx.fillStyle = '#66bb6a';
        ctx.fillRect(14, 14, 4, 4);

        return canvas;
    }

    createBush() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 24;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(6, 20, 20, 2);

        // 茂み（緑）
        ctx.fillStyle = '#558b2f';
        ctx.fillRect(8, 12, 16, 8);
        ctx.fillRect(6, 14, 20, 4);
        ctx.fillRect(10, 10, 12, 2);

        // ハイライト
        ctx.fillStyle = '#7cb342';
        ctx.fillRect(10, 12, 6, 4);

        return canvas;
    }

    createFlowerRed() {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 20;
        const ctx = canvas.getContext('2d');

        // 茎
        ctx.fillStyle = '#558b2f';
        ctx.fillRect(7, 10, 2, 8);

        // 葉
        ctx.fillStyle = '#7cb342';
        ctx.fillRect(5, 12, 2, 3);
        ctx.fillRect(9, 14, 2, 3);

        // 花（赤）
        ctx.fillStyle = '#e53935';
        ctx.fillRect(6, 8, 4, 4);
        ctx.fillRect(5, 9, 6, 2);

        // 中心（黄色）
        ctx.fillStyle = '#fdd835';
        ctx.fillRect(7, 9, 2, 2);

        return canvas;
    }

    createFlowerBlue() {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 20;
        const ctx = canvas.getContext('2d');

        // 茎
        ctx.fillStyle = '#558b2f';
        ctx.fillRect(7, 10, 2, 8);

        // 葉
        ctx.fillStyle = '#7cb342';
        ctx.fillRect(5, 12, 2, 3);
        ctx.fillRect(9, 14, 2, 3);

        // 花（青）
        ctx.fillStyle = '#1e88e5';
        ctx.fillRect(6, 8, 4, 4);
        ctx.fillRect(5, 9, 6, 2);

        // 中心（白）
        ctx.fillStyle = '#fff';
        ctx.fillRect(7, 9, 2, 2);

        return canvas;
    }

    createFlowerYellow() {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 20;
        const ctx = canvas.getContext('2d');

        // 茎
        ctx.fillStyle = '#558b2f';
        ctx.fillRect(7, 10, 2, 8);

        // 葉
        ctx.fillStyle = '#7cb342';
        ctx.fillRect(5, 12, 2, 3);
        ctx.fillRect(9, 14, 2, 3);

        // 花（黄色）
        ctx.fillStyle = '#fdd835';
        ctx.fillRect(6, 8, 4, 4);
        ctx.fillRect(5, 9, 6, 2);

        // 中心（オレンジ）
        ctx.fillStyle = '#fb8c00';
        ctx.fillRect(7, 9, 2, 2);

        return canvas;
    }

    createRock() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 28;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(6, 24, 20, 3);

        // 岩（グレー）
        ctx.fillStyle = '#757575';
        ctx.fillRect(8, 14, 16, 10);
        ctx.fillRect(6, 16, 20, 6);
        ctx.fillRect(10, 12, 12, 2);

        // 暗い部分
        ctx.fillStyle = '#424242';
        ctx.fillRect(8, 20, 4, 4);
        ctx.fillRect(18, 18, 6, 4);

        // ハイライト
        ctx.fillStyle = '#9e9e9e';
        ctx.fillRect(10, 14, 6, 4);

        return canvas;
    }

    createSmallRock() {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(4, 14, 8, 1);

        // 小石
        ctx.fillStyle = '#9e9e9e';
        ctx.fillRect(5, 10, 6, 4);
        ctx.fillRect(6, 9, 4, 1);

        // 暗い部分
        ctx.fillStyle = '#757575';
        ctx.fillRect(5, 12, 2, 2);

        return canvas;
    }

    createStump() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 24;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(8, 20, 16, 2);

        // 切り株
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(10, 12, 12, 8);

        // 上面
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(8, 10, 16, 2);

        // 年輪
        ctx.fillStyle = '#4e342e';
        ctx.fillRect(14, 11, 4, 1);
        ctx.fillRect(12, 11, 1, 1);
        ctx.fillRect(19, 11, 1, 1);

        return canvas;
    }

    createTallGrass() {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 24;
        const ctx = canvas.getContext('2d');

        // 草（暗い緑）
        ctx.fillStyle = '#558b2f';
        ctx.fillRect(6, 10, 2, 10);
        ctx.fillRect(8, 8, 2, 12);
        ctx.fillRect(10, 10, 2, 10);

        // 先端（明るい緑）
        ctx.fillStyle = '#7cb342';
        ctx.fillRect(6, 8, 2, 2);
        ctx.fillRect(8, 6, 2, 2);
        ctx.fillRect(10, 8, 2, 2);

        return canvas;
    }

    // ===== 建物 =====

    createHouseSmall() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(12, 58, 40, 4);

        // 壁（ベージュ）
        ctx.fillStyle = '#d7ccc8';
        ctx.fillRect(12, 32, 40, 26);

        // 屋根（赤）
        ctx.fillStyle = '#c62828';
        ctx.fillRect(8, 24, 48, 8);
        ctx.fillRect(10, 20, 44, 4);
        ctx.fillRect(12, 16, 40, 4);

        // ドア
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(26, 44, 12, 14);

        // ドアノブ
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(34, 50, 2, 2);

        // 窓
        ctx.fillStyle = '#64b5f6';
        ctx.fillRect(16, 38, 8, 8);
        ctx.fillRect(40, 38, 8, 8);

        // 窓枠
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(19, 38, 2, 8);
        ctx.fillRect(43, 38, 2, 8);
        ctx.fillRect(16, 41, 8, 2);
        ctx.fillRect(40, 41, 8, 2);

        return canvas;
    }

    createHouseLarge() {
        const canvas = document.createElement('canvas');
        canvas.width = 96;
        canvas.height = 80;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(12, 74, 72, 4);

        // 壁
        ctx.fillStyle = '#bcaaa4';
        ctx.fillRect(12, 40, 72, 34);

        // 屋根（青）
        ctx.fillStyle = '#1565c0';
        ctx.fillRect(6, 30, 84, 10);
        ctx.fillRect(8, 24, 80, 6);
        ctx.fillRect(10, 18, 76, 6);

        // ドア
        ctx.fillStyle = '#4e342e';
        ctx.fillRect(40, 54, 16, 20);

        // ドアノブ
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(50, 62, 2, 2);

        // 窓（4つ）
        ctx.fillStyle = '#64b5f6';
        ctx.fillRect(18, 48, 10, 10);
        ctx.fillRect(68, 48, 10, 10);
        ctx.fillRect(18, 62, 10, 10);
        ctx.fillRect(68, 62, 10, 10);

        // 窓枠
        ctx.fillStyle = '#5d4037';
        [18, 68, 18, 68].forEach((x, i) => {
            const y = i < 2 ? 48 : 62;
            ctx.fillRect(x + 4, y, 2, 10);
            ctx.fillRect(x, y + 4, 10, 2);
        });

        // 煙突
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(66, 12, 8, 18);

        return canvas;
    }

    createShop() {
        const canvas = document.createElement('canvas');
        canvas.width = 80;
        canvas.height = 72;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(10, 66, 60, 4);

        // 壁
        ctx.fillStyle = '#fff3e0';
        ctx.fillRect(10, 36, 60, 30);

        // 屋根（緑）
        ctx.fillStyle = '#558b2f';
        ctx.fillRect(6, 28, 68, 8);
        ctx.fillRect(8, 24, 64, 4);

        // 看板
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(22, 18, 36, 10);
        ctx.fillStyle = '#fff';
        ctx.fillRect(24, 20, 32, 6);
        ctx.fillStyle = '#000';
        ctx.font = '8px monospace';
        ctx.fillText('SHOP', 32, 25);

        // ドア（二枚扉）
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(30, 50, 10, 16);
        ctx.fillRect(40, 50, 10, 16);

        // 窓（ショーウィンドウ）
        ctx.fillStyle = '#64b5f6';
        ctx.fillRect(14, 42, 12, 12);
        ctx.fillRect(54, 42, 12, 12);

        return canvas;
    }

    createInn() {
        const canvas = document.createElement('canvas');
        canvas.width = 80;
        canvas.height = 72;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(10, 66, 60, 4);

        // 壁
        ctx.fillStyle = '#ffe0b2';
        ctx.fillRect(10, 36, 60, 30);

        // 屋根（茶色）
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(6, 28, 68, 8);
        ctx.fillRect(8, 24, 64, 4);

        // 看板
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(22, 18, 36, 10);
        ctx.fillStyle = '#fff';
        ctx.fillRect(24, 20, 32, 6);
        ctx.fillStyle = '#000';
        ctx.font = '8px monospace';
        ctx.fillText('INN', 34, 25);

        // ドア
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(32, 50, 16, 16);

        // ドアノブ
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(42, 56, 2, 2);

        // 窓（2つ）
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(14, 44, 10, 10);
        ctx.fillRect(56, 44, 10, 10);

        return canvas;
    }

    createRoofRed() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 16;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#c62828';
        ctx.fillRect(0, 8, 32, 8);
        ctx.fillRect(2, 4, 28, 4);
        ctx.fillRect(4, 0, 24, 4);

        return canvas;
    }

    createRoofBlue() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 16;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#1565c0';
        ctx.fillRect(0, 8, 32, 8);
        ctx.fillRect(2, 4, 28, 4);
        ctx.fillRect(4, 0, 24, 4);

        return canvas;
    }

    // ===== 町の設備 =====

    createWell() {
        const canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 48;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(8, 44, 24, 3);

        // 井戸の本体（石）
        ctx.fillStyle = '#757575';
        ctx.fillRect(10, 28, 20, 16);

        // 石の質感
        ctx.fillStyle = '#616161';
        ctx.fillRect(10, 32, 20, 2);
        ctx.fillRect(10, 38, 20, 2);

        // 屋根の支柱
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(12, 12, 3, 16);
        ctx.fillRect(25, 12, 3, 16);

        // 屋根
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(8, 8, 24, 4);
        ctx.fillRect(10, 4, 20, 4);

        // バケツのロープ
        ctx.fillStyle = '#795548';
        ctx.fillRect(19, 12, 2, 10);

        // バケツ
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(17, 22, 6, 6);

        return canvas;
    }

    createSign() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 40;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(14, 36, 4, 2);

        // 支柱
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(14, 16, 4, 22);

        // 看板
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(6, 8, 20, 12);

        // 看板の縁
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(6, 8, 20, 2);
        ctx.fillRect(6, 18, 20, 2);

        return canvas;
    }

    createLamppost() {
        const canvas = document.createElement('canvas');
        canvas.width = 24;
        canvas.height = 56;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(10, 52, 4, 3);

        // ポール
        ctx.fillStyle = '#424242';
        ctx.fillRect(10, 12, 4, 42);

        // ランプ部分
        ctx.fillStyle = '#616161';
        ctx.fillRect(6, 8, 12, 8);

        // 光（黄色）
        ctx.fillStyle = '#fdd835';
        ctx.fillRect(8, 10, 8, 4);

        // ハイライト
        ctx.fillStyle = '#fff';
        ctx.fillRect(9, 11, 2, 2);

        return canvas;
    }

    createBench() {
        const canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 28;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(6, 24, 28, 2);

        // 座面
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(6, 16, 28, 4);

        // 背もたれ
        ctx.fillRect(6, 10, 28, 4);

        // 脚
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(8, 20, 3, 4);
        ctx.fillRect(29, 20, 3, 4);

        // 支柱
        ctx.fillRect(8, 14, 3, 6);
        ctx.fillRect(29, 14, 3, 6);

        return canvas;
    }

    createBarrel() {
        const canvas = document.createElement('canvas');
        canvas.width = 24;
        canvas.height = 28;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(6, 24, 12, 2);

        // 樽本体
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(7, 12, 10, 12);
        ctx.fillRect(6, 14, 12, 8);

        // 箍（たが）
        ctx.fillStyle = '#424242';
        ctx.fillRect(6, 13, 12, 2);
        ctx.fillRect(6, 21, 12, 2);

        // ハイライト
        ctx.fillStyle = '#a1887f';
        ctx.fillRect(8, 14, 3, 6);

        return canvas;
    }

    createCrate() {
        const canvas = document.createElement('canvas');
        canvas.width = 28;
        canvas.height = 28;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(6, 24, 16, 2);

        // 木箱
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(6, 12, 16, 12);

        // 板の模様
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(6, 12, 16, 2);
        ctx.fillRect(6, 22, 16, 2);
        ctx.fillRect(6, 12, 2, 12);
        ctx.fillRect(20, 12, 2, 12);
        ctx.fillRect(13, 12, 2, 12);

        return canvas;
    }

    createFenceHorizontal() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 24;
        const ctx = canvas.getContext('2d');

        // 杭
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(2, 8, 4, 12);
        ctx.fillRect(14, 8, 4, 12);
        ctx.fillRect(26, 8, 4, 12);

        // 横板
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(0, 10, 32, 3);
        ctx.fillRect(0, 15, 32, 3);

        return canvas;
    }

    createFenceVertical() {
        const canvas = document.createElement('canvas');
        canvas.width = 24;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 杭
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(8, 2, 4, 12);
        ctx.fillRect(8, 14, 4, 12);
        ctx.fillRect(8, 26, 4, 4);

        // 横板
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(6, 0, 3, 32);
        ctx.fillRect(11, 0, 3, 32);

        return canvas;
    }

    createFenceCorner() {
        const canvas = document.createElement('canvas');
        canvas.width = 24;
        canvas.height = 24;
        const ctx = canvas.getContext('2d');

        // 杭
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(8, 8, 4, 12);

        // 横板
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(0, 10, 24, 3);
        ctx.fillRect(10, 0, 3, 24);

        return canvas;
    }

    createPot() {
        const canvas = document.createElement('canvas');
        canvas.width = 20;
        canvas.height = 24;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(6, 20, 8, 2);

        // 壺
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(7, 14, 6, 6);
        ctx.fillRect(6, 16, 8, 2);

        // 口
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(7, 12, 6, 2);

        // 模様
        ctx.fillStyle = '#c62828';
        ctx.fillRect(7, 17, 6, 1);

        return canvas;
    }

    createWindow() {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        const ctx = canvas.getContext('2d');

        // 窓ガラス
        ctx.fillStyle = '#64b5f6';
        ctx.fillRect(2, 2, 12, 12);

        // 窓枠
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(7, 2, 2, 12);
        ctx.fillRect(2, 7, 12, 2);
        ctx.fillRect(0, 0, 16, 2);
        ctx.fillRect(0, 14, 16, 2);
        ctx.fillRect(0, 0, 2, 16);
        ctx.fillRect(14, 0, 2, 16);

        return canvas;
    }

    // ===== 家具（室内用） =====

    createTable() {
        const canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(8, 28, 24, 2);

        // 天板
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(6, 16, 28, 6);

        // 脚
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(8, 22, 4, 6);
        ctx.fillRect(28, 22, 4, 6);

        return canvas;
    }

    createChair() {
        const canvas = document.createElement('canvas');
        canvas.width = 24;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(6, 28, 12, 2);

        // 座面
        ctx.fillStyle = '#8d6e63';
        ctx.fillRect(6, 18, 12, 4);

        // 背もたれ
        ctx.fillRect(6, 10, 12, 6);

        // 脚
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(7, 22, 3, 6);
        ctx.fillRect(14, 22, 3, 6);

        // 背もたれの支柱
        ctx.fillRect(7, 16, 3, 2);
        ctx.fillRect(14, 16, 3, 2);

        return canvas;
    }

    createBed() {
        const canvas = document.createElement('canvas');
        canvas.width = 48;
        canvas.height = 40;
        const ctx = canvas.getContext('2d');

        // 影
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(6, 36, 36, 2);

        // マットレス
        ctx.fillStyle = '#e3f2fd';
        ctx.fillRect(8, 22, 32, 12);

        // 枕
        ctx.fillStyle = '#fff';
        ctx.fillRect(10, 18, 10, 6);

        // フレーム
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(6, 20, 36, 2);
        ctx.fillRect(6, 34, 36, 2);

        // ヘッドボード
        ctx.fillRect(6, 14, 4, 20);

        // 脚
        ctx.fillRect(8, 34, 3, 4);
        ctx.fillRect(37, 34, 3, 4);

        return canvas;
    }

    createBookshelf() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 48;
        const ctx = canvas.getContext('2d');

        // 本棚本体
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(6, 10, 20, 36);

        // 棚板
        ctx.fillStyle = '#4e342e';
        ctx.fillRect(6, 10, 20, 2);
        ctx.fillRect(6, 22, 20, 2);
        ctx.fillRect(6, 34, 20, 2);
        ctx.fillRect(6, 44, 20, 2);

        // 本
        ctx.fillStyle = '#e53935';
        ctx.fillRect(8, 12, 4, 9);
        ctx.fillStyle = '#1e88e5';
        ctx.fillRect(13, 12, 4, 9);
        ctx.fillStyle = '#43a047';
        ctx.fillRect(18, 12, 6, 9);

        ctx.fillStyle = '#fdd835';
        ctx.fillRect(8, 24, 5, 9);
        ctx.fillStyle = '#8e24aa';
        ctx.fillRect(14, 24, 4, 9);
        ctx.fillStyle = '#fb8c00';
        ctx.fillRect(19, 24, 5, 9);

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
