console.log(typeof(9))
// Предположение: int
// Фактический: number

console.log(typeof(1.2))
// Предположение: double
// Фактический: number

console.log(typeof(NaN))
// Предположение: Ничего
// Фактический: number

console.log(typeof("Hello World"))
// Предположение: string
// Фактический: string

console.log(typeof(true))
// Предположение: bool
// Фактический: boolean

console.log(typeof(2 != 1))
// Предположение: bool
// Фактический: boolean


console.log("сыр" + "ы")
// Предположение: сыры
// Фактический: сыры

console.log("сыр" - "ы")
// Предположение: думал что он представит char потом в int и вычтит "ы" число.
// Фактический: NaN

console.log("2" + "4")
// Предположение: 24
// Фактический: 24

console.log("2" - "4")
// Предположение: NaN
// Фактический: -2

console.log("Сэм" + 5)
// Предположение: Сэм5
// Фактический: Сэм5

console.log("Сэм" - 5)
// Предположение: NaN
// Фактический: NaN

console.log(99 * "шары")
// Предположение: NaN или 99 раз "шары"
// Фактический: NaN