// マップシステム
class MapSystem {
    constructor(mapData) {
        this.name = mapData.name;
        this.width = mapData.width;
        this.height = mapData.height;
        this.tiles = mapData.tiles;
        this.collision = mapData.collision;
        this.npcs = mapData.npcs || [];
        this.events = mapData.events || [];
        this.transitions = mapData.transitions || [];
        this.encounterRate = mapData.encounterRate || 0;
        this.encounterEnemies = mapData.encounterEnemies || [];
        this.bgColor = mapData.bgColor || '#1a1a1a';

        this.npcEntities = [];
        this.initNPCs();
    }

    initNPCs() {
        this.npcEntities = this.npcs.map(npcData => {
            return new NPC(npcData.x, npcData.y, npcData.name, npcData.dialogId, npcData.sprite);
        });
    }

    canMove(x, y) {
        // マップ境界チェック
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return false;
        }

        // 衝突判定
        if (this.collision[y][x] === 1) {
            return false;
        }

        // NPCとの衝突判定
        for (let npc of this.npcEntities) {
            if (npc.x === x && npc.y === y) {
                return false;
            }
        }

        return true;
    }

    checkTransition(x, y) {
        for (let transition of this.transitions) {
            if (transition.x === x && transition.y === y) {
                eventBus.emit('mapTransition', {
                    targetMap: transition.targetMap,
                    targetX: transition.targetX,
                    targetY: transition.targetY
                });
                return true;
            }
        }
        return false;
    }

    checkEvent(x, y) {
        for (let event of this.events) {
            if (event.x === x && event.y === y && !event.triggered) {
                if (!event.condition || gameState.getFlag(event.condition)) {
                    eventBus.emit('mapEvent', event);
                    if (event.once) {
                        event.triggered = true;
                    }
                    return true;
                }
            }
        }
        return false;
    }

    checkNPCInteraction(playerX, playerY, direction) {
        // プレイヤーが向いている方向のマスをチェック
        let checkX = playerX;
        let checkY = playerY;

        switch (direction) {
            case 'up': checkY--; break;
            case 'down': checkY++; break;
            case 'left': checkX--; break;
            case 'right': checkX++; break;
        }

        for (let npc of this.npcEntities) {
            if (npc.x === checkX && npc.y === checkY) {
                npc.interact();
                return true;
            }
        }
        return false;
    }

    update(deltaTime) {
        for (let npc of this.npcEntities) {
            npc.update(deltaTime);
        }
    }

    draw(ctx, cameraX, cameraY) {
        // 背景
        ctx.fillStyle = this.bgColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // タイルを描画
        const tileSize = 32;
        const startX = Math.max(0, Math.floor(-cameraX / tileSize));
        const startY = Math.max(0, Math.floor(-cameraY / tileSize));
        const endX = Math.min(this.width, Math.ceil((ctx.canvas.width - cameraX) / tileSize));
        const endY = Math.min(this.height, Math.ceil((ctx.canvas.height - cameraY) / tileSize));

        for (let y = startY; y < endY; y++) {
            for (let x = startX; x < endX; x++) {
                const tileType = this.tiles[y][x];
                const sprite = assetLoader.getImage(tileType);

                if (sprite) {
                    ctx.drawImage(
                        sprite,
                        x * tileSize + cameraX,
                        y * tileSize + cameraY,
                        tileSize,
                        tileSize
                    );
                }
            }
        }

        // NPCを描画
        for (let npc of this.npcEntities) {
            npc.draw(ctx, cameraX, cameraY);
        }
    }

    getRandomEnemy() {
        if (this.encounterEnemies.length === 0) return null;

        const enemyId = this.encounterEnemies[
            Math.floor(Math.random() * this.encounterEnemies.length)
        ];

        return window.gameData.enemies[enemyId];
    }
}
