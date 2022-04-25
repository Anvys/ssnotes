branch gh-pages for github pages: https://anvys.github.io/ssnotes/

release : https://github.com/Anvys/ssnotes/releases/

main source: https://github.com/Anvys/ssnotes/tree/main

- Сохранение в файл в формате json.
- Загрузка сохраненного файла не проверяет поврежден ли файл. Загружайте только ранее сохраненные файлы.
- Минимальный адаптив для мобильных устройств.
- Первый запуск загружает дефолтные записки, далее все загружается и сохраняется в localstorage(Если надо сбросить все, то необходимо удалить cookie)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\

Запустить index.html. (В файле package.json параметр "homepage" должен иметь значение ".",)