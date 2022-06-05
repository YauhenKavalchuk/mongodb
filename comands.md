
`mongosh` - запустить MongoDB shell из терминала
`cls` - очистить MongoDB shell
`show dbs` - посмотреть список доступных баз
`help` - посмотреть список доступных команд
`show collections` - посмотреть список доступных коллекций
`use moviebox` - перейти в базу moviebox
`db.movies.drop()` - удалить коллекцию movies
`db.movies.insertOne({ name: "Yauhen" })` - добавить один документ в коллекцию movies
`db.names.insertMany([{name: "Yauhen"}, {name: "Max"}])`  - добавить несколько документов в коллекцию names
`db.movies.find()` - посмотреть все элементы коллекции
`db.movies.find({ director: "Quentin Tarantino" })` - найти фильм по полю director
`db.movies.find({ director: "Quentin Tarantino", rating: 8.9 })` - найти фильм по полям director и rating
`db.movies.find({ director: "Quentin Tarantino" }, { title: 1, director: 1 })` - найти фильмы по полю director и возврнуть данные ТОЛЬКО с полями title и director
`db.movies.find({}, { title: 1, director: 1 })` - найти фильмы ТОЛЬКО с полями title и director
`db.movies.findOne({ _id: ObjectId("1") })` - найти элемент по переданному id
`db.movies.countDocuments()` - посмотреть колличество документов в коллекции
`db.movies.find().limit(5)` - найти ТОЛЬКО 5 первых элементов коллекции
`db.movies.find({}).sort({ rating: -1 })` - сортировать фильмы по убыванию рейтига
`db.movies.find({}).sort({ title: 1 })` - сортировать фильмы по заголовку в алфавитном порядке
`db.movies.find({ rating: { $gt: 9 } })` - найти фильмы с рейтингом больше 9 (не включая 9)
`db.movies.find({ rating: { $gte: 9 } })` - найти фильмы с рейтингом больше 9 (включая 9)
`db.movies.find({ rating: { $lt: 8 } })` - найти фильмы с рейтингом меньше 8 (не включая 8)
`db.movies.find({ rating: { $lte: 8 } })` - найти фильмы с рейтингом меньше 8 (включая 8)
`db.movies.find({ $or: [{ director: "Quentin Tarantino" }, { director: "Guy Ritchie" }] })` - найти фильмы режиссёра Quentin Tarantino ИЛИ Guy Ritchie
`db.movies.find({ $or: [{ director: "Quentin Tarantino" }, { rating: 9.2 }] })` - найти фильмы режиссёра Quentin Tarantino ИЛИ фильмы с рейтингом 9.2
`db.movies.find({ rating: { $in: [7.8,8.2,8.3] } })` - найти фильмы с рейтингом 7.8 ИЛИ 8.2 ИЛИ 8.3
`db.movies.find({ rating: { $nin: [7.8,8.2,8.3] } })` - найти фильмы с рейтинг которых не равен 7.8 ИЛИ 8.2 ИЛИ 8.3
`db.movies.find({ genres: ["drama"] })` - найти фильмы с жанром drama
`db.movies.find({ genres: [ "crime", "drama"] })` - найти фильмы с жанрами "crime" и "drama" (СТРОГИЙ ПОРЯДОК)
`db.movies.find({ genres: { $all: ["drama", "crime"] } })` - найти фильмы с жанрами "crime" и "drama" (НЕ СТРОГИЙ ПОРЯДОК)
`db.movies.find({ "reviews.name": "Jack" })` - найти фильм с полем "reviews" в котором ИМЯ (поле name) ревьювера "Jack"
`db.movies.deleteOne({ _id: ObjectId("1") })` - удалить фильм по переданному id
`db.movies.deleteMany({ director: "Guy Ritchie" })` - удалить все фильмы режиссёра Guy Ritchie
`db.movies.updateOne({ _id: ObjectId('1') }, { $set: { rating: 10, year: 1995 } })` - обновить фильм с переданным id, обновляются поля "rating" И "year"
`db.movies.updateMany({ director: "Quentin Tarantino" }, { $set: { rating: 10 } })` - обновить фильм режиссёра "Quentin Tarantino", обновляется поле "rating"
`db.movies.updateOne({ _id: ObjectId('1') }, { $inc: { year: 2 } })` - обновить фильм с переданным id, обновляется поле "year" - значение будет увеличено на 2
`db.movies.updateOne({ _id: ObjectId('1') }, { $inc: { year: -2 } })` - обновить фильм с переданным id, обновляется поле "year" - значение будет уменьшено на 2
`db.movies.updateOne({ _id: ObjectId('1') }, { $pull: { genres: "drama" } })`  - обновить фильм с переданным id, из массива "genres" будет удалён элемент "drama"
`db.movies.updateOne({ _id: ObjectId('1') }, { $push: { genres: "drama" } })`  - обновить фильм с переданным id, в массива "genres" будет добавлен элемент "drama"
`db.movies.updateOne({ _id: ObjectId('1') }, { $push: { genres: { $each: ["test1", "test2"] } } })`  - обновить фильм с переданным id, в массива "genres" будут добавлены элементы "test1", "test2"
