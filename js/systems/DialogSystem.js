// ダイアログシステム
class DialogSystem {
    constructor() {
        this.active = false;
        this.currentDialog = null;
        this.dialogIndex = 0;
        this.textSpeed = 50; // ミリ秒
        this.displayedText = '';
        this.fullText = '';
        this.isTyping = false;
        this.setupEventListeners();
    }

    setupEventListeners() {
        eventBus.on('npcInteract', (data) => {
            this.showDialog(data.dialogId);
        });

        eventBus.on('action', () => {
            if (this.active) {
                this.nextDialog();
            } else if (gameState.getState() === 'field') {
                // フィールドでアクションキー - NPC調べる
                this.checkNPCInteraction();
            }
        });
    }

    checkNPCInteraction() {
        const player = gameState.player;
        const map = window.currentMapSystem;

        if (map) {
            map.checkNPCInteraction(player.x, player.y, player.direction);
        }
    }

    showDialog(dialogId) {
        const dialogData = window.gameData.dialogs[dialogId];
        if (!dialogData) {
            console.warn(`Dialog ${dialogId} not found`);
            return;
        }

        this.currentDialog = dialogData;
        this.dialogIndex = 0;
        this.active = true;
        gameState.setState('dialog');

        this.displayCurrentDialog();
    }

    displayCurrentDialog() {
        if (!this.currentDialog || this.dialogIndex >= this.currentDialog.length) {
            this.closeDialog();
            return;
        }

        const dialog = this.currentDialog[this.dialogIndex];
        this.fullText = dialog.text;
        this.displayedText = '';
        this.isTyping = true;

        // ダイアログボックスを表示
        const dialogBox = document.getElementById('dialog-box');
        dialogBox.classList.remove('hidden');

        // テキストをタイプライター効果で表示
        this.typeText();
    }

    typeText() {
        if (!this.isTyping) return;

        if (this.displayedText.length < this.fullText.length) {
            this.displayedText += this.fullText[this.displayedText.length];
            document.getElementById('dialog-text').textContent = this.displayedText;

            setTimeout(() => this.typeText(), this.textSpeed);
        } else {
            this.isTyping = false;
        }
    }

    nextDialog() {
        if (this.isTyping) {
            // タイピング中は全文表示
            this.displayedText = this.fullText;
            document.getElementById('dialog-text').textContent = this.displayedText;
            this.isTyping = false;
            return;
        }

        // 次のダイアログへ
        const currentDialog = this.currentDialog[this.dialogIndex];

        // イベント処理
        if (currentDialog.event) {
            this.handleDialogEvent(currentDialog.event);
        }

        this.dialogIndex++;
        this.displayCurrentDialog();
    }

    handleDialogEvent(event) {
        switch (event.type) {
            case 'setFlag':
                gameState.setFlag(event.flag, event.value);
                break;
            case 'giveItem':
                gameState.addItem(event.item, event.quantity || 1);
                break;
            case 'battle':
                this.closeDialog();
                const battleSystem = window.battleSystem;
                if (battleSystem && window.gameData.enemies[event.enemyId]) {
                    battleSystem.startBattle(window.gameData.enemies[event.enemyId]);
                }
                break;
            case 'heal':
                gameState.player.hp = gameState.player.maxHp;
                gameState.player.mp = gameState.player.maxMp;
                gameState.updateUI();
                break;
        }
    }

    closeDialog() {
        this.active = false;
        this.currentDialog = null;
        this.dialogIndex = 0;
        document.getElementById('dialog-box').classList.add('hidden');

        if (gameState.getState() === 'dialog') {
            gameState.setState('field');
        }
    }
}
