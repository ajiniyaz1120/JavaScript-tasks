function Matrix(matrix){
    this.matrix = matrix;
    this.row = this.matrix.length;
    this.column = this.matrix[0].length;
}

Object.defineProperties(Matrix.prototype,{
    'addition':{
        value: function (matrix){
            let conRow = this.matrix.length == matrix.length;
            let conCol = this.matrix[0].length == matrix[0].length;

            if(conRow && conCol){
                for (let i in this.matrix) {
                    for (let j in this.matrix[i]){
                        this.matrix[i][j] += matrix[i][j];
                    }
                }
            }
            else throw new Error('Matrix sizes must match');

            return this.matrix;
        },
        enumerable: false
    },

    'multiplicationByNumber': {
        value: function(number){
            for(let i in this.matrix){
                for(let j in this.matrix[i]){
                    this.matrix[i][j] *= number;
                }
            }
            return this.matrix;
        },
        enumerable: false
    },

    'multiplication':{
        value: function(matrix){
            let rowMatrixA = this.matrix.length;
            let colMatrixA = this.matrix[0].length;

            let rowMatrixB = matrix.length;
            let colMatrixB = matrix[0].length;

            let newMatrix = [];

            if (this.matrix.length == matrix[0].length) {
                for(let i = 0; i<rowMatrixA; i++){
                    newMatrix[i] = [];
                }
                for (let i = 0; i < colMatrixB; i++) {
                    for (let j = 0; j < rowMatrixA; j++) {
                        let sum = 0;
                        for (let k = 0; k < rowMatrixB; k++) {
                            sum += this.matrix[j][k] * matrix[k][i]                            
                        }
                        newMatrix[j].push(sum);
                    }                    
                }
            }
            else{
                throw new Error('Matrix multiplication is impssible');
            }
            return newMatrix;
        },
        enumerable: false
    }
});

let matrix = new Matrix([
    [1,2,3],
    [4,5,6]
])

console.log(matrix.multiplicationByNumber(2));

console.log(matrix.addition([
    [1,2,3],
    [4,5,6],
]));

console.log(matrix.multiplication([
    [1,2],
    [4,5],
    [3,2]
]));