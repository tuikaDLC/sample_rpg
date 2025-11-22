// 入力処理システム
class InputHandler {
    constructor() {
        this.keys = {};
        this.keysPressed = {};
        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener('keydown', (e) => {
            if (!this.keys[e.key]) {
                this.keysPressed[e.key] = true;
            }
            this.keys[e.key] = true;

            // ゲーム状態に応じた処理
            this.handleKeyPress(e.key);
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
            delete this.keysPressed[e.key];
        });
    }

    handleKeyPress(key) {
        const state = gameState.getState();

        if (key === 'm' || key === 'M') {
            if (state === 'field') {
                eventBus.emit('openMenu');
            } else if (state === 'menu') {
                eventBus.emit('closeMenu');
            }
        }

        if (key === 'Escape') {
            if (state === 'menu') {
                eventBus.emit('closeMenu');
            }
        }

        if (key === ' ' || key === 'Enter') {
            eventBus.emit('action');
        }
    }

    isKeyDown(key) {
        return this.keys[key] || false;
    }

    isKeyPressed(key) {
        if (this.keysPressed[key]) {
            delete this.keysPressed[key];
            return true;
        }
        return false;
    }

    getMovementInput() {
        let dx = 0;
        let dy = 0;

        if (this.isKeyDown('w') || this.isKeyDown('W') || this.isKeyDown('ArrowUp')) {
            dy = -1;
        }
        if (this.isKeyDown('s') || this.isKeyDown('S') || this.isKeyDown('ArrowDown')) {
            dy = 1;
        }
        if (this.isKeyDown('a') || this.isKeyDown('A') || this.isKeyDown('ArrowLeft')) {
            dx = -1;
        }
        if (this.isKeyDown('d') || this.isKeyDown('D') || this.isKeyDown('ArrowRight')) {
            dx = 1;
        }

        return { dx, dy };
    }

    clear() {
        this.keys = {};
        this.keysPressed = {};
    }
}

const inputHandler = new InputHandler();
