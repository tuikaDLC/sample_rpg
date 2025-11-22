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
                text: '村長「とりあえず、体が動くようになったら村を見て回るとよい」'
            },
            {
                text: '村長「何か思い出すかもしれん」',
                event: {
                    type: 'setFlag',
                    flag: 'talkedToElder',
                    value: true
                }
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
                text: '村長「そこには不思議な力があると伝えられておる」'
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
                text: '商人「何か買っていくかい？」'
            },
            {
                text: '商人「ポーション50G、エーテル80Gだよ」',
                event: {
                    type: 'giveItem',
                    item: 'potion',
                    quantity: 3
                }
            },
            {
                text: 'ポーションを3個もらった！（デモ版のため無料）'
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
            width: 30,
            height: 20,
            bgColor: '#2d5016',
            encounterRate: 0, // 村ではエンカウントなし
            encounterEnemies: [],
            tiles: (() => {
                const map = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        row.push('tile_grass');
                    }
                    map.push(row);
                }
                // 道を追加
                for (let x = 0; x < 30; x++) {
                    map[10][x] = 'tile_stone';
                }
                for (let y = 0; y < 20; y++) {
                    map[y][15] = 'tile_stone';
                }
                return map;
            })(),
            collision: (() => {
                const collision = [];
                for (let y = 0; y < 20; y++) {
                    const row = [];
                    for (let x = 0; x < 30; x++) {
                        // 外周は壁
                        if (x === 0 || x === 29 || y === 0 || y === 19) {
                            row.push(1);
                        } else {
                            row.push(0);
                        }
                    }
                    collision.push(row);
                }
                return collision;
            })(),
            npcs: [
                { x: 15, y: 5, name: '村長', dialogId: 'elder_intro', sprite: 'npc' },
                { x: 10, y: 10, name: '宿屋の主人', dialogId: 'innkeeper', sprite: 'npc' },
                { x: 20, y: 10, name: '商人', dialogId: 'merchant', sprite: 'npc' },
                { x: 15, y: 15, name: '謎の少女', dialogId: 'mysterious_girl', sprite: 'npc' }
            ],
            events: [],
            transitions: [
                { x: 15, y: 0, targetMap: 'forest', targetX: 15, targetY: 18 }
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
        }
    }
};

window.gameData = gameData;
