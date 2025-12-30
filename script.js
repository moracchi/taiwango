const appData = [
    {
        category: "基本の挨拶・返答",
        description: "最も基本的なコミュニケーションです。「不好意思」は呼びかけや謝罪に使える万能フレーズです。",
        items: [
            { jp: "こんにちは", zh: "你好", reading: "ニィハオ" },
            { jp: "ありがとう", zh: "謝謝", reading: "シィエシィエ" },
            { jp: "すみません / すみませんが...", zh: "不好意思", reading: "ブハオイース" },
            { jp: "はい", zh: "是", reading: "シー" },
            { jp: "いいえ", zh: "不是", reading: "ブーシー" },
            { jp: "OK / わかりました", zh: "好的", reading: "ハオダ" },
            { jp: "ダメ / 無理です", zh: "不行", reading: "ブーシン" },
            { jp: "少々お待ちください", zh: "請稍等", reading: "チンシャオデン" },
            { jp: "さようなら", zh: "再見", reading: "ザイジェン" },
            { jp: "お風呂（トイレ）はどこ？", zh: "洗手間在哪裡？", reading: "シーショウジエン ザイナーリ？" },
            { jp: "写真を撮ってもらえますか？", zh: "可以幫我拍張照嗎？", reading: "クーイー バンウォー パイジャンジャオ マ？" }
        ]
    },
    {
        category: "世間話・褒める",
        description: "地元の人との距離が縮まる、褒め言葉や自己紹介のフレーズです。",
        items: [
            { jp: "私は日本人です", zh: "我是日本人", reading: "ウォー シー リーベンレン" },
            { jp: "日本から来ました", zh: "我來自日本", reading: "ウォー ライズー リーベン" },
            { jp: "台湾が大好きです", zh: "我喜歡台灣", reading: "ウォー シーファン タイワン" },
            { jp: "あなたは親切ですね", zh: "你人很好", reading: "ニーレン ヘンハオ" },
            { jp: "これを探していました！", zh: "我正在找這個！", reading: "ウォー ジェンザイ ジャオ ジェガ！" },
            { jp: "可愛いですね", zh: "好可愛", reading: "ハオ クーアイ" },
            { jp: "かっこいいですね", zh: "好帥", reading: "ハオ シュアイ" },
            { jp: "綺麗ですね", zh: "好漂亮", reading: "ハオ ピャオリャン" },
            { jp: "また来ます", zh: "我會再來", reading: "ウォー フイ ザイライ" }
        ]
    },
    {
        category: "交通・移動",
        description: "電車（MRT）やタクシーでの移動時に役立つフレーズです。",
        items: [
            { jp: "MRT駅", zh: "捷運站", reading: "ジエユンジャン" },
            { jp: "バス停", zh: "公車站", reading: "ゴンチャージャン" },
            { jp: "～に行きたいです", zh: "我要去...", reading: "ウォーヤオ チュー..." },
            { jp: "チャージしたいです（悠遊カード）", zh: "我要儲值", reading: "ウォーヤオ チューヂー" },
            { jp: "タクシー", zh: "計程車", reading: "ジーチェンチャー" }
        ]
    },
    {
        category: "ホテル・宿泊",
        description: "チェックイン・アウトや荷物の預かりなど、ホテルで使う表現です。",
        items: [
            { jp: "チェックインお願いします", zh: "我要辦理入住", reading: "ウォーヤオ バンリー ルージュー" },
            { jp: "チェックアウトお願いします", zh: "我要退房", reading: "ウォーヤオ トゥイファン" },
            { jp: "荷物を預かってもらえますか？", zh: "可以寄放行李嗎？", reading: "クーイー ジーファン シンリー マ？" },
            { jp: "WiFiのパスワードは？", zh: "WiFi密碼是多少？", reading: "ワイファイ ミーマ シードゥオサオ？" }
        ]
    },
    {
        category: "飲食店での注文・会計",
        description: "注文から会計まで。香菜（パクチー）が苦手な方は「不要香菜」を覚えておきましょう。",
        items: [
            { jp: "空いてる席はありますか？", zh: "有沒有位子？", reading: "ヨウメイヨウ ウェイズ？" },
            { jp: "3人です", zh: "三位", reading: "サンウェイ" },
            { jp: "どのくらい待ちますか？", zh: "要等多久？", reading: "ヤオ デン ドゥオジウ？" },
            { jp: "子供用の椅子はありますか？", zh: "有兒童椅嗎？", reading: "ヨウ アートンイー マ？" },
            { jp: "おすすめはどれですか？", zh: "有什麼推薦的？", reading: "ヨウシェンマ トゥイジエン ダ？" },
            { jp: "店内で", zh: "內用", reading: "ネイヨン" },
            { jp: "持ち帰り", zh: "外帶", reading: "ワイダイ" },
            { jp: "これをください", zh: "我要這個", reading: "ウォーヤオ ジェガ" },
            { jp: "メニューをください", zh: "請給我菜單", reading: "チンゲイウォー ツァイダン" },
            { jp: "お水をください", zh: "請給我水", reading: "チンゲイウォー シュイ" },
            { jp: "パクチー抜きで", zh: "不要香菜", reading: "ブーヤオ シャンツァイ" },
            { jp: "いくらですか？", zh: "多少錢？", reading: "ドゥオサオ チェン？" },
            { jp: "お会計お願いします", zh: "買單", reading: "マイダン" },
            { jp: "おいしかった", zh: "很好吃", reading: "ヘンハオチー" }
        ]
    },
    {
        category: "コンビニ・スーパー",
        description: "コンビニ（便利商店）やスーパー（超市）で役立つフレーズ。温めやお箸の依頼など。",
        items: [
            { jp: "全聯（スーパー）", zh: "全聯福利中心", reading: "チュエンリエン" },
            { jp: "カルフール（スーパー）", zh: "家樂福", reading: "ジャーラーフー" },
            { jp: "RTマート（スーパー）", zh: "大潤發", reading: "ダールンファー" },
            { jp: "セブンイレブン", zh: "7-Eleven", reading: "セブン" },
            { jp: "ファミリーマート", zh: "全家便利商店", reading: "チュエンジア" },
            { jp: "温めてください", zh: "幫我微波", reading: "バンウォー ウェイボー" },
            { jp: "お箸をください", zh: "我要筷子", reading: "ウォーヤオ クアイズ" },
            { jp: "スプーンをください", zh: "我要湯匙", reading: "ウォーヤオ タンチー" },
            { jp: "フォークをください", zh: "我要叉子", reading: "ウォーヤオ チャーズ" },
            { jp: "ストローをください", zh: "我要吸管", reading: "ウォーヤオ シーグアン" },
            { jp: "袋をください", zh: "我要袋子", reading: "ウォーヤオ ダイズ" },
            { jp: "チャージしたいです（悠遊カード）", zh: "我要儲值", reading: "ウォーヤオ チューヂー" },
            { jp: "トイレ借りれますか？", zh: "可以借廁所嗎？", reading: "クーイー ジエ ツァスオ マ？" }
        ]
    },
    {
        category: "味や温度のこだわり",
        description: "台湾の飲食店やドリンクスタンドでは、辛さや甘さを細かく調整できます。不要（ブーヤオ）の後に続けたい言葉を添えるのが基本です。",
        items: [
            { jp: "冷たいの", zh: "冰的", reading: "ビンダ" },
            { jp: "温かいの", zh: "熱的", reading: "ルーダ" },
            { jp: "辛いの（追加）", zh: "加辣", reading: "ジャーラー" },
            { jp: "辛くないの（抜き）", zh: "不辣 / 不要辣", reading: "ブーラー / ブーヤオラー" },
            { jp: "甘いの（通常）", zh: "全糖", reading: "チュエンタン" },
            { jp: "甘くないの（無糖）", zh: "無糖", reading: "ウータン" }
        ]
    },
    {
        category: "買い物・夜市",
        description: "夜市やお店での買い物に。袋の有無や値切り交渉など。",
        items: [
            { jp: "士林夜市（シーリン）", zh: "士林夜市", reading: "シーリン イエシー" },
            { jp: "饒河街夜市（ラオハー）", zh: "饒河街觀光夜市", reading: "ラオハージエ イエシー" },
            { jp: "寧夏夜市（ニンシャー）", zh: "寧夏夜市", reading: "ニンシャー イエシー" },
            { jp: "袋をください", zh: "我要袋子", reading: "ウォーヤオ ダイズ" },
            { jp: "袋はいりません", zh: "不要袋子", reading: "ブーヤオ ダイズ" },
            { jp: "見てるだけです", zh: "我只是看看", reading: "ウォージーシー カンカン" },
            { jp: "安くできますか？", zh: "算便宜一點", reading: "スワン ピエンイー イーディエン" },
            { jp: "日本語わかりますか？", zh: "會説日文嗎？", reading: "フイシュオ リーウェン マ？" },
            { jp: "レシートいります", zh: "我要發票", reading: "ウォーヤオ ファーピャオ" },
            { jp: "レシートいりません", zh: "不用發票", reading: "ブーヨン ファーピャオ" }
        ]
    },
    {
        category: "豆花（トウファ）の注文",
        description: "トッピング（配料）だけでなく、スープの種類（シロップ・豆乳）や温度も指定しましょう。",
        items: [
            { jp: "トッピングはいくつ選べますか？", zh: "可以選幾樣配料？", reading: "クーイー シュエン ジーヤン ペイリャオ？" },
            { jp: "シロップ（糖水）にしてください", zh: "我要糖水", reading: "ウォーヤオ タンシュイ" },
            { jp: "豆乳（豆漿）にしてください", zh: "我要豆漿", reading: "ウォーヤオ ドウジャン" },
            { jp: "生姜スープ（冬限定）", zh: "我要薑汁", reading: "ウォーヤオ ジャンジー" },
            { jp: "全部入り（総合）", zh: "綜合", reading: "ゾンハー" },
            { jp: "タピオカ", zh: "珍珠 / 粉圓", reading: "ジェンジュー / フェンユエン" },
            { jp: "あずき", zh: "紅豆", reading: "ホンドウ" },
            { jp: "緑豆", zh: "録豆", reading: "リュードウ" },
            { jp: "ハトムギ", zh: "薏仁", reading: "イーレン" },
            { jp: "ピーナッツ", zh: "花生", reading: "ファーシェン" },
            { jp: "芋団子", zh: "芋圓", reading: "ユーユエン" },
            { jp: "サツマイモ団子", zh: "地瓜圓", reading: "ディーグァユエン" },
            { jp: "仙草ゼリー", zh: "仙草", reading: "シェンツァオ" }
        ]
    },
    {
        category: "トラブル・緊急",
        description: "もしもの時のために。指差して見せるだけでも役立ちます。",
        items: [
            { jp: "助けて", zh: "救命", reading: "ジウミン" },
            { jp: "迷子になりました", zh: "我迷路了", reading: "ウォー ミールーラ" },
            { jp: "病院", zh: "醫院", reading: "イーユエン" },
            { jp: "警察を呼んで", zh: "幫我叫警察", reading: "バンウォー ジャオ ジンチャ" }
        ]
    }
];

const speakerIcon = `
<svg class="icon-speaker" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-4 0h-2.5l-5 5h-2.5v7.54h2.5l5 5h2.5v-17.54z"/>
</svg>
`;

// Text to Speech Function
function speak(text) {
    if (!window.speechSynthesis) {
        alert("お使いのブラウザは音声再生に対応していません。");
        return;
    }

    // Cancel any previous utterance
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW'; // Traditional Chinese (Taiwan)
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1.0;

    // Optional: Select a better voice if available
    const voices = window.speechSynthesis.getVoices();
    const twVoice = voices.find(v => v.lang === 'zh-TW') || voices.find(v => v.lang.startsWith('zh'));
    if (twVoice) {
        utterance.voice = twVoice;
    }

    console.log(`Playing: ${text}`, twVoice ? `Voice: ${twVoice.name}` : 'Default Voice');
    window.speechSynthesis.speak(utterance);
}

// Render App
function renderApp() {
    const app = document.getElementById('app');

    appData.forEach(section => {
        const sectionEl = document.createElement('section');
        sectionEl.className = 'category-section';

        // Header
        const headerEl = document.createElement('div');
        headerEl.className = 'category-header';

        const titleEl = document.createElement('h2');
        titleEl.className = 'category-title';
        titleEl.textContent = section.category;

        const descEl = document.createElement('p');
        descEl.className = 'category-description';
        descEl.textContent = section.description;

        headerEl.appendChild(titleEl);
        headerEl.appendChild(descEl);
        sectionEl.appendChild(headerEl);

        // List
        const listEl = document.createElement('ul');
        listEl.className = 'phrase-list';

        section.items.forEach(item => {
            const itemEl = document.createElement('li');
            itemEl.className = 'phrase-item';

            const btnEl = document.createElement('button');
            btnEl.className = 'phrase-button';
            btnEl.onclick = () => speak(item.zh.split('/')[0].trim()); // Speak the first variation if multiple

            // Text Content
            const contentEl = document.createElement('div');
            contentEl.className = 'phrase-content';

            const jpEl = document.createElement('div');
            jpEl.className = 'phrase-jp';
            jpEl.textContent = item.jp;

            const zhEl = document.createElement('div');
            zhEl.className = 'phrase-zh';
            zhEl.textContent = item.zh;

            const readingEl = document.createElement('div');
            readingEl.className = 'phrase-reading';
            readingEl.textContent = item.reading;

            contentEl.appendChild(jpEl);
            contentEl.appendChild(zhEl);
            contentEl.appendChild(readingEl);

            // Action Icon
            const actionEl = document.createElement('div');
            actionEl.className = 'phrase-action';
            actionEl.innerHTML = speakerIcon;

            btnEl.appendChild(contentEl);
            btnEl.appendChild(actionEl);
            itemEl.appendChild(btnEl);
            listEl.appendChild(itemEl);
        });

        sectionEl.appendChild(listEl);
        app.appendChild(sectionEl);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderApp();

    // Pre-load voices (sometimes needed for Chrome)
    if (window.speechSynthesis) {
        window.speechSynthesis.getVoices();
    }
});
