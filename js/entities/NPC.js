// NPCエンティティ
class NPC extends Entity {
    constructor(x, y, name, dialogId, sprite = 'npc') {
        super(x, y, sprite);
        this.name = name;
        this.dialogId = dialogId;
    }

    interact() {
        eventBus.emit('npcInteract', {
            name: this.name,
            dialogId: this.dialogId
        });
    }

    update(deltaTime) {
        super.update(deltaTime);
        // NPCの自動移動などはここに追加可能
    }
}
