# Таймер для веб-сайтов, которые крадут Ваше время

Этот проект помогает контролировать время, потраченное на сайтах. Он требует установки специального расширения для Chrome.

# Установки

Установите расширение для Chrome [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija).

Откройте настройки расширения [cjs](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) на сайте, который вы хотите контролировать. Кликните на ссылку "your own external scripts", и добавьте эту ссылку `https://cdn.rawgit.com/denis5417/34_timemachine/c217fd6d/index.js` Не забудьте поставить галочку "enable cjs for this host" чтобы включить кастомный JS.

На сайте появится таймер на 15 минут, по истечению которого каждые 30 секунд будет высвечиваться сообщение о том, что этот сайт пора закрыть.

Для более быстрой разработки используйсте JS, который хостится на localhost. Для этого подойдет обычный веб-сервер:

```bash

python3 -m http.server
```

Добавьте ссылку `http://localhost:8000/index.js` в расширение [cjs](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija). Готово.


# Project Goals

Этот код написан в образовательных целях. Тренировачный курс для веб-девелоперов - [DEVMAN.org](https://devman.org)
