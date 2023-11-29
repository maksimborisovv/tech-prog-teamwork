# tech-prog-teamwork

## Запуск контейнера

Для более легкого запуска контейнеров добавлен [Docker compose](https://docs.docker.com/compose/install/) и [Makefile](https://ru.wikipedia.org/wiki/Makefile)

Для выполнения команд [make](https://guides.hexlet.io/ru/makefile-as-task-runner/) нужна \*nix подобная система (linux, macos, bsd, etc) или же [WSL](https://learn.microsoft.com/ru-ru/windows/wsl/install), если у вас Windows

### Команды для запуска

1.  Запуск контейнера:
    ```sh
    make dev-up
    ```
2.  Остановка контейнера и удаление ресурсов контейнера
    ```sh
    make dev-down
    ```
