# 失われた記憶の物語 - 2D RPG

ブラウザで動作する2D RPGゲームです。プレイ時間は約4-5時間を想定しています。

## 🎮 ゲーム概要

記憶を失った主人公が謎の村で目覚めます。
村人たちと交流しながら、失われた記憶と世界の秘密を解き明かす冒険に出ましょう。

### ストーリー
- 記憶喪失の主人公が村で目覚める
- NPCとの会話を通じて手がかりを集める
- 森、古代遺跡を探索
- 最終的に魔王を倒し、記憶を取り戻す

### 主な機能
- **フィールド探索**: トップダウンビューでマップを自由に歩き回れます
- **ターン制バトル**: 敵とのエンカウント戦闘
- **NPCとの会話**: ダイアログシステム
- **アイテム管理**: ポーション、装備品など
- **レベルアップシステム**: 経験値を獲得して成長
- **セーブ/ロード機能**: ローカルストレージに保存

## 🚀 プレイ方法

### 起動
ブラウザで `index.html` を開くだけでプレイできます。

```bash
# シンプルなHTTPサーバーを起動（推奨）
python3 -m http.server 8000

# ブラウザでアクセス
# http://localhost:8000
```

### 操作方法
- **移動**: WASD キー または 矢印キー
- **調べる/決定**: SPACE キー
- **メニュー**: M キー
- **戻る**: ESC キー

## 📁 プロジェクト構成

```
sample_rpg/
├── index.html              # メインHTMLファイル
├── styles/
│   └── main.css           # スタイルシート
├── js/
│   ├── utils/
│   │   ├── EventBus.js    # イベントシステム
│   │   └── AssetLoader.js # アセット読み込み
│   ├── core/
│   │   ├── GameState.js   # ゲーム状態管理
│   │   └── InputHandler.js # 入力処理
│   ├── entities/
│   │   ├── Entity.js      # 基本エンティティ
│   │   ├── Player.js      # プレイヤー
│   │   ├── NPC.js         # NPC
│   │   └── Enemy.js       # 敵キャラクター
│   ├── systems/
│   │   ├── MapSystem.js   # マップ管理
│   │   ├── BattleSystem.js # 戦闘システム
│   │   ├── DialogSystem.js # ダイアログシステム
│   │   └── InventorySystem.js # アイテム管理
│   ├── ui/
│   │   └── UIManager.js   # UI管理
│   ├── data/
│   │   └── GameData.js    # ゲームデータ（敵、アイテム、マップ等）
│   ├── Game.js            # メインゲームクラス
│   └── main.js            # エントリーポイント
└── README.md              # このファイル
```

## 🎨 キャラクターグラフィック

### プログラム生成ドット絵（現在）

ゲームは**Canvas APIで生成されたドット絵風キャラクター**を使用しています。各キャラクターには以下の特徴があります：

**プレイヤー & NPC:**
- 勇者：青い鎧、剣を持った主人公
- 村人：緑の服、友好的な表情

**敵キャラクター:**
- スライム：紫色の丸いモンスター、かわいい目
- ゴブリン：緑の肌、黄色い目、牙付き
- スケルトン：白い骨、空洞の目、肋骨が見える
- ドラゴン：赤い鱗、翼、煙を吐く
- 魔王：巨大、黒い鎧、赤く光る目、紫のオーラ

**タイル:**
- 草地、水、石畳、木の床、壁、ドア、宝箱など

これらは全てJavaScriptで動的に生成されるため、**追加のファイルは不要**です。

### AI生成画像への置き換え（オプション）

より高品質なアニメ調キャラクターが欲しい場合、AI生成したアニメ調キャラクターに簡単に置き換えられる構造になっています。

### 推奨AI画像生成サービス
- **Stable Diffusion** (ローカル)
- **Midjourney** (Discord)
- **DALL-E** (OpenAI)
- **NovelAI** (アニメ特化)

### 生成すべき画像

#### キャラクター (32x32px推奨)
1. **player.png** - 主人公（勇者）
2. **npc.png** - 一般NPC（村人）
3. **enemy_slime.png** - スライム
4. **enemy_goblin.png** - ゴブリン
5. **enemy_skeleton.png** - スケルトン (32x32px)
6. **enemy_dragon.png** - ドラゴン (48x48px)
7. **boss_demon.png** - 魔王 (64x64px)

#### タイル (32x32px)
1. **tile_grass.png** - 草地
2. **tile_water.png** - 水
3. **tile_stone.png** - 石畳
4. **tile_floor.png** - 床
5. **tile_wall.png** - 壁
6. **tile_door.png** - ドア
7. **tile_chest.png** - 宝箱

### プロンプト例（Stable Diffusion / Midjourney）

```
主人公（勇者）:
"anime style hero character sprite, top-down view, 32x32 pixel art style,
blue armor, sword, transparent background, simple design"

スライム:
"anime style slime monster sprite, top-down view, 32x32 pixel art style,
cute round blob, purple color, simple design, transparent background"

村人NPC:
"anime style villager character sprite, top-down view, 32x32 pixel art style,
medieval clothing, friendly appearance, transparent background"
```

### 画像の置き換え方法

`js/utils/AssetLoader.js` の `generatePlaceholderAssets()` メソッドを修正して、実際の画像を読み込むようにします。

```javascript
async loadAssets() {
    // プレースホルダーの代わりに実際の画像を読み込む
    await this.loadImage('player', 'assets/characters/player.png');
    await this.loadImage('npc', 'assets/characters/npc.png');
    await this.loadImage('enemy_slime', 'assets/enemies/slime.png');
    // ... 他の画像も同様に
    this.loaded = true;
}

async loadImage(key, path) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            this.images[key] = img;
            resolve();
        };
        img.onerror = reject;
        img.src = path;
    });
}
```

## 🎯 ゲームの拡張アイデア

- **パーティシステム**: 仲間キャラクターの追加
- **スキルシステム**: より多様な戦闘スキル
- **装備強化**: 武器・防具の強化システム
- **サイドクエスト**: より多くのクエスト
- **ダンジョン**: ランダム生成ダンジョン
- **BGM/効果音**: オーディオの追加
- **マルチエンディング**: 選択によるストーリー分岐

## 🐛 デバッグコマンド

ブラウザのコンソールで以下のコマンドが使用できます：

```javascript
debug.levelUp()              // レベルアップ
debug.heal()                 // HP/MP全回復
debug.addItem('potion', 10)  // アイテム追加
debug.teleport('forest', 15, 10)  // テレポート
debug.battle('demon_lord')   // 特定の敵との戦闘
saveGame()                   // セーブ
loadGame()                   // ロード
```

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🙏 クレジット

- ゲームデザイン・プログラミング: Claude (Anthropic)
- プロジェクト: sample_rpg

---

楽しいRPG体験をお楽しみください！ 🎮✨
