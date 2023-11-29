$(document).ready(function () {
    $('#loadInventory').click(function () {
        // Здесь должна быть логика загрузки инвентаря пользователя
        // Можно использовать Steam API или другие методы
        // Примерно так: $.get('/api/loadInventory', function (data) { });
    });

    // Пример отображения скинов (замените на свою логику)
    function displayInventory(skins) {
        $('#inventory').empty();
        skins.forEach(function (skin) {
            $('#inventory').append(`<div class="skin">${skin.name}</div>`);
        });
    }
});


const express = require('express');
const app = express();
const port = 3000;

// Заглушка для загрузки инвентаря
app.get('/api/loadInventory', (req, res) => {
    const inventory = [
        { name: 'AWP | Dragon Lore' },
        { name: 'AK-47 | Fire Serpent' },
        // Добавьте свои скины здесь
    ];

    res.json(inventory);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

document.getElementById('loadInventory').addEventListener('click', function () {
    // Здесь должна быть логика загрузки инвентаря пользователя
    // Например, вы можете использовать Fetch API для запроса данных.
});