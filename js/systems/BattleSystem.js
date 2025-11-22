// 戦闘システム
class BattleSystem {
    constructor() {
        this.active = false;
        this.playerTurn = true;
        this.currentEnemy = null;
        this.battleLog = [];
        this.selectedAction = null;
        this.turnQueue = [];
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 戦闘ボタンのイベント
        document.querySelectorAll('.battle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                this.handlePlayerAction(action);
            });
        });

        eventBus.on('randomEncounter', () => {
            this.startBattle();
        });
    }

    startBattle(enemyData = null) {
        if (this.active) return;

        // 敵データを取得（ランダムまたは指定）
        if (!enemyData) {
            const map = window.currentMapSystem;
            enemyData = map ? map.getRandomEnemy() : null;
        }

        if (!enemyData) return;

        this.currentEnemy = new Enemy(enemyData);
        this.active = true;
        this.playerTurn = true;
        this.battleLog = [];

        gameState.setState('battle');
        this.showBattleUI();
        this.addLog(`${this.currentEnemy.name}が現れた！`);
        this.updateBattleUI();
    }

    showBattleUI() {
        document.getElementById('battle-ui').classList.remove('hidden');
        document.getElementById('dialog-box').classList.add('hidden');
        document.getElementById('menu-ui').classList.add('hidden');
    }

    hideBattleUI() {
        document.getElementById('battle-ui').classList.add('hidden');
    }

    handlePlayerAction(action) {
        if (!this.playerTurn || !this.active) return;

        this.playerTurn = false;

        switch (action) {
            case 'attack':
                this.playerAttack();
                break;
            case 'skill':
                this.showSkillMenu();
                break;
            case 'item':
                this.showItemMenu();
                break;
            case 'defend':
                this.playerDefend();
                break;
        }
    }

    playerAttack() {
        const player = gameState.player;
        const damage = Math.max(1, player.attack - Math.floor(this.currentEnemy.defense / 2));
        const finalDamage = Math.floor(damage * (0.9 + Math.random() * 0.2)); // ±10%のランダム性

        const isDead = this.currentEnemy.takeDamage(finalDamage);
        this.addLog(`${player.name}の攻撃！${this.currentEnemy.name}に${finalDamage}のダメージ！`);

        if (isDead) {
            this.victory();
        } else {
            setTimeout(() => this.enemyTurn(), 1000);
        }

        this.updateBattleUI();
    }

    playerDefend() {
        const player = gameState.player;
        this.addLog(`${player.name}は防御の構えをとった！`);

        setTimeout(() => this.enemyTurn(), 1000);
        this.updateBattleUI();
    }

    enemyTurn() {
        if (!this.currentEnemy.isAlive()) return;

        const action = this.currentEnemy.chooseAction();
        const player = gameState.player;

        if (action.type === 'attack') {
            const damage = Math.max(1, this.currentEnemy.attack - Math.floor(player.defense / 2));
            const finalDamage = Math.floor(damage * (0.9 + Math.random() * 0.2));

            player.hp = Math.max(0, player.hp - finalDamage);
            this.addLog(`${this.currentEnemy.name}の攻撃！${player.name}は${finalDamage}のダメージを受けた！`);

            if (player.hp <= 0) {
                this.gameOver();
            } else {
                this.playerTurn = true;
            }
        }

        this.updateBattleUI();
        gameState.updateUI();
    }

    victory() {
        const exp = this.currentEnemy.exp;
        const gold = this.currentEnemy.gold;

        this.addLog(`${this.currentEnemy.name}を倒した！`);
        this.addLog(`経験値${exp}を獲得！`);

        gameState.addExp(exp);

        // ドロップアイテム
        if (this.currentEnemy.dropItems.length > 0 && Math.random() < 0.3) {
            const item = this.currentEnemy.dropItems[
                Math.floor(Math.random() * this.currentEnemy.dropItems.length)
            ];
            gameState.addItem(item);
            this.addLog(`${item}を手に入れた！`);
        }

        setTimeout(() => this.endBattle(), 2000);
    }

    gameOver() {
        this.addLog('全滅してしまった...');

        setTimeout(() => {
            // ゲームオーバー処理（村に戻る、HP/MP半分回復など）
            gameState.player.hp = Math.floor(gameState.player.maxHp / 2);
            gameState.player.mp = Math.floor(gameState.player.maxMp / 2);
            gameState.setMap('village');
            gameState.player.x = 10;
            gameState.player.y = 10;
            this.endBattle();
        }, 2000);
    }

    endBattle() {
        this.active = false;
        this.currentEnemy = null;
        this.battleLog = [];
        this.hideBattleUI();
        gameState.setState('field');
    }

    showSkillMenu() {
        // スキルメニュー表示（簡略版）
        this.addLog('スキルメニューは現在準備中です');
        this.playerTurn = true;
    }

    showItemMenu() {
        // アイテムメニュー表示（簡略版）
        const hasPotion = gameState.hasItem('potion');

        if (hasPotion) {
            gameState.removeItem('potion');
            const healAmount = 50;
            gameState.player.hp = Math.min(gameState.player.maxHp, gameState.player.hp + healAmount);
            this.addLog(`ポーションを使った！HPが${healAmount}回復した！`);
            gameState.updateUI();
            setTimeout(() => this.enemyTurn(), 1000);
        } else {
            this.addLog('使えるアイテムがない！');
            this.playerTurn = true;
        }

        this.updateBattleUI();
    }

    updateBattleUI() {
        const player = gameState.player;
        const enemy = this.currentEnemy;

        // プレイヤーステータス
        document.getElementById('player-stats').innerHTML = `
            <div><strong>${player.name}</strong> Lv.${player.level}</div>
            <div>HP: ${player.hp}/${player.maxHp}</div>
            <div>MP: ${player.mp}/${player.maxMp}</div>
        `;

        // 敵ステータス
        if (enemy) {
            document.getElementById('enemy-stats').innerHTML = `
                <div><strong>${enemy.name}</strong> Lv.${enemy.level}</div>
                <div>HP: ${enemy.hp}/${enemy.maxHp}</div>
            `;
        }

        // バトルログ
        const logHtml = this.battleLog.slice(-5).map(log => `<div>${log}</div>`).join('');
        document.getElementById('battle-log').innerHTML = logHtml;

        // ボタンの有効/無効
        document.querySelectorAll('.battle-btn').forEach(btn => {
            btn.disabled = !this.playerTurn;
        });
    }

    addLog(message) {
        this.battleLog.push(message);
        console.log(`[BATTLE] ${message}`);
    }

    draw(ctx) {
        if (!this.active || !this.currentEnemy) return;

        // 戦闘背景
        const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // 敵を描画
        this.currentEnemy.draw(ctx, ctx.canvas.width / 2, ctx.canvas.height / 3, 2);
    }
}
