// Создать класс "Матрица". Класс должен иметь следующие поля:
// 1) двумерный массив вещественных чисел;
// 2) количество строк и столбцов в матрице.

// Класс должен иметь следующие методы:
// 1) сложение с другой матрицей;
// 2) умножение на число;
// 3) вывод на печать;
// 4) умножение матриц - по желанию.

class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.arr = [];
    this.matx = [];
  }

  Arr() {
    for (let i = 0; i < this.rows; i++) {
      this.arr[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.arr[i][j] = Math.floor(Math.random() * 8);
      }
    }
    return this.arr;
  }

  addition(matrix2) {
    for (let i = 0; i < matrix2.length; i++) {
      for (let j = 0; j < matrix2.length; j++) {
        this.arr[i][j] += matrix2[i][j];
      }
    }
    return this.arr;
  }

  multiplication(num){
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < this.arr.length; j++) {
        this.arr[i][j] *= num        
      }      
    }
      return this.arr
  }

  print(){
    for (let i in this.arr) {
      console.log();(this.arr[i].join("\t"));
    }
  }
}
let matrixS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrix = new Matrix(3, 3);
// console.log(`stroka : ${matrix.rows}`);
// console.log(`stolbca : ${matrix.cols}`);
console.log(matrix.Arr());
console.log(matrix.addition(matrixS));
console.log(matrix.multiplication(5));

matrix.print();
