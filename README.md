# Installing

Вы можете использовать eslint локально для каждого проекта.

Обычно лучше всего установить его локально один раз для каждого проекта, таким образом вы можете иметь настройки для конкретного проекта, а также синхронизировать эти настройки с другими, работающими над вашим проектом, через git.

## Local Project Install

1. Если у вас еще нет файла `package.json` создайте его с помощью `npm init`.

2. Затем нам нужно установить все необходимое:

```
npx install-peerdeps --dev @garpix/eslint-config
```

3. Вы можете увидеть в вашем `package.json` большой список `devDependencies`.

4. Создайте файл `.eslintrc` в корне каталога вашего проекта (он должен находиться там, где находится package.json). Ваш файл `.eslintrc` должен выглядеть так:

```json
{
  "extends": [
    "@garpix/eslint-config"
  ]
}
```

Совет: Вы также можете поместить этот объект в свой `package.json` под свойством` "eslintConfig": `.

5. Добавьте скрипты в ваш `package.json`:

```json
"scripts": {
  "lint": "eslint ./src",
  "lint:fix": "eslint ./src --fix"
},
```

6. Теперь вы можете вручную выполнить линтинг кода, запустив `npm run lint`, и исправить все исправимые проблемы с помощью `npm run lint:fix`.

## Настройки для VSCode

Вот инструкциия для VS Code:

1. Установите плагин [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Теперь нам нужно настроить VS Code настройки через `Code/File` → `Preferences` → `Settings`.
```js
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

После первой попытки линтинга файла вам может потребоваться нажать «ESLint» в правом нижнем углу и выбрать «Разрешить везде» в окне предупреждения.

Наконец, вам обычно нужно перезапустить VS code.

## Если у Вас Create React App

1. Запустите `npx install-peerdeps --dev @garpix/eslint-config-garpix`
1. Откройте `package.json` и замените `"extends": "react-app"` на `"extends": "garpix"`

## Если у Вас JetBrains Products (IntelliJ IDEA, WebStorm, RubyMine, PyCharm, PhpStorm, etc)

Если вы ранее настроили ESLint для работы через File Watcher, [выключите его](https://www.jetbrains.com/help/idea/using-file-watchers.html#enableFileWatcher)

1. Откройте конфигурацию ESLint File > Settings (Edit > Preferences на Mac) > Languages & Frameworks > Code Quality Tools > ESLint (при желании просто выполните поиск в настройках для "eslint")
1. Выберите **Automatic ESLint Configuration**
1. Проверите **Run eslint --fix on save**

### Убедитесь, что плагин Prettier отключен, если он установлен.


## Если у Вас Yarn

Он должен работать, но если они не отображаются в вашем `package.json`, попробуйте `npx install-peerdeps --dev @garpix/eslint-config-garpix -Y`

# Changelog

See [CHANGELOG.md](CHANGELOG.md).

# Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

# License

[MIT](LICENSE)
