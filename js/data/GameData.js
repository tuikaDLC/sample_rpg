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
                // 建物の衝突（2x2タイル）
                // 村長の家（左上）
                for (let y = 5; y < 7; y++) for (let x = 3; x < 5; x++) collision[y][x] = 1;
                // 小さな家（左中）
                for (let y = 11; y < 13; y++) for (let x = 3; x < 5; x++) collision[y][x] = 1;
                // 宿屋（左下）
                for (let y = 20; y < 23; y++) for (let x = 2; x < 5; x++) collision[y][x] = 1;
                // 商店（右上）
                for (let y = 5; y < 8; y++) for (let x = 35; x < 38; x++) collision[y][x] = 1;
                // 大きな家（右下）
                for (let y = 20; y < 23; y++) for (let x = 34; x < 37; x++) collision[y][x] = 1;

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
                { x: 25, y: 24, sprite: 'obj_tall_grass' }
            ],
            npcs: [
                { x: 4, y: 6, name: '村長', dialogId: 'elder_intro', sprite: 'npc' },
                { x: 3, y: 21, name: '宿屋の主人', dialogId: 'innkeeper', sprite: 'npc' },
                { x: 36, y: 6, name: '商人', dialogId: 'merchant', sprite: 'npc' },
                { x: 20, y: 18, name: '謎の少女', dialogId: 'mysterious_girl', sprite: 'npc' }
            ],
            events: [],
            transitions: [
                // 森への出口
                { x: 20, y: 0, targetMap: 'forest', targetX: 15, targetY: 18 },
                { x: 21, y: 0, targetMap: 'forest', targetX: 15, targetY: 18 },
                // 村長の家の入口
                { x: 4, y: 6, targetMap: 'elder_house', targetX: 6, targetY: 8 },
                // 宿屋の入口
                { x: 3, y: 22, targetMap: 'inn_interior', targetX: 7, targetY: 10 },
                // 商店の入口
                { x: 36, y: 7, targetMap: 'shop_interior', targetX: 6, targetY: 8 }
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
