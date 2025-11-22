// メインエントリーポイント
let game = null;

// ゲーム起動
window.addEventListener('load', async () => {
    console.log('=== 失われた記憶の物語 ===');
    console.log('ゲーム起動中...');

    try {
        game = new Game();
        await game.init();
        game.start();

        console.log('ゲーム開始！');

        // グローバルにゲームインスタンスを設定（デバッグ用）
        window.game = game;

        // オープニングダイアログを表示
        setTimeout(() => {
            showOpeningDialog();
        }, 500);

    } catch (error) {
        console.error('ゲーム起動エラー:', error);
        alert('ゲームの起動に失敗しました: ' + error.message);
    }
});

function showOpeningDialog() {
    const dialogBox = document.getElementById('dialog-box');
    const dialogText = document.getElementById('dialog-text');

    dialogBox.classList.remove('hidden');
    dialogText.textContent = '...ここは、どこだ？';

    setTimeout(() => {
        dialogText.textContent = '記憶が...ない...';
    }, 2000);

    setTimeout(() => {
        dialogText.textContent = '自分が誰なのか、何も思い出せない...';
    }, 4000);

    setTimeout(() => {
        dialogText.textContent = 'とにかく、この村を探索してみよう';
    }, 6000);

    setTimeout(() => {
        dialogBox.classList.add('hidden');
        gameState.setFlag('gameStarted', true);
    }, 8000);
}

// セーブ機能（開発用）
window.saveGame = () => {
    if (game && game.save()) {
        console.log('ゲームをセーブしました');
        alert('セーブしました！');
    }
};

// ロード機能（開発用）
window.loadGame = () => {
    if (game && game.load()) {
        console.log('ゲームをロードしました');
        alert('ロードしました！');
    } else {
        alert('セーブデータがありません');
    }
};

// デバッグコマンド
window.debug = {
    levelUp: () => {
        gameState.addExp(gameState.getExpForNextLevel());
        console.log('レベルアップ！');
    },
    heal: () => {
        gameState.player.hp = gameState.player.maxHp;
        gameState.player.mp = gameState.player.maxMp;
        gameState.updateUI();
        console.log('HP/MP全回復！');
    },
    addItem: (itemId, quantity = 1) => {
        gameState.addItem(itemId, quantity);
        console.log(`${itemId} x${quantity}を追加`);
    },
    teleport: (mapName, x, y) => {
        game.transitionToMap(mapName, x, y);
        console.log(`${mapName}の(${x}, ${y})にテレポート`);
    },
    battle: (enemyId) => {
        const enemyData = gameData.enemies[enemyId];
        if (enemyData) {
            window.battleSystem.startBattle(enemyData);
            console.log(`${enemyData.name}との戦闘開始！`);
        } else {
            console.error(`敵 ${enemyId} が見つかりません`);
        }
    }
};

console.log('デバッグコマンド:');
console.log('  debug.levelUp() - レベルアップ');
console.log('  debug.heal() - HP/MP全回復');
console.log('  debug.addItem(itemId, quantity) - アイテム追加');
console.log('  debug.teleport(mapName, x, y) - テレポート');
console.log('  debug.battle(enemyId) - 戦闘開始');
console.log('  saveGame() - セーブ');
console.log('  loadGame() - ロード');
