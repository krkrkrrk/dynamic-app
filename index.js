// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 動的なルートの設定
app.get('/', (req, res) => {
    res.send('<h1>Hello, this is a dynamic web app!</h1>');
});

// 現在の時間を表示するルート
app.get('/time', (req, res) => {
    const currentTime = new Date();
    res.send(`<h2>Current Time: ${currentTime}</h2>`);
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
