// 基本エンティティクラス
class Entity {
    constructor(x, y, sprite) {
        this.x = x; // タイル座標
        this.y = y; // タイル座標
        this.pixelX = x * 32; // 実際の描画位置（ピクセル）
        this.pixelY = y * 32; // 実際の描画位置（ピクセル）
        this.targetX = x; // 目標タイル座標
        this.targetY = y; // 目標タイル座標
        this.sprite = sprite;
        this.width = 32;
        this.height = 32;
        this.direction = 'down';
        this.speed = 160; // ピクセル/秒（タイル移動速度）
        this.isMoving = false;
        this.animationFrame = 0;
        this.animationTimer = 0;
    }

    update(deltaTime) {
        // スムーズな移動の補間
        const targetPixelX = this.targetX * 32;
        const targetPixelY = this.targetY * 32;

        if (this.pixelX !== targetPixelX || this.pixelY !== targetPixelY) {
            this.isMoving = true;

            // 目標位置への移動
            const dx = targetPixelX - this.pixelX;
            const dy = targetPixelY - this.pixelY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 0) {
                const moveDistance = this.speed * deltaTime;

                if (moveDistance >= distance) {
                    // 目標に到達
                    this.pixelX = targetPixelX;
                    this.pixelY = targetPixelY;
                    this.x = this.targetX;
                    this.y = this.targetY;
                    this.isMoving = false;
                } else {
                    // 目標に向かって移動
                    this.pixelX += (dx / distance) * moveDistance;
                    this.pixelY += (dy / distance) * moveDistance;
                }
            }

            // アニメーション
            this.animationTimer += deltaTime;
            if (this.animationTimer > 0.1) {
                this.animationFrame = (this.animationFrame + 1) % 4;
                this.animationTimer = 0;
            }
        } else {
            this.isMoving = false;
            this.animationFrame = 0;
        }
    }

    draw(ctx, offsetX = 0, offsetY = 0) {
        const sprite = assetLoader.getImage(this.sprite);
        if (sprite) {
            ctx.drawImage(
                sprite,
                this.pixelX + offsetX,
                this.pixelY + offsetY,
                this.width,
                this.height
            );
        }
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.pixelX = x * 32;
        this.pixelY = y * 32;
    }

    getBounds() {
        return {
            x: this.x,
            y: this.y,
            width: this.width / 32,
            height: this.height / 32
        };
    }
}
