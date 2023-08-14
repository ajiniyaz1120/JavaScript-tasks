// Однажды царь решил вознаградить одного из своих мудрецов за хорошую работу. Он привел его в прямоугольную комнату размром NxM, в каждой клетке которой лежало несколько килограммов золота. Царь разрешил мудрецу сделать обойти несколько клеток (переходя с клетки, где сейчас находится мудрец, в одну из четырех с ней соседних), и собрать все золото, которое попадется на его пути. Вам дан маршрут мудреца. Требуется определить, сколько килограммов золота он собрал.

let roomGold = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

let map = [
    [0,0],
    [0,1],
    [1,1],
    [2,1]
];

let sumGold = 0;

for (let i = 0; i < map.length; i++) {
    sumGold += roomGold[map[i][0]][map[i][1]];
}
console.log(sumGold);