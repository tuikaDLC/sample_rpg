// ショップシステム
class ShopSystem {
    constructor() {
        this.currentShop = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        eventBus.on('openShop', (shopId) => {
            this.openShop(shopId);
        });

        eventBus.on('closeShop', () => {
            this.closeShop();
        });

        // ショップ閉じるボタン
        const closeBtn = document.getElementById('shop-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeShop();
            });
        }
    }

    openShop(shopId) {
        const shopData = window.gameData.shops[shopId];
        if (!shopData) {
            console.error(`Shop ${shopId} not found`);
            return;
        }

        this.currentShop = shopData;
        gameState.setState('shop');
        this.showShopUI();
    }

    showShopUI() {
        const shopUI = document.getElementById('shop-ui');
        if (!shopUI) return;

        shopUI.classList.remove('hidden');

        // ショップタイトル
        document.getElementById('shop-title').textContent = this.currentShop.name;

        // 商品リスト
        this.updateShopItems();
    }

    updateShopItems() {
        const itemsDiv = document.getElementById('shop-items');
        if (!itemsDiv) return;

        let html = '';
        this.currentShop.items.forEach((shopItem, index) => {
            const itemData = window.gameData.items[shopItem.id];
            if (!itemData) return;

            const canAfford = (gameState.player.gold || 0) >= shopItem.price;

            html += `
                <div class="shop-item ${canAfford ? '' : 'disabled'}">
                    <div class="shop-item-info">
                        <strong>${itemData.name}</strong>
                        <div style="font-size: 12px; color: #aaa;">${itemData.description}</div>
                    </div>
                    <div class="shop-item-price">
                        <span style="color: #ffd700;">${shopItem.price}G</span>
                        <button class="shop-buy-btn" data-index="${index}" ${canAfford ? '' : 'disabled'}>
                            購入
                        </button>
                    </div>
                </div>
            `;
        });

        // 所持金表示
        html = `<div class="shop-gold">所持金: ${gameState.player.gold || 0}G</div>` + html;

        itemsDiv.innerHTML = html;

        // 購入ボタンにイベントリスナーを追加
        document.querySelectorAll('.shop-buy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.buyItem(index);
            });
        });
    }

    buyItem(index) {
        const shopItem = this.currentShop.items[index];
        if (!shopItem) return;

        const price = shopItem.price;
        const playerGold = gameState.player.gold || 0;

        if (playerGold < price) {
            this.showMessage('お金が足りません！');
            return;
        }

        // 購入処理
        gameState.player.gold = playerGold - price;
        gameState.addItem(shopItem.id, shopItem.amount || 1);

        const itemData = window.gameData.items[shopItem.id];
        this.showMessage(`${itemData.name}を購入しました！`);

        // UI更新
        this.updateShopItems();
        gameState.updateUI();
    }

    showMessage(message) {
        const messageDiv = document.getElementById('shop-message');
        if (!messageDiv) return;

        messageDiv.textContent = message;
        messageDiv.style.display = 'block';

        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 2000);
    }

    closeShop() {
        const shopUI = document.getElementById('shop-ui');
        if (shopUI) {
            shopUI.classList.add('hidden');
        }

        this.currentShop = null;
        gameState.setState('field');
    }
}
