const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 — Не найдено');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 — Ошибка сервера');
});
app.listen(app.get('port'), function () {
    console.log('Express запущен на http://localhost:' +
        app.get('port') + '; нажмите Ctrl+C для завершения.');
});
app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Главная страница');
});
app.get('/about', function (req, res) {
    res.type('text/plain');
    res.send('О главной странице');
});

app.use(function (req, res, next) {
    res.type('text/plain');
    res.status(404);
    res.send('404 — Не найдено');
});
