## Безпека (практична 15)

XSS через innerHTML | Користувацькі дані скрізь через textContent; 4 використання innerHTML лише з ""
Демонстрація XSS | Рядок <img onerror> у полі «Тема» при innerHTML виконував alert | Виправлено на textContent, рядок відображається як текст
localStorage/IndexedDB | Чутливих даних немає; конспекти зберігаються без терміну
Секрети в коді | Не знайдено | .gitignore для node_modules
HTTPS | Локально HTTP | Розгортання на хостингу з HTTPS, PORT з process.env
