# Trapped Within — подготовка к Steam

1. Положи `trapped_within.html` в `steam/game/`.
2. `cd steam && npm install && npm start` — запуск в окне Electron; `npm run dist` — сборка для Windows/Linux в `dist/`.
3. Для публикации нужен аккаунт Steamworks (разовый взнос за приложение), страница магазина, капсулы/скриншоты/трейлер и загрузка билда через SteamPipe.
4. После публикации вставь ссылку на страницу игры в `STEAM_URL` (в `index.html` и в `trapped_within.html`) — кнопки «Steam» начнут открывать магазин.
