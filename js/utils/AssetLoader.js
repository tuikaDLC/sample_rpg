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
        // キャラクタープレースホルダー
        this.images.player = this.createColoredSquare(32, 32, '#4a90e2');
        this.images.npc = this.createColoredSquare(32, 32, '#50c878');
        this.images.enemy_slime = this.createColoredSquare(32, 32, '#9b59b6');
        this.images.enemy_goblin = this.createColoredSquare(32, 32, '#e74c3c');
        this.images.enemy_skeleton = this.createColoredSquare(32, 32, '#95a5a6');
        this.images.enemy_dragon = this.createColoredSquare(48, 48, '#c0392b');
        this.images.boss_demon = this.createColoredSquare(64, 64, '#2c3e50');

        // タイル
        this.images.tile_grass = this.createColoredSquare(32, 32, '#7cb342');
        this.images.tile_water = this.createColoredSquare(32, 32, '#2196f3');
        this.images.tile_stone = this.createColoredSquare(32, 32, '#757575');
        this.images.tile_floor = this.createColoredSquare(32, 32, '#8d6e63');
        this.images.tile_wall = this.createColoredSquare(32, 32, '#424242');
        this.images.tile_door = this.createColoredSquare(32, 32, '#6d4c41');
        this.images.tile_chest = this.createColoredSquare(32, 32, '#ffd700');

        return true;
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
