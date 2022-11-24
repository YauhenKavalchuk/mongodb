## Команды рассмотренные в курсе:

### Работа с MongoDB:

`mongod` - запустить базу данных (`mongod --config /usr/local/etc/mongod.conf` для Mac OS)

`mongosh` - запустить MongoDB shell из терминала

`help` - посмотреть список доступных команд

`cls` - очистить MongoDB shell

`version()` - посмотреть версию MongoDB

---

### Работа с БД:

`show dbs` - посмотреть список доступных баз

`show users` - посмотреть список доступных пользователей

`show collections` - посмотреть список доступных коллекций (в виде перечисления)

`use moviebox` - перейти в базу данных "moviebox"

`db.hostInfo()` - посмотреть информацию о сервере

`db.dropDatabase()` - удалить базу данных

---

### Работа с коллекцией:

`db.getCollectionNames()` - посмотреть список доступных коллекций (в виде массива)

`db.movies.countDocuments()` - посмотреть колличество документов в коллекции

`db.getCollectionInfos()` - посмотреть всю информацию о коллекции

`db.createCollection("movies")` - создать коллекцию "movies"

`db.movies.renameCollection("movies2")` - переименовать коллекцию "movies" в "movies2"

`db.movies.validate()` - проверить коллекцию на правильность

`db.movies.totalSize()` - посмотреть вес коллекции в файловой системе (включая размер индексов)

`db.movies.storageSize()` - посмотреть вес коллекции в файловой системе (НЕ включая размер индексов)

`db.movies.stats()` - посмотреть полную статистику коллекции

`db.movies.drop()` - удалить коллекцию "movies"

`db.movies.distinct("year")` - посмотреть все уникальные данные поля "year"

---

### Поиск:

`db.movies.find()` - найти все фильмы коллекции

`db.movies.find().pretty()` - найти все фильмы коллекции и вывести в удобном для чтения формате

`db.movies.find({ rating: null })` - найти все фильмы в которых отсутствует поле "rating"

`db.movies.find({ director: "Quentin Tarantino" })` - найти фильм по полю "director"

`db.movies.find({ director: "Quentin Tarantino", rating: 8.9 })` - найти фильм по полям "director" и "rating"

`db.movies.findOne({ _id: ObjectId("1") })` - найти фильмы по переданному "id"

`db.movies.find({ rating: { $gt: 9 } })` - найти фильмы с рейтингом больше 9 (не включая 9)

`db.movies.find({ rating: { $gte: 9 } })` - найти фильмы с рейтингом больше 9 (включая 9)

`db.movies.find({ rating: { $lt: 8 } })` - найти фильмы с рейтингом меньше 8 (не включая 8)

`db.movies.find({ rating: { $lte: 8 } })` - найти фильмы с рейтингом меньше 8 (включая 8)

`db.movies.find({ $or: [{ director: "Quentin Tarantino" }, { director: "Guy Ritchie" }] })` - найти фильмы режиссёра "Quentin Tarantino" ИЛИ "Guy Ritchie"

`db.movies.find({ $or: [{ director: "Quentin Tarantino" }, { rating: 9.2 }] })` - найти фильмы режиссёра "Quentin Tarantino" ИЛИ фильмы с рейтингом (поле "rating") 9.2

`db.movies.find({ $and: [{ director: 'Quentin Tarantino' }, { rating: 8.3 }] })` - найти фильмы режиссёра "Quentin Tarantino" с рейтингом (поле "rating") 8.3

`db.movies.find({ rating: { $in: [7.8,8.2,8.3] } })` - найти фильмы с рейтингом 7.8 ИЛИ 8.2 ИЛИ 8.3

`db.movies.find({ rating: { $nin: [7.8,8.2,8.3] } })` - найти фильмы рейтинг которых НЕ РАВЕН 7.8 ИЛИ 8.2 ИЛИ 8.3

`db.movies.find({ genres: ["drama"] })` - найти фильмы с жанром "drama"

`db.movies.find({ genres: [ "crime", "drama"] })` - найти фильмы с жанрами "crime" и "drama" (СТРОГИЙ ПОРЯДОК)

`db.movies.find({ genres: { $all: ["drama", "crime"] } })` - найти фильмы с жанрами "crime" и "drama" (НЕ СТРОГИЙ ПОРЯДОК)

`db.movies.find({ "reviews.name": "Jack" })` - найти фильм с полем "reviews" в котором ИМЯ ревьювера (поле "name") - "Jack"

---

### Добавление:

`db.movies.insertOne({ name: "Yauhen" })` - добавить один документ в коллекцию "movies"

`db.names.insertMany([{name: "Yauhen"}, {name: "Max"}])` - добавить несколько документов в коллекцию "names"

`db.movies.replaceOne({ id: ObjectId("629249ce4dc394dae55c7489") }, { title: "Alien" })` - полностью заменить найденный по "id" фильм на новый с полем "title" равным "Alien"

---

### Сортировка:

`db.movies.find().sort({ rating: -1 })` - сортировать фильмы по убыванию рейтига

`db.movies.find().sort({ title: 1 })` - сортировать фильмы по заголовку в алфавитном порядке

---

### Ограничение:

`db.movies.find({ director: "Quentin Tarantino" }).skip(1)` - найти фильм по полю "director" и пропустить первый найденный фильм

`db.movies.find().limit(5)` - найти найти все фильмы, но вернуть ТОЛЬКО 5 первых фильмов коллекции

---

### Удаление:

`db.movies.deleteOne({ _id: ObjectId("1") })` - удалить фильм по переданному "id"

`db.movies.deleteMany({ director: "Guy Ritchie" })` - удалить все фильмы режиссёра "Guy Ritchie"

---

### Обновление:

`db.movies.updateOne({ _id: ObjectId('1') }, { $set: { rating: 10, year: 1995 } })` - обновить фильм с переданным id, обновляются поля "rating" И "year"

`db.movies.updateMany({ director: "Quentin Tarantino" }, { $set: { rating: 10 } })` - обновить фильм режиссёра "Quentin Tarantino", обновляется поле "rating"

`db.movies.updateOne({ _id: ObjectId('1') }, { $inc: { year: 2 } })` - обновить фильм с переданным id, обновляется поле "year" - значение будет увеличено на 2

`db.movies.updateOne({ _id: ObjectId('1') }, { $inc: { year: -2 } })` - обновить фильм с переданным id, обновляется поле "year" - значение будет уменьшено на 2

`db.movies.updateOne({ _id: ObjectId('1') }, { $pull: { genres: "drama" } })` - обновить фильм с переданным id, из массива "genres" будет удалён элемент "drama"

`db.movies.updateOne({ _id: ObjectId('1') }, { $push: { genres: "drama" } })` - обновить фильм с переданным id, в массива "genres" будет добавлен элемент "drama"

`db.movies.updateOne({ _id: ObjectId('1') }, { $push: { genres: { $each: ["test1", "test2"] } } })` - обновить фильм с переданным id, в массива "genres" будут добавлены элементы "test1", "test2"

---

### Возврат проекции:

`db.movies.find({ director: "Quentin Tarantino" }, { title: 1, director: 1 })` - найти фильмы по полю "director" и вернуть данные ТОЛЬКО с полями "title" и "director"

`db.movies.find({}, { title: 1, director: 1 })` - найти все фильмы и вернуть ТОЛЬКО с полями "title" и "director"

`db.movies.find({}, { genres: { $slice : 1 } })` - найти все фильмы и вернуть только одно ПЕРВОЕ значение в массиве жанров (поле "genres")

`db.movies.find({}, { genres: { $slice : -1 } })` - найти все фильмы и вернуть только одно ПОСЛЕДНЕЕ значение в массиве жанров (поле "genres")

---
