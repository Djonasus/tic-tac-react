export default function CheckWinner(BattleArea) {
    const patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Третья строка
        [0, 3, 6], // Первый столбец
        [1, 4, 7], // Второй столбец
        [2, 5, 8], // Третий столбец
        [0, 4, 8], // Главная диагональ
        [2, 4, 6],
    ]

    for (let i = 0; i < patterns.length; i++) {
        const [a, b, c] = patterns[i]
        if (BattleArea[a] && BattleArea[a] === BattleArea[b] && BattleArea[a] === BattleArea[c]) {
            return [BattleArea[a], patterns[i]]
        }
    }
    return [null, null]
}