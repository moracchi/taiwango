const appData = [
    {
        category: "基本の挨拶とコミュニケーション",
        description: "日常的に最もよく使うのは「不好意思（ブハオイース）」です。すみません、失礼します、呼びかけなど、万能に使えます。",
        items: [
            { jp: "こんにちは", zh: "你好", reading: "ニィハオ" },
            { jp: "ありがとう", zh: "謝謝", reading: "シィエシィエ" },
            { jp: "すみません", zh: "不好意思", reading: "ブハオイース" },
            { jp: "おいしかった", zh: "很好吃", reading: "ヘンハオチー" },
            { jp: "さようなら", zh: "再見", reading: "ザイジェン" },
            { jp: "お風呂（トイレ）はどこ？", zh: "洗手間在哪裡？", reading: "シーショウジエン ザイナーリ？" }
        ]
    },
    {
        category: "数字（1〜10・個数）",
        description: "個数を伝える時などに使います。「2」は注文時（2つ）には「兩（リャン）」と言うのが一般的です。",
        items: [
            { jp: "一", zh: "一", reading: "イー" },
            { jp: "二", zh: "二", reading: "アール" },
            { jp: "三", zh: "三", reading: "サン" },
            { jp: "四", zh: "四", reading: "スー" },
            { jp: "五", zh: "五", reading: "ウー" },
            { jp: "六", zh: "六", reading: "リョウ" },
            { jp: "七", zh: "七", reading: "チー" },
            { jp: "八", zh: "八", reading: "バー" },
            { jp: "九", zh: "九", reading: "ジウ" },
            { jp: "十", zh: "十", reading: "シー" },
            { jp: "二つ（注文）", zh: "兩", reading: "リャン" }
        ]
    },
    {
        category: "飲食店での注文・会計",
        description: "入店時に「内用（ネイヨン）」か「外帯（ワイダイ）」かを必ず聞かれます。注文時はメニューを指差しながら「這個（ジェガ）」と言えば通じます。",
        items: [
            { jp: "店内で", zh: "內用", reading: "ネイヨン" },
            { jp: "持ち帰り", zh: "外帶", reading: "ワイダイ" },
            { jp: "これをください", zh: "我要這個", reading: "ウォーヤオ ジェガ" },
            { jp: "いくらですか？", zh: "多少錢？", reading: "ドゥオサオ チェン？" },
            { jp: "お会計お願いします", zh: "買單", reading: "マイダン" },
            { jp: "いりません（結構です）", zh: "不要", reading: "ブーヤオ" }
        ]
    },
    {
        category: "買い物・便利フレーズ",
        description: "レジ袋の確認や、夜市での買い物、困った時に役立つフレーズです。",
        items: [
            { jp: "袋をください", zh: "我要袋子", reading: "ウォーヤオ ダイズ" },
            { jp: "袋はいりません", zh: "不要袋子", reading: "ブーヤオ ダイズ" },
            { jp: "安くできますか？", zh: "算便宜一點", reading: "スワン ピエンイー イーディエン" },
            { jp: "日本語わかりますか？", zh: "會説日文嗎？", reading: "フイシュオ リーウェン マ？" },
            { jp: "レシートいります", zh: "我要發票", reading: "ウォーヤオ ファーピャオ" },
            { jp: "レシートいりません", zh: "不用發票", reading: "ブーヨン ファーピャオ" }
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
        category: "豆花のトッピング",
        description: "豆花（ドウファ）の注文では、1〜4種類のトッピング（配料）を選ぶのが一般的です。以下の表は人気の定番具材です。",
        items: [
            { jp: "タピオカ", zh: "珍珠 / 粉圓", reading: "ジェンジュー / フェンユエン" },
            { jp: "あずき", zh: "紅豆", reading: "ホンドウ" },
            { jp: "緑豆", zh: "録豆", reading: "リュードウ" },
            { jp: "ハトムギ", zh: "薏仁", reading: "イーレン" },
            { jp: "ピーナッツ", zh: "花生", reading: "ファーシェン" },
            { jp: "芋団子", zh: "芋圓", reading: "ユーユエン" },
            { jp: "サツマイモ団子", zh: "地瓜圓", reading: "ディーグァユエン" },
            { jp: "仙草ゼリー", zh: "仙草", reading: "シェンツァオ" }
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
