// ゲームデータ - アイテム、敵、マップ、ダイアログなど
const gameData = {
    // アイテムデータ
    items: {
        'potion': {
            name: 'ポーション',
            description: 'HPを50回復する',
            type: 'consumable',
            effect: 'heal_hp',
            power: 50
        },
        'ether': {
            name: 'エーテル',
            description: 'MPを30回復する',
            type: 'consumable',
            effect: 'heal_mp',
            power: 30
        },
        'antidote': {
            name: '毒消し',
            description: '毒状態を回復する',
            type: 'consumable',
            effect: 'cure_poison'
        },
        'wooden_sword': {
            name: '木の剣',
            description: '木でできた剣',
            type: 'weapon',
            attack: 5
        },
        'leather_armor': {
            name: '革の鎧',
            description: '革でできた鎧',
            type: 'armor',
            defense: 3
        },
        'iron_sword': {
            name: '鉄の剣',
            description: '鉄でできた剣',
            type: 'weapon',
            attack: 15
        },
        'steel_armor': {
            name: '鋼の鎧',
            description: '鋼でできた鎧',
            type: 'armor',
            defense: 10
        },
        // 回復アイテム追加
        'hi_potion': {
            name: 'ハイポーション',
            description: 'HPを150回復する',
            type: 'consumable',
            effect: 'heal_hp',
            power: 150
        },
        'mega_potion': {
            name: 'メガポーション',
            description: 'HPを全回復する',
            type: 'consumable',
            effect: 'heal_hp',
            power: 9999
        },
        'hi_ether': {
            name: 'ハイエーテル',
            description: 'MPを80回復する',
            type: 'consumable',
            effect: 'heal_mp',
            power: 80
        },
        'elixir': {
            name: 'エリクサー',
            description: 'HP・MPを全回復する',
            type: 'consumable',
            effect: 'heal_all',
            power: 9999
        },
        // 武器追加
        'bronze_sword': {
            name: '青銅の剣',
            description: '青銅でできた剣',
            type: 'weapon',
            attack: 8
        },
        'steel_sword': {
            name: '鋼の剣',
            description: '鋼でできた剣',
            type: 'weapon',
            attack: 20
        },
        'silver_sword': {
            name: '銀の剣',
            description: '銀でできた剣',
            type: 'weapon',
            attack: 30
        },
        'mythril_sword': {
            name: 'ミスリルの剣',
            description: 'ミスリルでできた剣',
            type: 'weapon',
            attack: 45
        },
        'dragon_sword': {
            name: 'ドラゴンソード',
            description: '竜の力を宿した剣',
            type: 'weapon',
            attack: 60
        },
        'excalibur': {
            name: 'エクスカリバー',
            description: '伝説の聖剣',
            type: 'weapon',
            attack: 80
        },
        // 防具追加
        'bronze_armor': {
            name: '青銅の鎧',
            description: '青銅でできた鎧',
            type: 'armor',
            defense: 5
        },
        'chain_mail': {
            name: 'チェインメイル',
            description: '鎖でできた鎧',
            type: 'armor',
            defense: 8
        },
        'silver_armor': {
            name: '銀の鎧',
            description: '銀でできた鎧',
            type: 'armor',
            defense: 15
        },
        'mythril_armor': {
            name: 'ミスリルの鎧',
            description: 'ミスリルでできた鎧',
            type: 'armor',
            defense: 25
        },
        'dragon_armor': {
            name: 'ドラゴンアーマー',
            description: '竜の鱗でできた鎧',
            type: 'armor',
            defense: 35
        },
        'aegis_shield': {
            name: 'イージスの盾',
            description: '伝説の盾',
            type: 'armor',
            defense: 50
        },
        // アクセサリー
        'power_ring': {
            name: 'パワーリング',
            description: '攻撃力が上がる指輪',
            type: 'accessory',
            attack: 10
        },
        'protect_ring': {
            name: 'プロテクトリング',
            description: '防御力が上がる指輪',
            type: 'accessory',
            defense: 10
        },
        'speed_boots': {
            name: 'スピードブーツ',
            description: '素早さが上がるブーツ',
            type: 'accessory',
            speed: 5
        }
    },

    // 敵データ
    enemies: {
        'slime': {
            id: 'slime',
            name: 'スライム',
            level: 1,
            hp: 30,
            mp: 0,
            attack: 8,
            defense: 3,
            magic: 0,
            speed: 5,
            exp: 10,
            gold: 5,
            sprite: 'enemy_slime',
            skills: [],
            dropItems: ['potion']
        },
        'goblin': {
            id: 'goblin',
            name: 'ゴブリン',
            level: 3,
            hp: 50,
            mp: 0,
            attack: 12,
            defense: 5,
            magic: 0,
            speed: 8,
            exp: 25,
            gold: 15,
            sprite: 'enemy_goblin',
            skills: [],
            dropItems: ['potion', 'antidote']
        },
        'skeleton': {
            id: 'skeleton',
            name: 'スケルトン',
            level: 5,
            hp: 80,
            mp: 10,
            attack: 18,
            defense: 8,
            magic: 5,
            speed: 10,
            exp: 50,
            gold: 30,
            sprite: 'enemy_skeleton',
            skills: [],
            dropItems: ['potion', 'ether']
        },
        'dragon': {
            id: 'dragon',
            name: 'ドラゴン',
            level: 10,
            hp: 200,
            mp: 50,
            attack: 35,
            defense: 20,
            magic: 25,
            speed: 15,
            exp: 200,
            gold: 100,
            sprite: 'enemy_dragon',
            skills: [],
            dropItems: ['potion', 'ether']
        },
        'demon_lord': {
            id: 'demon_lord',
            name: '魔王',
            level: 15,
            hp: 500,
            mp: 100,
            attack: 50,
            defense: 30,
            magic: 40,
            speed: 20,
            exp: 1000,
            gold: 500,
            sprite: 'boss_demon',
            skills: [],
            dropItems: []
        },
        // 追加の敵 - 初級
        'bat': {
            id: 'bat',
            name: 'コウモリ',
            level: 1,
            hp: 20,
            mp: 0,
            attack: 6,
            defense: 2,
            magic: 0,
            speed: 12,
            exp: 8,
            gold: 3,
            sprite: 'enemy_slime',
            skills: [],
            dropItems: ['potion']
        },
        'wolf': {
            id: 'wolf',
            name: 'オオカミ',
            level: 2,
            hp: 40,
            mp: 0,
            attack: 10,
            defense: 4,
            magic: 0,
            speed: 10,
            exp: 15,
            gold: 8,
            sprite: 'enemy_goblin',
            skills: [],
            dropItems: ['potion']
        },
        'spider': {
            id: 'spider',
            name: '毒グモ',
            level: 3,
            hp: 35,
            mp: 5,
            attack: 11,
            defense: 3,
            magic: 3,
            speed: 9,
            exp: 20,
            gold: 10,
            sprite: 'enemy_slime',
            skills: [],
            dropItems: ['antidote']
        },
        // 中級の敵
        'orc': {
            id: 'orc',
            name: 'オーク',
            level: 5,
            hp: 90,
            mp: 0,
            attack: 20,
            defense: 12,
            magic: 0,
            speed: 6,
            exp: 60,
            gold: 35,
            sprite: 'enemy_goblin',
            skills: [],
            dropItems: ['potion', 'ether']
        },
        'zombie': {
            id: 'zombie',
            name: 'ゾンビ',
            level: 6,
            hp: 100,
            mp: 0,
            attack: 22,
            defense: 8,
            magic: 0,
            speed: 4,
            exp: 70,
            gold: 40,
            sprite: 'enemy_skeleton',
            skills: [],
            dropItems: ['potion']
        },
        'wraith': {
            id: 'wraith',
            name: 'レイス',
            level: 7,
            hp: 85,
            mp: 30,
            attack: 18,
            defense: 10,
            magic: 20,
            speed: 14,
            exp: 80,
            gold: 50,
            sprite: 'enemy_skeleton',
            skills: [],
            dropItems: ['ether']
        },
        'minotaur': {
            id: 'minotaur',
            name: 'ミノタウロス',
            level: 8,
            hp: 150,
            mp: 10,
            attack: 30,
            defense: 18,
            magic: 5,
            speed: 8,
            exp: 100,
            gold: 70,
            sprite: 'enemy_goblin',
            skills: [],
            dropItems: ['potion', 'ether']
        },
        // 上級の敵
        'dark_knight': {
            id: 'dark_knight',
            name: '闇の騎士',
            level: 10,
            hp: 200,
            mp: 40,
            attack: 40,
            defense: 25,
            magic: 15,
            speed: 12,
            exp: 150,
            gold: 100,
            sprite: 'enemy_skeleton',
            skills: [],
            dropItems: ['potion', 'ether']
        },
        'chimera': {
            id: 'chimera',
            name: 'キマイラ',
            level: 11,
            hp: 220,
            mp: 50,
            attack: 38,
            defense: 22,
            magic: 30,
            speed: 13,
            exp: 180,
            gold: 120,
            sprite: 'enemy_dragon',
            skills: [],
            dropItems: ['ether']
        },
        'gargoyle': {
            id: 'gargoyle',
            name: 'ガーゴイル',
            level: 12,
            hp: 180,
            mp: 60,
            attack: 35,
            defense: 30,
            magic: 25,
            speed: 16,
            exp: 200,
            gold: 140,
            sprite: 'enemy_dragon',
            skills: [],
            dropItems: ['potion', 'ether']
        },
        'demon': {
            id: 'demon',
            name: 'デーモン',
            level: 13,
            hp: 280,
            mp: 80,
            attack: 45,
            defense: 28,
            magic: 35,
            speed: 15,
            exp: 250,
            gold: 180,
            sprite: 'boss_demon',
            skills: [],
            dropItems: ['ether']
        },
        // ボスクラス
        'hydra': {
            id: 'hydra',
            name: 'ヒドラ',
            level: 12,
            hp: 350,
            mp: 70,
            attack: 42,
            defense: 25,
            magic: 28,
            speed: 11,
            exp: 300,
            gold: 200,
            sprite: 'enemy_dragon',
            skills: [],
            dropItems: ['potion', 'ether']
        },
        'lich': {
            id: 'lich',
            name: 'リッチ',
            level: 14,
            hp: 320,
            mp: 150,
            attack: 38,
            defense: 22,
            magic: 50,
            speed: 18,
            exp: 400,
            gold: 250,
            sprite: 'enemy_skeleton',
            skills: [],
            dropItems: ['ether']
        },
        'dark_dragon': {
            id: 'dark_dragon',
            name: '闇の竜',
            level: 16,
            hp: 600,
            mp: 120,
            attack: 55,
            defense: 35,
            magic: 45,
            speed: 17,
            exp: 500,
            gold: 300,
            sprite: 'enemy_dragon',
            skills: [],
            dropItems: ['potion', 'ether']
        }
    },

    // ダイアログデータ
    dialogs: {
        'elder_intro': [
            {
                text: '村長「おお、目が覚めたか。君は3日前、村の外れで倒れていたんじゃ」'
            },
            {
                text: '村長「名前も、過去も、何も覚えておらんようじゃな...」'
            },
            {
                text: '村長「まずは村を見て回るといい。[WASD]か[矢印キー]で移動できるぞ」'
            },
            {
                text: '村長「建物に入るには、ドア（建物の下側）の前に立って進むだけじゃ」'
            },
            {
                text: '村長「村の南には闇のダンジョンへの入口がある。強くなったら挑戦してみるといい」'
            },
            {
                text: '村長「NPCの近くで[SPACE]を押すと話しかけられる。どの方向からでもOKじゃ！」'
            },
            {
                text: '村長「困ったときは[M]キーでメニューを開いてステータスを確認するんじゃ」'
            },
            {
                text: '村長「それと、北の商人から買い物ができるぞ。初期資金500Gを渡しておいた」'
            },
            {
                text: '村長「何か思い出すかもしれん。頑張るんじゃ！」',
                event: {
                    type: 'setFlag',
                    flag: 'talkedToElder',
                    value: true
                }
            },
            {
                text: 'システム：チュートリアル完了！村を自由に探索しましょう'
            }
        ],
        'elder_quest': [
            {
                text: '村長「最近、森に魔物が増えておってな...」'
            },
            {
                text: '村長「もし君が記憶を取り戻したいなら、森の奥にある古代遺跡を調べてみるとよい」'
            },
            {
                text: '村長「まずは森でスライムを倒して経験を積むんじゃ。3体倒してみなさい」',
                event: {
                    type: 'acceptQuest',
                    questId: 'first_battle'
                }
            },
            {
                text: 'クエスト「初めての戦闘」を受注しました！[Q]キーで確認できます'
            }
        ],
        'innkeeper': [
            {
                text: '宿屋の主人「いらっしゃい。一晩50ゴールドだよ」'
            },
            {
                text: '宿屋の主人「ゆっくり休んでいきな」',
                event: {
                    type: 'heal'
                }
            },
            {
                text: 'HP・MPが全回復した！'
            }
        ],
        'merchant': [
            {
                text: '商人「いらっしゃい！道具屋だよ」'
            },
            {
                text: '商人「ポーション50G、エーテル80G、毒消し30Gで売ってるよ！」',
                event: {
                    type: 'openShop',
                    shopId: 'village_shop'
                }
            }
        ],
        'mysterious_girl': [
            {
                text: '？？？「...あなた、この村の人じゃないわね」'
            },
            {
                text: '？？？「私も...記憶がないの。でも、何か大切なことを忘れている気がする」'
            },
            {
                text: '？？？「一緒に、真実を探しましょう」'
            }
        ],
        'forest_entrance': [
            {
                text: 'システム: ここから先は魔物が出現します'
            },
            {
                text: 'システム: 準備はいいですか？'
            }
        ],
        'ruins_entrance': [
            {
                text: 'システム: 古代遺跡に到着した'
            },
            {
                text: 'システム: 不思議な力を感じる...'
            }
        ],
        'final_boss': [
            {
                text: '魔王「よくぞここまで来た...だが、ここでお前の旅は終わりだ！」'
            },
            {
                text: '魔王「かかってこい！」',
                event: {
                    type: 'battle',
                    enemyId: 'demon_lord'
                }
            }
        ],
        'ending': [
            {
                text: '魔王を倒した！'
            },
            {
                text: 'あなたの記憶が蘇ってくる...'
            },
            {
                text: 'あなたは、かつてこの世界を守っていた勇者だった'
            },
            {
                text: '魔王に敗れ、記憶を失っていたのだ'
            },
            {
                text: 'しかし今、あなたは再び世界に平和をもたらした'
            },
            {
                text: '〜 THE END 〜',
                event: {
                    type: 'setFlag',
                    flag: 'finalBossDefeated',
                    value: true
                }
            }
        ]
    },

    // マップデータ
    maps: {
        'village': {
            name: '記憶の村',
            width: 40,
            height: 30,
            bgColor: '#2d5016',
            encounterRate: 0,
            encounterEnemies: [],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 30; y++) {
                    const row = [];
                    for (let x = 0; x < 40; x++) {
                        row.push('tile_grass');
                    }
                    map.push(row);
                }
                // メイン道路（横）
                for (let x = 0; x < 40; x++) {
                    map[15][x] = 'tile_stone';
                    map[16][x] = 'tile_stone';
                }
                // メイン道路（縦）
                for (let y = 0; y < 30; y++) {
                    map[y][20] = 'tile_stone';
                    map[y][21] = 'tile_stone';
                }
                // 小道
                for (let x = 8; x < 15; x++) {
                    map[10][x] = 'tile_dirt';
                }
                for (let x = 27; x < 34; x++) {
                    map[10][x] = 'tile_dirt';
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 30; y++) {
                    const row = [];
                    for (let x = 0; x < 40; x++) {
                        if (x === 0 || x === 39 || y === 0 || y === 29) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }

                // 建物の衝突（建物の画像サイズに基づく）
                // 村長の家（左上） - 64x64px = 2x2タイル、ドアはy=7に配置
                collision[3][3] = 1; collision[3][4] = 1;
                collision[4][3] = 1; collision[4][4] = 1;
                collision[5][3] = 1; collision[5][4] = 1;
                collision[6][3] = 1; collision[6][4] = 1;
                // ドアの位置は開ける (y=7, x=3,4)

                // 小さな家（左中） - 64x64px = 2x2タイル、ドアはy=13に配置
                collision[9][3] = 1; collision[9][4] = 1;
                collision[10][3] = 1; collision[10][4] = 1;
                collision[11][3] = 1; collision[11][4] = 1;
                collision[12][3] = 1; collision[12][4] = 1;
                // ドアの位置は開ける (y=13, x=3,4)

                // 宿屋（左下） - 80x72px = 2.5x2.25タイル
                collision[18][2] = 1; collision[18][3] = 1; collision[18][4] = 1;
                collision[19][2] = 1; collision[19][3] = 1; collision[19][4] = 1;
                collision[20][2] = 1; collision[20][3] = 1; collision[20][4] = 1;
                collision[21][2] = 1; collision[21][3] = 1; collision[21][4] = 1;
                // ドアの位置は開ける (y=22, x=3,4)

                // 商店（右上） - 80x72px = 2.5x2.25タイル
                collision[3][35] = 1; collision[3][36] = 1; collision[3][37] = 1;
                collision[4][35] = 1; collision[4][36] = 1; collision[4][37] = 1;
                collision[5][35] = 1; collision[5][36] = 1; collision[5][37] = 1;
                collision[6][35] = 1; collision[6][36] = 1; collision[6][37] = 1;
                // ドアの位置は開ける (y=7, x=36,37)

                // 大きな家（右下） - 96x80px = 3x2.5タイル
                collision[18][34] = 1; collision[18][35] = 1; collision[18][36] = 1;
                collision[19][34] = 1; collision[19][35] = 1; collision[19][36] = 1;
                collision[20][34] = 1; collision[20][35] = 1; collision[20][36] = 1;
                collision[21][34] = 1; collision[21][35] = 1; collision[21][36] = 1;
                collision[22][34] = 1; collision[22][35] = 1; collision[22][36] = 1;

                return collision;
            })(),
            objects: [
                // 村長の家エリア（左上）
                { x: 3, y: 3, sprite: 'obj_house_small' },
                { x: 2.5, y: 6, sprite: 'obj_oak_tree' },
                { x: 6, y: 5, sprite: 'obj_bush' },
                { x: 7, y: 4, sprite: 'obj_flower_red' },
                { x: 7.5, y: 4.5, sprite: 'obj_flower_blue' },

                // 左中の家
                { x: 3, y: 9, sprite: 'obj_house_small' },
                { x: 2, y: 12, sprite: 'obj_pine_tree' },
                { x: 6.5, y: 11, sprite: 'obj_bush' },
                { x: 7, y: 10, sprite: 'obj_flower_yellow' },

                // 宿屋エリア（左下）
                { x: 2, y: 18, sprite: 'obj_inn' },
                { x: 1.5, y: 22, sprite: 'obj_sign' },
                { x: 6, y: 21, sprite: 'obj_bench' },
                { x: 7, y: 20, sprite: 'obj_lamppost' },

                // 商店エリア（右上）
                { x: 35, y: 3, sprite: 'obj_shop' },
                { x: 34, y: 7, sprite: 'obj_barrel' },
                { x: 35.5, y: 7, sprite: 'obj_crate' },
                { x: 37, y: 7, sprite: 'obj_barrel' },
                { x: 32, y: 5, sprite: 'obj_sign' },

                // 大きな家（右下）
                { x: 34, y: 18, sprite: 'obj_house_large' },
                { x: 33, y: 22, sprite: 'obj_small_tree' },
                { x: 37.5, y: 21, sprite: 'obj_bush' },

                // 中央広場エリア
                { x: 18, y: 13, sprite: 'obj_well' },
                { x: 23, y: 12, sprite: 'obj_bench' },
                { x: 23, y: 18, sprite: 'obj_bench' },
                { x: 17, y: 19, sprite: 'obj_lamppost' },
                { x: 24, y: 14, sprite: 'obj_lamppost' },

                // 木々（外周付近）
                { x: 1.5, y: 1, sprite: 'obj_oak_tree' },
                { x: 5, y: 1.5, sprite: 'obj_pine_tree' },
                { x: 10, y: 1, sprite: 'obj_oak_tree' },
                { x: 30, y: 1.5, sprite: 'obj_pine_tree' },
                { x: 35, y: 1, sprite: 'obj_oak_tree' },
                { x: 37.5, y: 2, sprite: 'obj_small_tree' },
                { x: 1, y: 25, sprite: 'obj_pine_tree' },
                { x: 38, y: 26, sprite: 'obj_oak_tree' },

                // 花と茂み（装飾）
                { x: 10, y: 13, sprite: 'obj_flower_red' },
                { x: 11, y: 13, sprite: 'obj_flower_blue' },
                { x: 12, y: 13, sprite: 'obj_flower_yellow' },
                { x: 30, y: 13, sprite: 'obj_flower_red' },
                { x: 31, y: 13, sprite: 'obj_flower_blue' },
                { x: 9, y: 17, sprite: 'obj_bush' },
                { x: 12, y: 18, sprite: 'obj_bush' },
                { x: 28, y: 17, sprite: 'obj_bush' },
                { x: 31, y: 18, sprite: 'obj_bush' },

                // 岩と切り株
                { x: 8, y: 3, sprite: 'obj_rock' },
                { x: 15, y: 2, sprite: 'obj_stump' },
                { x: 25, y: 3, sprite: 'obj_rock' },
                { x: 33, y: 3, sprite: 'obj_small_rock' },
                { x: 10, y: 25, sprite: 'obj_stump' },
                { x: 28, y: 26, sprite: 'obj_rock' },

                // フェンス（装飾的に配置）
                { x: 8, y: 7, sprite: 'obj_fence_h' },
                { x: 9, y: 7, sprite: 'obj_fence_h' },
                { x: 30, y: 10, sprite: 'obj_fence_h' },
                { x: 31, y: 10, sprite: 'obj_fence_h' },

                // 壺やその他小物
                { x: 6, y: 8, sprite: 'obj_pot' },
                { x: 33, y: 11, sprite: 'obj_pot' },

                // 背の高い草（自然な感じ）
                { x: 14, y: 5, sprite: 'obj_tall_grass' },
                { x: 26, y: 8, sprite: 'obj_tall_grass' },
                { x: 15, y: 22, sprite: 'obj_tall_grass' },
                { x: 25, y: 24, sprite: 'obj_tall_grass' },

                // ダンジョン入口の目印
                { x: 19, y: 27, sprite: 'obj_sign' },
                { x: 19, y: 26, sprite: 'obj_lamppost' },
                { x: 22, y: 26, sprite: 'obj_lamppost' }
            ],
            npcs: [
                { x: 5, y: 6, name: '村長', dialogId: 'elder_intro', sprite: 'npc' },
                { x: 5, y: 21, name: '宿屋の主人', dialogId: 'innkeeper', sprite: 'npc' },
                { x: 38, y: 6, name: '商人', dialogId: 'merchant', sprite: 'npc' },
                { x: 20, y: 18, name: '謎の少女', dialogId: 'mysterious_girl', sprite: 'npc' }
            ],
            events: [],
            transitions: [
                // 森への出口
                { x: 20, y: 0, targetMap: 'forest', targetX: 15, targetY: 18 },
                { x: 21, y: 0, targetMap: 'forest', targetX: 15, targetY: 18 },
                // 村長の家の入口（建物の直前に配置）
                { x: 3, y: 6, targetMap: 'elder_house', targetX: 6, targetY: 8 },
                { x: 4, y: 6, targetMap: 'elder_house', targetX: 6, targetY: 8 },
                // 小さな家の入口（建物の直前に配置）
                { x: 3, y: 12, targetMap: 'elder_house', targetX: 6, targetY: 8 },
                { x: 4, y: 12, targetMap: 'elder_house', targetX: 6, targetY: 8 },
                // 宿屋の入口（建物の直前に配置）
                { x: 3, y: 21, targetMap: 'inn_interior', targetX: 7, targetY: 10 },
                { x: 4, y: 21, targetMap: 'inn_interior', targetX: 7, targetY: 10 },
                // 商店の入口（建物の直前に配置）
                { x: 36, y: 6, targetMap: 'shop_interior', targetX: 6, targetY: 8 },
                { x: 37, y: 6, targetMap: 'shop_interior', targetX: 6, targetY: 8 },
                // ダンジョンへの入口
                { x: 20, y: 29, targetMap: 'dungeon', targetX: 15, targetY: 1 }
            ]
        },
        'forest': {
            name: '忘却の森',
            width: 30,
            height: 20,
            bgColor: '#1a3a1a',
            encounterRate: 60, // 60歩に1回程度
            encounterEnemies: ['slime', 'goblin'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        row.push('tile_grass');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        if (x === 0 || x === 29 || y === 0 || y === 19) {
                            row.push(1);
                        } else if (Math.random() < 0.1) {
                            // ランダムに木を配置
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 道を確保
                for (let y = 0; y < 20; y++) {
                    collision[y][15] = 0;
                }
                return collision;
            })(),
            npcs: [],
            events: [],
            transitions: [
                { x: 15, y: 19, targetMap: 'village', targetX: 15, targetY: 1 },
                { x: 15, y: 0, targetMap: 'ruins', targetX: 15, targetY: 18 }
            ]
        },
        'ruins': {
            name: '古代遺跡',
            width: 25,
            height: 20,
            bgColor: '#2a2a2a',
            encounterRate: 40,
            encounterEnemies: ['skeleton', 'dragon'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 25; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 25; x++) {
                        if (x === 0 || x === 24 || y === 0 || y === 19) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                return collision;
            })(),
            npcs: [],
            events: [
                {
                    x: 12,
                    y: 10,
                    type: 'boss',
                    dialogId: 'final_boss',
                    once: true,
                    triggered: false
                }
            ],
            transitions: [
                { x: 15, y: 19, targetMap: 'forest', targetX: 15, targetY: 1 }
            ]
        },
        'elder_house': {
            name: '村長の家',
            width: 12,
            height: 10,
            bgColor: '#3e2723',
            encounterRate: 0,
            encounterEnemies: [],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 10; y++) {
                    const row = [];
                    for (let x = 0; x < 12; x++) {
                        if (y === 0 || y === 9 || x === 0 || x === 11) {
                            row.push('tile_wall');
                        } else {
                            row.push('tile_wood_floor');
                        }
                    }
                    map.push(row);
                }
                // カーペット
                map[5][6] = 'tile_carpet';
                map[5][7] = 'tile_carpet';
                map[6][6] = 'tile_carpet';
                map[6][7] = 'tile_carpet';
                // 出口の目印（カーペット）
                map[8][5] = 'tile_carpet';
                map[8][6] = 'tile_carpet';
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 10; y++) {
                    const row = [];
                    for (let x = 0; x < 12; x++) {
                        if (y === 0 || y === 9 || x === 0 || x === 11) {
                            row.push(1);
                        } else if (y === 9 && (x === 5 || x === 6)) {
                            row.push(0); // 出口
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 家具の衝突
                collision[2][2] = 1; // ベッド
                collision[2][9] = 1; // 本棚
                collision[7][3] = 1; // テーブル
                return collision;
            })(),
            objects: [
                { x: 2, y: 1.5, sprite: 'obj_bed' },
                { x: 9, y: 2, sprite: 'obj_bookshelf' },
                { x: 3, y: 6.5, sprite: 'obj_table' },
                { x: 2.5, y: 7, sprite: 'obj_chair' },
                { x: 4, y: 7, sprite: 'obj_chair' },
                { x: 1, y: 5, sprite: 'obj_pot' },
                { x: 10, y: 7, sprite: 'obj_barrel' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 5, y: 9, targetMap: 'village', targetX: 4, targetY: 6 },
                { x: 6, y: 9, targetMap: 'village', targetX: 4, targetY: 6 }
            ]
        },
        'inn_interior': {
            name: '宿屋',
            width: 14,
            height: 12,
            bgColor: '#4e342e',
            encounterRate: 0,
            encounterEnemies: [],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 12; y++) {
                    const row = [];
                    for (let x = 0; x < 14; x++) {
                        if (y === 0 || y === 11 || x === 0 || x === 13) {
                            row.push('tile_wall');
                        } else {
                            row.push('tile_wood_floor');
                        }
                    }
                    map.push(row);
                }
                // 出口の目印（カーペット）
                map[10][6] = 'tile_carpet';
                map[10][7] = 'tile_carpet';
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 12; y++) {
                    const row = [];
                    for (let x = 0; x < 14; x++) {
                        if (y === 0 || y === 11 || x === 0 || x === 13) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 出口
                collision[11][6] = 0;
                collision[11][7] = 0;
                // 家具の衝突
                collision[2][2] = 1; // ベッド1
                collision[2][6] = 1; // ベッド2
                collision[2][10] = 1; // ベッド3
                collision[8][5] = 1; // テーブル
                return collision;
            })(),
            objects: [
                { x: 2, y: 1.5, sprite: 'obj_bed' },
                { x: 6, y: 1.5, sprite: 'obj_bed' },
                { x: 10, y: 1.5, sprite: 'obj_bed' },
                { x: 5, y: 7.5, sprite: 'obj_table' },
                { x: 4, y: 8, sprite: 'obj_chair' },
                { x: 6.5, y: 8, sprite: 'obj_chair' },
                { x: 11, y: 6, sprite: 'obj_barrel' },
                { x: 1, y: 9, sprite: 'obj_pot' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 6, y: 11, targetMap: 'village', targetX: 3, targetY: 22 },
                { x: 7, y: 11, targetMap: 'village', targetX: 3, targetY: 22 }
            ]
        },
        'shop_interior': {
            name: '商店',
            width: 12,
            height: 10,
            bgColor: '#5d4037',
            encounterRate: 0,
            encounterEnemies: [],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 10; y++) {
                    const row = [];
                    for (let x = 0; x < 12; x++) {
                        if (y === 0 || y === 9 || x === 0 || x === 11) {
                            row.push('tile_wall');
                        } else {
                            row.push('tile_wood_floor');
                        }
                    }
                    map.push(row);
                }
                // 出口の目印（カーペット）
                map[8][5] = 'tile_carpet';
                map[8][6] = 'tile_carpet';
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 10; y++) {
                    const row = [];
                    for (let x = 0; x < 12; x++) {
                        if (y === 0 || y === 9 || x === 0 || x === 11) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 出口
                collision[9][5] = 0;
                collision[9][6] = 0;
                // カウンター
                collision[5][5] = 1;
                collision[5][6] = 1;
                return collision;
            })(),
            objects: [
                { x: 5, y: 4.5, sprite: 'obj_table' },
                { x: 2, y: 2, sprite: 'obj_barrel' },
                { x: 3, y: 2, sprite: 'obj_crate' },
                { x: 4, y: 2, sprite: 'obj_barrel' },
                { x: 8, y: 2, sprite: 'obj_crate' },
                { x: 9, y: 2, sprite: 'obj_barrel' },
                { x: 2, y: 7, sprite: 'obj_pot' },
                { x: 9, y: 7, sprite: 'obj_pot' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 5, y: 9, targetMap: 'village', targetX: 36, targetY: 7 },
                { x: 6, y: 9, targetMap: 'village', targetX: 36, targetY: 7 }
            ]
        },
        'dungeon': {
            name: '闇のダンジョン',
            width: 30,
            height: 25,
            bgColor: '#1a1a1a',
            encounterRate: 30, // 30歩に1回程度エンカウント
            encounterEnemies: ['slime', 'goblin', 'skeleton'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 25; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 25; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        // 外周は壁
                        if (x === 0 || x === 29 || y === 0 || y === 24) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }

                // 迷路のような壁を追加
                // 横の壁
                for (let x = 3; x < 12; x++) collision[5][x] = 1;
                for (let x = 18; x < 27; x++) collision[5][x] = 1;
                for (let x = 3; x < 10; x++) collision[10][x] = 1;
                for (let x = 15; x < 27; x++) collision[10][x] = 1;
                for (let x = 3; x < 20; x++) collision[15][x] = 1;
                for (let x = 10; x < 27; x++) collision[20][x] = 1;

                // 縦の壁
                for (let y = 5; y < 15; y++) collision[y][12] = 1;
                for (let y = 1; y < 10; y++) collision[y][18] = 1;
                for (let y = 15; y < 24; y++) collision[y][20] = 1;
                for (let y = 10; y < 20; y++) collision[y][10] = 1;

                // 入口と出口は開ける
                collision[1][15] = 0; // 入口
                collision[23][15] = 0; // 出口（ボス部屋へ）

                return collision;
            })(),
            objects: [
                // 宝箱を配置
                { x: 5, y: 3, sprite: 'obj_chest' },
                { x: 25, y: 8, sprite: 'obj_chest' },
                { x: 7, y: 18, sprite: 'obj_chest' },
                { x: 22, y: 22, sprite: 'obj_chest' },
                // 装飾
                { x: 8, y: 7, sprite: 'obj_barrel' },
                { x: 20, y: 12, sprite: 'obj_crate' },
                { x: 14, y: 17, sprite: 'obj_pot' }
            ],
            npcs: [],
            events: [
                {
                    x: 5,
                    y: 3,
                    type: 'treasure',
                    dialogId: 'dungeon_chest_1',
                    once: true,
                    triggered: false
                },
                {
                    x: 25,
                    y: 8,
                    type: 'treasure',
                    dialogId: 'dungeon_chest_2',
                    once: true,
                    triggered: false
                },
                {
                    x: 7,
                    y: 18,
                    type: 'treasure',
                    dialogId: 'dungeon_chest_3',
                    once: true,
                    triggered: false
                },
                {
                    x: 22,
                    y: 22,
                    type: 'treasure',
                    dialogId: 'dungeon_chest_4',
                    once: true,
                    triggered: false
                }
            ],
            transitions: [
                { x: 15, y: 0, targetMap: 'village', targetX: 20, targetY: 28 },
                { x: 15, y: 24, targetMap: 'dungeon_b2', targetX: 17, targetY: 1 }
            ]
        },
        'boss_room': {
            name: 'ボスの間',
            width: 25,
            height: 20,
            bgColor: '#0d0d0d',
            encounterRate: 0,
            encounterEnemies: [],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 25; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                // 中央にカーペット
                for (let y = 8; y < 12; y++) {
                    for (let x = 10; x < 15; x++) {
                        map[y][x] = 'tile_carpet';
                    }
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 25; x++) {
                        if (x === 0 || x === 24 || y === 0 || y === 19) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 入口は開ける
                collision[0][12] = 0;
                return collision;
            })(),
            objects: [],
            npcs: [],
            events: [
                {
                    x: 12,
                    y: 15,
                    type: 'bossBattle',
                    dialogId: 'demon_boss',
                    once: true,
                    triggered: false
                }
            ],
            transitions: [
                { x: 12, y: 0, targetMap: 'dungeon', targetX: 15, targetY: 23 }
            ]
        },
        // ダンジョンB2階
        'dungeon_b2': {
            name: '闇のダンジョン B2階',
            width: 35,
            height: 30,
            bgColor: '#121212',
            encounterRate: 25,
            encounterEnemies: ['goblin', 'orc', 'zombie', 'wraith'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 30; y++) {
                    const row = [];
                    for (let x = 0; x < 35; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 30; y++) {
                    const row = [];
                    for (let x = 0; x < 35; x++) {
                        if (x === 0 || x === 34 || y === 0 || y === 29) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 複雑な迷路
                for (let x = 5; x < 15; x++) collision[7][x] = 1;
                for (let x = 20; x < 32; x++) collision[7][x] = 1;
                for (let x = 5; x < 30; x++) collision[15][x] = 1;
                for (let x = 10; x < 25; x++) collision[22][x] = 1;
                for (let y = 7; y < 22; y++) collision[y][15] = 1;
                for (let y = 1; y < 15; y++) collision[y][20] = 1;
                collision[1][17] = 0; // 上階への階段
                collision[28][17] = 0; // 下階への階段
                return collision;
            })(),
            objects: [
                { x: 10, y: 5, sprite: 'obj_chest' },
                { x: 28, y: 10, sprite: 'obj_chest' },
                { x: 8, y: 25, sprite: 'obj_chest' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 17, y: 0, targetMap: 'dungeon', targetX: 15, targetY: 23 },
                { x: 17, y: 29, targetMap: 'dungeon_b3', targetX: 17, targetY: 1 }
            ]
        },
        // ダンジョンB3階
        'dungeon_b3': {
            name: '闇のダンジョン B3階',
            width: 30,
            height: 30,
            bgColor: '#0a0a0a',
            encounterRate: 20,
            encounterEnemies: ['skeleton', 'wraith', 'minotaur', 'dark_knight'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 30; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 30; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        if (x === 0 || x === 29 || y === 0 || y === 29) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 部屋型のダンジョン
                for (let x = 8; x < 22; x++) collision[8][x] = 1;
                for (let x = 8; x < 22; x++) collision[21][x] = 1;
                for (let y = 8; y < 22; y++) collision[y][8] = 1;
                for (let y = 8; y < 22; y++) collision[y][21] = 1;
                collision[8][15] = 0; // 通路
                collision[21][15] = 0;
                collision[15][8] = 0;
                collision[15][21] = 0;
                collision[1][15] = 0; // 上階への階段
                collision[28][15] = 0; // 下階への階段
                return collision;
            })(),
            objects: [
                { x: 15, y: 15, sprite: 'obj_chest' },
                { x: 5, y: 5, sprite: 'obj_chest' },
                { x: 24, y: 24, sprite: 'obj_chest' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 15, y: 0, targetMap: 'dungeon_b2', targetX: 17, targetY: 28 },
                { x: 15, y: 29, targetMap: 'dungeon_b4', targetX: 15, targetY: 1 }
            ]
        },
        // ダンジョンB4階
        'dungeon_b4': {
            name: '闇のダンジョン B4階',
            width: 40,
            height: 35,
            bgColor: '#050505',
            encounterRate: 18,
            encounterEnemies: ['dark_knight', 'chimera', 'gargoyle', 'demon'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 35; y++) {
                    const row = [];
                    for (let x = 0; x < 40; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 35; y++) {
                    const row = [];
                    for (let x = 0; x < 40; x++) {
                        if (x === 0 || x === 39 || y === 0 || y === 34) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 螺旋状の迷路
                for (let x = 3; x < 37; x++) collision[3][x] = 1;
                for (let y = 3; y < 32; y++) collision[y][37] = 1;
                for (let x = 6; x < 37; x++) collision[31][x] = 1;
                for (let y = 6; y < 32; y++) collision[y][6] = 1;
                for (let x = 9; x < 34; x++) collision[9][x] = 1;
                collision[1][20] = 0; // 上階への階段
                collision[33][20] = 0; // 下階への階段
                return collision;
            })(),
            objects: [
                { x: 20, y: 17, sprite: 'obj_chest' },
                { x: 12, y: 12, sprite: 'obj_chest' },
                { x: 28, y: 28, sprite: 'obj_chest' },
                { x: 35, y: 15, sprite: 'obj_chest' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 20, y: 0, targetMap: 'dungeon_b3', targetX: 15, targetY: 28 },
                { x: 20, y: 34, targetMap: 'dungeon_b5', targetX: 12, targetY: 1 }
            ]
        },
        // ダンジョンB5階（最終階）
        'dungeon_b5': {
            name: '闇のダンジョン B5階',
            width: 25,
            height: 25,
            bgColor: '#000000',
            encounterRate: 15,
            encounterEnemies: ['demon', 'gargoyle', 'dark_dragon'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 25; y++) {
                    const row = [];
                    for (let x = 0; x < 25; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                // ボス部屋前のカーペット
                for (let y = 10; y < 15; y++) {
                    for (let x = 10; x < 15; x++) {
                        map[y][x] = 'tile_carpet';
                    }
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 25; y++) {
                    const row = [];
                    for (let x = 0; x < 25; x++) {
                        if (x === 0 || x === 24 || y === 0 || y === 24) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                collision[1][12] = 0; // 上階への階段
                collision[23][12] = 0; // ボス部屋への階段
                return collision;
            })(),
            objects: [
                { x: 12, y: 5, sprite: 'obj_chest' },
                { x: 5, y: 12, sprite: 'obj_chest' },
                { x: 19, y: 12, sprite: 'obj_chest' },
                { x: 12, y: 19, sprite: 'obj_chest' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 12, y: 0, targetMap: 'dungeon_b4', targetX: 20, targetY: 33 },
                { x: 12, y: 24, targetMap: 'boss_room', targetX: 12, targetY: 1 }
            ]
        },
        // 洞窟エリア
        'cave': {
            name: '水晶の洞窟',
            width: 30,
            height: 25,
            bgColor: '#1a1a2e',
            encounterRate: 30,
            encounterEnemies: ['bat', 'spider', 'goblin'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 25; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 25; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        if (x === 0 || x === 29 || y === 0 || y === 24) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 洞窟の岩
                for (let x = 5; x < 12; x++) collision[8][x] = 1;
                for (let x = 18; x < 25; x++) collision[8][x] = 1;
                for (let x = 10; x < 20; x++) collision[16][x] = 1;
                collision[1][15] = 0; // 出口
                return collision;
            })(),
            objects: [
                { x: 8, y: 5, sprite: 'obj_chest' },
                { x: 21, y: 12, sprite: 'obj_chest' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 15, y: 0, targetMap: 'forest', targetX: 5, targetY: 18 }
            ]
        },
        // 古城
        'castle': {
            name: '忘れられた古城',
            width: 40,
            height: 30,
            bgColor: '#2a2a3e',
            encounterRate: 25,
            encounterEnemies: ['skeleton', 'wraith', 'dark_knight', 'demon'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 30; y++) {
                    const row = [];
                    for (let x = 0; x < 40; x++) {
                        if (y < 3 || y > 26 || x < 3 || x > 36) {
                            row.push('tile_wall');
                        } else {
                            row.push('tile_floor');
                        }
                    }
                    map.push(row);
                }
                // カーペット（王座への道）
                for (let y = 10; y < 20; y++) {
                    map[y][20] = 'tile_carpet';
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 30; y++) {
                    const row = [];
                    for (let x = 0; x < 40; x++) {
                        if (y < 3 || y > 26 || x < 3 || x > 36) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 部屋の壁
                for (let x = 10; x < 30; x++) collision[10][x] = 1;
                for (let x = 10; x < 30; x++) collision[20][x] = 1;
                collision[10][20] = 0; // 通路
                collision[20][20] = 0;
                collision[28][20] = 0; // 出口
                return collision;
            })(),
            objects: [
                { x: 20, y: 6, sprite: 'obj_chest' },
                { x: 10, y: 15, sprite: 'obj_chest' },
                { x: 30, y: 15, sprite: 'obj_chest' },
                { x: 20, y: 24, sprite: 'obj_chest' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 20, y: 29, targetMap: 'village', targetX: 20, targetY: 1 }
            ]
        },
        // 魔法の塔
        'tower_f1': {
            name: '魔法の塔 1階',
            width: 20,
            height: 20,
            bgColor: '#1e1e3f',
            encounterRate: 20,
            encounterEnemies: ['wraith', 'gargoyle', 'chimera'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 20; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 20; x++) {
                        if (x === 0 || x === 19 || y === 0 || y === 19) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                // 円形の壁
                for (let x = 6; x < 14; x++) {
                    collision[6][x] = 1;
                    collision[13][x] = 1;
                }
                for (let y = 6; y < 14; y++) {
                    collision[y][6] = 1;
                    collision[y][13] = 1;
                }
                collision[9][6] = 0; // 通路
                collision[18][10] = 0; // 出入口
                collision[1][10] = 0; // 上階への階段
                return collision;
            })(),
            objects: [
                { x: 10, y: 10, sprite: 'obj_chest' }
            ],
            npcs: [],
            events: [],
            transitions: [
                { x: 10, y: 19, targetMap: 'forest', targetX: 25, targetY: 10 },
                { x: 10, y: 0, targetMap: 'tower_f2', targetX: 10, targetY: 18 }
            ]
        },
        'tower_f2': {
            name: '魔法の塔 2階',
            width: 20,
            height: 20,
            bgColor: '#1e1e3f',
            encounterRate: 18,
            encounterEnemies: ['demon', 'dark_knight', 'lich'],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 20; x++) {
                        row.push('tile_floor');
                    }
                    map.push(row);
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 20; x++) {
                        if (x === 0 || x === 19 || y === 0 || y === 19) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                collision[18][10] = 0; // 下階への階段
                collision[1][10] = 0; // 最上階への階段
                return collision;
            })(),
            objects: [
                { x: 10, y: 10, sprite: 'obj_chest' },
                { x: 5, y: 5, sprite: 'obj_chest' },
                { x: 15, y: 15, sprite: 'obj_chest' }
            ],
            npcs: [],
            events: [
                {
                    x: 10,
                    y: 1,
                    type: 'bossBattle',
                    dialogId: 'tower_boss',
                    once: true,
                    triggered: false
                }
            ],
            transitions: [
                { x: 10, y: 19, targetMap: 'tower_f1', targetX: 10, targetY: 1 }
            ]
        }
    },

    // クエストデータ
    quests: {
        'tutorial_explore': {
            id: 'tutorial_explore',
            title: '村を探索しよう',
            description: '村長に話しかけて、村の様子を知ろう',
            requiredAmount: 1,
            rewards: {
                exp: 50,
                gold: 100
            }
        },
        'first_battle': {
            id: 'first_battle',
            title: '初めての戦闘',
            description: '森でスライムを3体倒そう',
            requiredAmount: 3,
            rewards: {
                exp: 100,
                gold: 200,
                items: [{ id: 'potion', amount: 3 }]
            }
        },
        'gather_herbs': {
            id: 'gather_herbs',
            title: '薬草採集',
            description: '薬草を5つ集めよう（デモ版ではスキップ可能）',
            requiredAmount: 5,
            rewards: {
                exp: 150,
                gold: 300,
                items: [{ id: 'potion', amount: 5 }]
            }
        },
        'defeat_dragon': {
            id: 'defeat_dragon',
            title: 'ドラゴン討伐',
            description: '強敵ドラゴンを倒そう',
            requiredAmount: 1,
            rewards: {
                exp: 500,
                gold: 1000,
                items: [{ id: 'iron_sword', amount: 1 }]
            }
        },
        'explore_cave': {
            id: 'explore_cave',
            title: '洞窟探検',
            description: '水晶の洞窟を探索しよう',
            requiredAmount: 1,
            rewards: {
                exp: 200,
                gold: 300,
                items: [{ id: 'hi_potion', amount: 2 }]
            }
        },
        'clear_dungeon_b1': {
            id: 'clear_dungeon_b1',
            title: 'ダンジョンB1階クリア',
            description: 'ダンジョンB1階を攻略しよう',
            requiredAmount: 1,
            rewards: {
                exp: 300,
                gold: 500,
                items: [{ id: 'steel_sword', amount: 1 }]
            }
        },
        'clear_dungeon_b3': {
            id: 'clear_dungeon_b3',
            title: 'ダンジョンB3階到達',
            description: 'ダンジョンB3階に到達しよう',
            requiredAmount: 1,
            rewards: {
                exp: 600,
                gold: 800,
                items: [{ id: 'silver_sword', amount: 1 }]
            }
        },
        'clear_dungeon_b5': {
            id: 'clear_dungeon_b5',
            title: 'ダンジョン最深部到達',
            description: 'ダンジョンB5階に到達しよう',
            requiredAmount: 1,
            rewards: {
                exp: 1000,
                gold: 1500,
                items: [{ id: 'mythril_sword', amount: 1 }]
            }
        },
        'defeat_goblin_squad': {
            id: 'defeat_goblin_squad',
            title: 'ゴブリン討伐',
            description: 'ゴブリンを10体倒そう',
            requiredAmount: 10,
            rewards: {
                exp: 250,
                gold: 400,
                items: [{ id: 'bronze_armor', amount: 1 }]
            }
        },
        'defeat_undead': {
            id: 'defeat_undead',
            title: 'アンデッド退治',
            description: 'ゾンビとスケルトンを合計15体倒そう',
            requiredAmount: 15,
            rewards: {
                exp: 500,
                gold: 700,
                items: [{ id: 'silver_armor', amount: 1 }]
            }
        },
        'explore_castle': {
            id: 'explore_castle',
            title: '古城の探索',
            description: '忘れられた古城を探索しよう',
            requiredAmount: 1,
            rewards: {
                exp: 800,
                gold: 1000,
                items: [{ id: 'dragon_sword', amount: 1 }]
            }
        },
        'climb_tower': {
            id: 'climb_tower',
            title: '魔法の塔',
            description: '魔法の塔の最上階に到達しよう',
            requiredAmount: 1,
            rewards: {
                exp: 1200,
                gold: 2000,
                items: [{ id: 'mythril_armor', amount: 1 }]
            }
        },
        'collect_treasure': {
            id: 'collect_treasure',
            title: '宝箱コレクター',
            description: '宝箱を20個開けよう',
            requiredAmount: 20,
            rewards: {
                exp: 1000,
                gold: 2500,
                items: [{ id: 'elixir', amount: 3 }]
            }
        },
        'defeat_bosses': {
            id: 'defeat_bosses',
            title: 'ボスハンター',
            description: 'ボスを5体倒そう',
            requiredAmount: 5,
            rewards: {
                exp: 2000,
                gold: 5000,
                items: [{ id: 'excalibur', amount: 1 }]
            }
        },
        'reach_level_20': {
            id: 'reach_level_20',
            title: 'レベル20到達',
            description: 'レベル20に到達しよう',
            requiredAmount: 1,
            rewards: {
                exp: 0,
                gold: 10000,
                items: [{ id: 'aegis_shield', amount: 1 }]
            }
        }
    },

    // ショップデータ
    shops: {
        'village_shop': {
            id: 'village_shop',
            name: '村の道具屋',
            items: [
                { id: 'potion', price: 50, amount: 1 },
                { id: 'ether', price: 80, amount: 1 },
                { id: 'antidote', price: 30, amount: 1 }
            ]
        },
        'weapon_shop': {
            id: 'weapon_shop',
            name: '武器屋',
            items: [
                { id: 'iron_sword', price: 500, amount: 1 },
                { id: 'steel_armor', price: 800, amount: 1 }
            ]
        }
    }
};

window.gameData = gameData;
