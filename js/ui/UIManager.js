// UI管理システム
class UIManager {
    constructor() {
        this.menuOpen = false;
        this.currentTab = 'status';
        this.setupEventListeners();
    }

    setupEventListeners() {
        // メニュータブ
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchTab(tab.dataset.tab);
            });
        });

        eventBus.on('openMenu', () => {
            this.openMenu();
        });

        eventBus.on('closeMenu', () => {
            this.closeMenu();
        });

        eventBus.on('levelUp', (level) => {
            this.showLevelUpNotification(level);
        });
    }

    openMenu() {
        if (gameState.getState() !== 'field') return;

        this.menuOpen = true;
        gameState.setState('menu');
        document.getElementById('menu-ui').classList.remove('hidden');
        this.updateMenuContent();
    }

    closeMenu() {
        this.menuOpen = false;
        document.getElementById('menu-ui').classList.add('hidden');
        gameState.setState('field');
    }

    switchTab(tabName) {
        this.currentTab = tabName;

        // タブのアクティブ状態を更新
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        this.updateMenuContent();
    }

    updateMenuContent() {
        const content = document.getElementById('menu-content');
        const player = gameState.player;

        switch (this.currentTab) {
            case 'status':
                content.innerHTML = `
                    <h2>${player.name}のステータス</h2>
                    <div style="padding: 20px; font-size: 16px; line-height: 2;">
                        <div><strong>レベル:</strong> ${player.level}</div>
                        <div><strong>HP:</strong> ${player.hp} / ${player.maxHp}</div>
                        <div><strong>MP:</strong> ${player.mp} / ${player.maxMp}</div>
                        <div><strong>攻撃力:</strong> ${player.attack}</div>
                        <div><strong>防御力:</strong> ${player.defense}</div>
                        <div><strong>魔力:</strong> ${player.magic}</div>
                        <div><strong>素早さ:</strong> ${player.speed}</div>
                        <div style="margin-top: 20px;">
                            <strong>次のレベルまで:</strong> ${gameState.getExpForNextLevel() - player.exp} EXP
                        </div>
                    </div>
                `;
                break;

            case 'items':
                content.innerHTML = '<h2>アイテム</h2><div style="padding: 20px;">';
                const items = gameState.inventory.items;

                if (Object.keys(items).length === 0) {
                    content.innerHTML += '<p>アイテムを持っていません</p>';
                } else {
                    for (let [itemId, quantity] of Object.entries(items)) {
                        const itemData = window.gameData.items[itemId] || { name: itemId };
                        content.innerHTML += `
                            <div style="padding: 10px; border-bottom: 1px solid #444;">
                                <strong>${itemData.name}</strong> x ${quantity}
                                <div style="font-size: 12px; color: #aaa;">${itemData.description || ''}</div>
                            </div>
                        `;
                    }
                }
                content.innerHTML += '</div>';
                break;

            case 'equipment':
                content.innerHTML = `
                    <h2>装備</h2>
                    <div style="padding: 20px; font-size: 16px; line-height: 2;">
                        <div><strong>武器:</strong> ${this.getEquipmentName(player.equipment.weapon)}</div>
                        <div><strong>防具:</strong> ${this.getEquipmentName(player.equipment.armor)}</div>
                        <div><strong>アクセサリ:</strong> ${this.getEquipmentName(player.equipment.accessory) || 'なし'}</div>
                    </div>
                `;
                break;

            case 'party':
                content.innerHTML = `
                    <h2>パーティ</h2>
                    <div style="padding: 20px;">
                        <div style="padding: 10px; border: 2px solid #4a90e2; border-radius: 8px; margin-bottom: 10px;">
                            <strong>${player.name}</strong> (主人公)
                            <div>Lv.${player.level} - HP: ${player.hp}/${player.maxHp}</div>
                        </div>
                        ${gameState.party.length === 0 ? '<p style="color: #aaa;">他のメンバーはいません</p>' : ''}
                    </div>
                `;
                break;
        }
    }

    getEquipmentName(equipId) {
        if (!equipId) return 'なし';
        const equipData = window.gameData.items[equipId];
        return equipData ? equipData.name : equipId;
    }

    showLevelUpNotification(level) {
        // レベルアップ通知（簡易版）
        console.log(`レベルアップ！ Lv.${level}になった！`);
    }

    updateHUD() {
        gameState.updateUI();
    }
}
