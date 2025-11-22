// ゲーム状態管理
class GameState {
    constructor() {
        this.currentState = 'loading'; // loading, field, battle, menu, dialog
        this.currentMap = 'village';
        this.player = {
            name: '勇者',
            level: 1,
            exp: 0,
            hp: 100,
            maxHp: 100,
            mp: 50,
            maxMp: 50,
            attack: 15,
            defense: 10,
            magic: 12,
            speed: 10,
            gold: 500, // 初期所持金
            x: 20,
            y: 17,
            direction: 'down',
            skills: ['fire_ball', 'heal'],
            equipment: {
                weapon: 'wooden_sword',
                armor: 'leather_armor',
                accessory: null
            }
        };

        this.party = []; // パーティメンバー
        this.inventory = {
            items: {
                'potion': 5,
                'ether': 3,
                'antidote': 2
            },
            weapons: ['wooden_sword'],
            armor: ['leather_armor'],
            keyItems: []
        };

        this.flags = {
            // ストーリーフラグ
            gameStarted: false,
            talkedToElder: false,
            clearedForest: false,
            clearedRuins: false,
            finalBossDefeated: false,
            // クエストフラグ
            quest_herbGathering: 0, // 0: 未受注, 1: 進行中, 2: 完了
            quest_lostCat: 0,
            quest_banditClear: 0
        };

        this.gameTime = 0; // プレイ時間（秒）
    }

    setState(newState) {
        console.log(`状態変更: ${this.currentState} -> ${newState}`);
        this.currentState = newState;
        eventBus.emit('stateChanged', newState);
    }

    getState() {
        return this.currentState;
    }

    setMap(mapName) {
        this.currentMap = mapName;
        eventBus.emit('mapChanged', mapName);
    }

    addExp(amount) {
        this.player.exp += amount;
        const expNeeded = this.getExpForNextLevel();

        while (this.player.exp >= expNeeded) {
            this.levelUp();
        }

        this.updateUI();
    }

    getExpForNextLevel() {
        return Math.floor(100 * Math.pow(1.5, this.player.level - 1));
    }

    levelUp() {
        this.player.level++;
        this.player.exp -= this.getExpForNextLevel();

        // ステータス上昇
        this.player.maxHp += 20;
        this.player.maxMp += 10;
        this.player.attack += 3;
        this.player.defense += 2;
        this.player.magic += 2;
        this.player.speed += 1;

        // HP/MPを全快
        this.player.hp = this.player.maxHp;
        this.player.mp = this.player.maxMp;

        eventBus.emit('levelUp', this.player.level);
    }

    addItem(itemId, quantity = 1) {
        if (!this.inventory.items[itemId]) {
            this.inventory.items[itemId] = 0;
        }
        this.inventory.items[itemId] += quantity;
    }

    removeItem(itemId, quantity = 1) {
        if (this.inventory.items[itemId]) {
            this.inventory.items[itemId] -= quantity;
            if (this.inventory.items[itemId] <= 0) {
                delete this.inventory.items[itemId];
            }
            return true;
        }
        return false;
    }

    hasItem(itemId, quantity = 1) {
        return this.inventory.items[itemId] >= quantity;
    }

    setFlag(flagName, value) {
        this.flags[flagName] = value;
    }

    getFlag(flagName) {
        return this.flags[flagName] || false;
    }

    updateUI() {
        document.getElementById('player-name').textContent = this.player.name;
        document.getElementById('player-level').textContent = this.player.level;
        document.getElementById('player-hp').textContent = this.player.hp;
        document.getElementById('player-max-hp').textContent = this.player.maxHp;
        document.getElementById('player-mp').textContent = this.player.mp;
        document.getElementById('player-max-mp').textContent = this.player.maxMp;

        const goldElement = document.getElementById('player-gold');
        if (goldElement) {
            goldElement.textContent = this.player.gold || 0;
        }
    }

    save() {
        const saveData = {
            player: this.player,
            party: this.party,
            inventory: this.inventory,
            flags: this.flags,
            currentMap: this.currentMap,
            gameTime: this.gameTime
        };
        localStorage.setItem('rpg_save', JSON.stringify(saveData));
        return true;
    }

    load() {
        const saveData = localStorage.getItem('rpg_save');
        if (saveData) {
            const data = JSON.parse(saveData);
            this.player = data.player;
            this.party = data.party || [];
            this.inventory = data.inventory;
            this.flags = data.flags;
            this.currentMap = data.currentMap;
            this.gameTime = data.gameTime || 0;
            this.updateUI();
            return true;
        }
        return false;
    }
}

const gameState = new GameState();
