// プレイヤーエンティティ
class Player extends Entity {
    constructor(x, y) {
        super(x, y, 'player');
        this.moveTimer = 0;
        this.moveDelay = 0.15; // 移動間隔
    }

    update(deltaTime) {
        super.update(deltaTime);

        if (gameState.getState() !== 'field') return;

        // 移動中でなければ新しい移動を受け付ける
        if (!this.isMoving) {
            const input = inputHandler.getMovementInput();

            if (input.dx !== 0 || input.dy !== 0) {
                this.tryMove(input.dx, input.dy);
            }
        }

        // ランダムエンカウント判定（タイル移動完了時）
        if (!this.isMoving && this.wasMoving) {
            this.checkRandomEncounter();
        }

        this.wasMoving = this.isMoving;
    }

    tryMove(dx, dy) {
        // 方向を設定
        if (dx < 0) this.direction = 'left';
        else if (dx > 0) this.direction = 'right';
        else if (dy < 0) this.direction = 'up';
        else if (dy > 0) this.direction = 'down';

        const newX = this.x + dx;
        const newY = this.y + dy;

        // マップ境界チェック
        const map = window.currentMapSystem;
        if (!map) return;

        if (map.canMove(newX, newY)) {
            // 目標位置を設定（スムーズに移動開始）
            this.targetX = newX;
            this.targetY = newY;
            this.isMoving = true;

            // マップ遷移チェック（目標位置で）
            map.checkTransition(newX, newY);

            // イベントチェック（目標位置で）
            map.checkEvent(newX, newY);

            // ゲームステートのプレイヤー位置を更新
            gameState.player.x = newX;
            gameState.player.y = newY;
        } else {
            this.isMoving = false;
        }
    }

    checkRandomEncounter() {
        const map = window.currentMapSystem;
        if (!map || !map.encounterRate) return;

        // エンカウント判定（1/encounterRateの確率）
        if (Math.random() < 1 / map.encounterRate) {
            eventBus.emit('randomEncounter');
        }
    }

    draw(ctx, offsetX = 0, offsetY = 0) {
        super.draw(ctx, offsetX, offsetY);
    }
}
