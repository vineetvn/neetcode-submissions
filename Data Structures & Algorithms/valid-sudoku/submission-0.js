class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i=0; i< 9; i++) {
            const numMap = new Map();
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') continue;
                if (numMap.has(board[i][j])) {
                    return false
                }else {
                    numMap.set(board[i][j], 1)
                }
            }
        }

        for (let i=0; i < 9; i++) {
            const numMap = new Map();
            for (let j=0; j < 9; j++) {
                if (board[j][i] === '.') continue;
                if(numMap.has(board[j][i])) {
                    return false
                }else {
                    numMap.set(board[j][i], 1)
                }
            }
        }

        for(let i = 0; i < 9; i++) {
            const numMap = new Map();
            for(let j = 0; j < 3; j++) {
                for(let k = 0; k < 3; k++) {
                    let row = Math.floor(i / 3) * 3 + j;
                    let col = (i % 3) * 3 + k;
                    if (board[row][col] === '.') continue;
                    if (numMap.has(board[row][col])) return false;
                    numMap.set(board[row][col], 1);
                }
            }
        }
        return true;
    }
}
