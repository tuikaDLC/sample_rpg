// 基本エンティティクラス
class Entity {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.width = 32;
        this.height = 32;
        this.direction = 'down';
        this.speed = 2;
        this.isMoving = false;
        this.animationFrame = 0;
        this.animationTimer = 0;
    }

    update(deltaTime) {
        if (this.isMoving) {
            this.animationTimer += deltaTime;
            if (this.animationTimer > 0.1) {
                this.animationFrame = (this.animationFrame + 1) % 4;
                this.animationTimer = 0;
            }
        } else {
            this.animationFrame = 0;
        }
    }

    draw(ctx, offsetX = 0, offsetY = 0) {
        const sprite = assetLoader.getImage(this.sprite);
        if (sprite) {
            ctx.drawImage(
                sprite,
                this.x * 32 + offsetX,
                this.y * 32 + offsetY,
                this.width,
                this.height
            );
        }
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
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
