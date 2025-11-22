// インベントリシステム
class InventorySystem {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 必要に応じてイベントリスナーを追加
    }

    useItem(itemId) {
        const itemData = window.gameData.items[itemId];
        if (!itemData) return false;

        if (!gameState.hasItem(itemId)) {
            return false;
        }

        switch (itemData.type) {
            case 'consumable':
                this.useConsumable(itemId, itemData);
                break;
            case 'weapon':
            case 'armor':
                this.equipItem(itemId, itemData);
                break;
            case 'key':
                // キーアイテムは使用不可
                return false;
        }

        return true;
    }

    useConsumable(itemId, itemData) {
        const player = gameState.player;

        if (itemData.effect === 'heal_hp') {
            const healAmount = itemData.power;
            const actualHeal = Math.min(healAmount, player.maxHp - player.hp);
            player.hp += actualHeal;
            gameState.removeItem(itemId);
            gameState.updateUI();
            return true;
        }

        if (itemData.effect === 'heal_mp') {
            const healAmount = itemData.power;
            const actualHeal = Math.min(healAmount, player.maxMp - player.mp);
            player.mp += actualHeal;
            gameState.removeItem(itemId);
            gameState.updateUI();
            return true;
        }

        return false;
    }

    equipItem(itemId, itemData) {
        // 装備変更処理（簡略版）
        const player = gameState.player;
        const slot = itemData.type;

        // 現在の装備を外す
        if (player.equipment[slot]) {
            const oldEquip = player.equipment[slot];
            gameState.inventory[slot + 's'].push(oldEquip);
        }

        // 新しい装備をつける
        player.equipment[slot] = itemId;

        // インベントリから削除
        const index = gameState.inventory[slot + 's'].indexOf(itemId);
        if (index > -1) {
            gameState.inventory[slot + 's'].splice(index, 1);
        }

        // ステータス再計算
        this.recalculateStats();
        gameState.updateUI();

        return true;
    }

    recalculateStats() {
        // 装備によるステータスボーナスを再計算
        // 実装は簡略化
    }

    getItemList() {
        return gameState.inventory.items;
    }

    getEquipmentList() {
        return {
            weapons: gameState.inventory.weapons,
            armor: gameState.inventory.armor
        };
    }
}
