// 敵エンティティ（戦闘用）
class Enemy {
    constructor(enemyData) {
        this.id = enemyData.id;
        this.name = enemyData.name;
        this.level = enemyData.level;
        this.hp = enemyData.hp;
        this.maxHp = enemyData.hp;
        this.mp = enemyData.mp || 0;
        this.maxMp = enemyData.mp || 0;
        this.attack = enemyData.attack;
        this.defense = enemyData.defense;
        this.magic = enemyData.magic || 0;
        this.speed = enemyData.speed;
        this.exp = enemyData.exp;
        this.gold = enemyData.gold;
        this.sprite = enemyData.sprite;
        this.skills = enemyData.skills || [];
        this.dropItems = enemyData.dropItems || [];
    }

    takeDamage(damage) {
        this.hp = Math.max(0, this.hp - damage);
        return this.hp <= 0;
    }

    heal(amount) {
        this.hp = Math.min(this.maxHp, this.hp + amount);
    }

    isAlive() {
        return this.hp > 0;
    }

    chooseAction() {
        // 敵のAI - シンプルな行動選択
        if (this.skills.length > 0 && this.mp >= 10 && Math.random() < 0.3) {
            // 30%の確率でスキル使用
            const skill = this.skills[Math.floor(Math.random() * this.skills.length)];
            return { type: 'skill', skill: skill };
        }

        // 基本は通常攻撃
        return { type: 'attack' };
    }

    draw(ctx, x, y, scale = 1) {
        const sprite = assetLoader.getImage(this.sprite);
        if (sprite) {
            const width = sprite.width * scale;
            const height = sprite.height * scale;
            ctx.drawImage(sprite, x - width / 2, y - height / 2, width, height);
        }
    }
}
