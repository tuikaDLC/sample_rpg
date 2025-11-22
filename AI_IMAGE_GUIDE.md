# AI画像生成ガイド - アニメ調キャラクター素材

このガイドでは、ゲーム用のアニメ調キャラクター画像をAI生成する方法を説明します。

## 📋 必要な画像リスト

### キャラクター画像

| ファイル名 | サイズ | 説明 | プロンプト例 |
|-----------|--------|------|------------|
| player.png | 32x32px | 主人公（勇者） | "anime RPG hero character, top-down sprite, blue armor, sword, pixel art style" |
| npc.png | 32x32px | 村人NPC | "anime villager character, top-down sprite, medieval clothing, friendly, pixel art" |
| enemy_slime.png | 32x32px | スライム | "cute anime slime monster, purple blob, top-down view, simple pixel art" |
| enemy_goblin.png | 32x32px | ゴブリン | "anime goblin enemy, green skin, small, top-down sprite, pixel art" |
| enemy_skeleton.png | 32x32px | スケルトン | "anime skeleton warrior, bones, top-down sprite, pixel art style" |
| enemy_dragon.png | 48x48px | ドラゴン | "anime dragon monster, red scales, wings, top-down sprite, pixel art, larger" |
| boss_demon.png | 64x64px | 魔王（ボス） | "anime demon lord boss, dark armor, menacing, top-down sprite, pixel art, large" |

### タイル画像

| ファイル名 | サイズ | 説明 | プロンプト例 |
|-----------|--------|------|------------|
| tile_grass.png | 32x32px | 草地タイル | "grass tile texture, pixel art, seamless, green, top-down RPG" |
| tile_water.png | 32x32px | 水タイル | "water tile texture, pixel art, seamless, blue, animated look" |
| tile_stone.png | 32x32px | 石畳タイル | "stone path tile, pixel art, seamless, gray cobblestone" |
| tile_floor.png | 32x32px | 床タイル | "wooden floor tile, pixel art, seamless, brown planks" |
| tile_wall.png | 32x32px | 壁タイル | "stone wall tile, pixel art, dark gray, dungeon style" |
| tile_door.png | 32x32px | ドアタイル | "wooden door tile, pixel art, brown, medieval style" |
| tile_chest.png | 32x32px | 宝箱タイル | "treasure chest tile, pixel art, golden, closed" |

## 🎨 推奨AI画像生成ツール

### 1. Stable Diffusion（無料・ローカル）

**インストール方法:**
```bash
# Stable Diffusion WebUIをインストール
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
cd stable-diffusion-webui
./webui.sh
```

**推奨モデル:**
- **Anything V5** - アニメスタイルに特化
- **AbyssOrangeMix** - 高品質なアニメイラスト
- **Counterfeit V3** - RPG風アニメキャラクター

**設定:**
- サイズ: 512x512 (後で32x32にリサイズ)
- Sampling method: DPM++ 2M Karras
- Sampling steps: 20-30
- CFG Scale: 7-9

### 2. Midjourney（有料・高品質）

Discord経由で使用。月額$10から。

**コマンド例:**
```
/imagine prompt: anime RPG hero sprite, top-down view, pixel art style,
blue armor, sword, simple design, transparent background --v 5 --ar 1:1
```

### 3. NovelAI（アニメ特化・有料）

アニメイラスト専門のAI。月額$10から。

**特徴:**
- アニメスタイルに最適化
- 高品質なキャラクター生成
- ガチャシステムなし

### 4. DALL-E 3（有料）

OpenAI提供。ChatGPT Plusで使用可能。

## 📝 効果的なプロンプトの書き方

### 基本構造
```
[スタイル] [対象] [視点] [特徴] [品質タグ]
```

### 例：主人公キャラクター
```
anime style, RPG hero character, top-down view,
blue armor with gold trim, holding sword,
pixel art style, simple design,
high quality, transparent background
```

### 重要なキーワード

**スタイル系:**
- `anime style` - アニメ調
- `pixel art` - ドット絵風
- `chibi` - デフォルメキャラ
- `2D sprite` - 2Dスプライト
- `RPG character` - RPGキャラクター

**視点系:**
- `top-down view` - 真上からの視点
- `bird's eye view` - 俯瞰視点
- `orthographic view` - 正投影

**品質系:**
- `high quality` - 高品質
- `detailed` - 詳細
- `clean lines` - クリーンな線
- `transparent background` - 透過背景

**ネガティブプロンプト（避けたいもの）:**
```
3D, realistic, photo, blurry, low quality,
watermark, signature, text
```

## 🖼️ 画像の後処理

### 1. リサイズ（必須）

生成された画像を適切なサイズに縮小します。

**ImageMagickを使用:**
```bash
# 32x32pxにリサイズ
convert player_large.png -resize 32x32 player.png

# バッチ処理
for file in *.png; do
  convert "$file" -resize 32x32 "resized_$file"
done
```

**Photoshop/GIMP:**
1. 画像を開く
2. Image > Image Size
3. Width: 32, Height: 32
4. Resampling: Nearest Neighbor (ドット絵の場合)

### 2. 背景透過（推奨）

**オンラインツール:**
- remove.bg - https://www.remove.bg/
- Photopea - https://www.photopea.com/ (無料Photoshop代替)

**GIMP:**
1. Layer > Transparency > Add Alpha Channel
2. Select > By Color
3. 背景色を選択
4. Delete

### 3. カラー調整

一貫性のある色調に調整します。

```bash
# ImageMagickで明度調整
convert input.png -modulate 100,110,100 output.png
```

## 📦 ファイル配置

生成した画像を以下の構造で配置します：

```
sample_rpg/
├── assets/
│   ├── characters/
│   │   ├── player.png
│   │   └── npc.png
│   ├── enemies/
│   │   ├── slime.png
│   │   ├── goblin.png
│   │   ├── skeleton.png
│   │   ├── dragon.png
│   │   └── demon.png
│   └── tiles/
│       ├── grass.png
│       ├── water.png
│       ├── stone.png
│       ├── floor.png
│       ├── wall.png
│       ├── door.png
│       └── chest.png
└── js/
    └── utils/
        └── AssetLoader.js  # ここを修正
```

## 🔧 コードの修正

`js/utils/AssetLoader.js`を以下のように変更：

```javascript
async loadAssets() {
    try {
        // キャラクター
        await this.loadImage('player', 'assets/characters/player.png');
        await this.loadImage('npc', 'assets/characters/npc.png');

        // 敵
        await this.loadImage('enemy_slime', 'assets/enemies/slime.png');
        await this.loadImage('enemy_goblin', 'assets/enemies/goblin.png');
        await this.loadImage('enemy_skeleton', 'assets/enemies/skeleton.png');
        await this.loadImage('enemy_dragon', 'assets/enemies/dragon.png');
        await this.loadImage('boss_demon', 'assets/enemies/demon.png');

        // タイル
        await this.loadImage('tile_grass', 'assets/tiles/grass.png');
        await this.loadImage('tile_water', 'assets/tiles/water.png');
        await this.loadImage('tile_stone', 'assets/tiles/stone.png');
        await this.loadImage('tile_floor', 'assets/tiles/floor.png');
        await this.loadImage('tile_wall', 'assets/tiles/wall.png');
        await this.loadImage('tile_door', 'assets/tiles/door.png');
        await this.loadImage('tile_chest', 'assets/tiles/chest.png');

        this.loaded = true;
        return true;
    } catch (error) {
        console.error('アセット読み込みエラー:', error);
        // フォールバック: プレースホルダーを使用
        await this.generatePlaceholderAssets();
        this.loaded = true;
        return true;
    }
}

async loadImage(key, path) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            this.images[key] = img;
            resolve();
        };
        img.onerror = (error) => {
            console.warn(`画像読み込み失敗: ${path}`);
            reject(error);
        };
        img.src = path;
    });
}
```

## ✅ チェックリスト

- [ ] AI画像生成ツールを選択・セットアップ
- [ ] キャラクター画像7種類を生成
- [ ] タイル画像7種類を生成
- [ ] 画像を32x32px（一部例外）にリサイズ
- [ ] 背景を透過処理
- [ ] `assets/`フォルダに配置
- [ ] `AssetLoader.js`を修正
- [ ] ゲームを起動してテスト

## 🎯 クイックスタート（最小構成）

時間がない場合、最低限これだけ生成すれば動作します：

1. **player.png** - 主人公
2. **enemy_slime.png** - 敵（スライム）
3. **tile_grass.png** - 草地タイル

これらをプレースホルダーから置き換えるだけでも、見た目が大きく改善します。

---

AI生成した素敵なアニメキャラクターで、ゲームをより魅力的にしましょう！ 🎨✨
