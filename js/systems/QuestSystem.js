// クエストシステム
class QuestSystem {
    constructor() {
        this.activeQuests = [];
        this.completedQuests = [];
        this.setupEventListeners();
    }

    setupEventListeners() {
        eventBus.on('questAccept', (questId) => {
            this.acceptQuest(questId);
        });

        eventBus.on('questComplete', (questId) => {
            this.completeQuest(questId);
        });
    }

    acceptQuest(questId) {
        const questData = window.gameData.quests[questId];
        if (!questData) {
            console.error(`Quest ${questId} not found`);
            return;
        }

        // 既に受けているかチェック
        if (this.activeQuests.find(q => q.id === questId)) {
            return;
        }

        const quest = {
            id: questId,
            ...questData,
            progress: 0,
            maxProgress: questData.requiredAmount || 1,
            accepted: true
        };

        this.activeQuests.push(quest);
        this.updateQuestUI();

        console.log(`クエスト受注: ${quest.title}`);
    }

    updateQuestProgress(questId, amount = 1) {
        const quest = this.activeQuests.find(q => q.id === questId);
        if (!quest) return;

        quest.progress = Math.min(quest.progress + amount, quest.maxProgress);

        if (quest.progress >= quest.maxProgress) {
            eventBus.emit('questReadyToComplete', questId);
        }

        this.updateQuestUI();
    }

    completeQuest(questId) {
        const questIndex = this.activeQuests.findIndex(q => q.id === questId);
        if (questIndex === -1) return;

        const quest = this.activeQuests[questIndex];

        // 報酬を付与
        if (quest.rewards) {
            if (quest.rewards.exp) {
                gameState.addExp(quest.rewards.exp);
            }
            if (quest.rewards.gold) {
                gameState.player.gold = (gameState.player.gold || 0) + quest.rewards.gold;
            }
            if (quest.rewards.items) {
                quest.rewards.items.forEach(item => {
                    gameState.addItem(item.id, item.amount || 1);
                });
            }
        }

        // 完了リストに移動
        this.completedQuests.push(quest);
        this.activeQuests.splice(questIndex, 1);

        // フラグを設定
        gameState.setFlag(`quest_${questId}_completed`, true);

        this.updateQuestUI();

        console.log(`クエスト完了: ${quest.title}`);
    }

    getActiveQuests() {
        return this.activeQuests;
    }

    isQuestActive(questId) {
        return this.activeQuests.some(q => q.id === questId);
    }

    isQuestCompleted(questId) {
        return this.completedQuests.some(q => q.id === questId);
    }

    updateQuestUI() {
        // クエストリストUIを更新
        const questListDiv = document.getElementById('quest-list');
        if (!questListDiv) return;

        if (this.activeQuests.length === 0) {
            questListDiv.innerHTML = '<div style="color: #aaa;">進行中のクエストはありません</div>';
            return;
        }

        let html = '';
        this.activeQuests.forEach(quest => {
            const progressText = quest.maxProgress > 1
                ? `(${quest.progress}/${quest.maxProgress})`
                : '';

            html += `
                <div class="quest-item">
                    <strong>${quest.title}</strong> ${progressText}
                    <div style="font-size: 12px; color: #aaa;">${quest.description}</div>
                </div>
            `;
        });

        questListDiv.innerHTML = html;
    }
}
