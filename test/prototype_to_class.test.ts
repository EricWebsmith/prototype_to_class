
// import { expect } from 'chai';
import { expect } from "chai";
import { Classifier } from "../src/prototype_to_class";


const old521 = `
/**
 * @param {number[][]} vec
 */
var Vector2D = function(vec) {
	
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
	
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
	
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
`;

const expect521 = `
class Vector2D {
    /**
     * @param {number[][]} vec
     */
    constructor(vec) {

    }

    /**
     * @return {number}
     */
    next() {

    }

    /**
     * @return {boolean}
     */
    hasNext() {

    }
}
`;

const old348 = `var TicTacToe = function(n) {
    this.n = n
    this.rows = new Array(n).fill(0)
    this.cols = new Array(n).fill(0)
    this.diagonal = 0
    this.antidiagonal = 0
};


TicTacToe.prototype.move = function(row, col, player) {
    let currentPlayer = (player == 1) ? 1 : -1
    this.rows[row] += currentPlayer
    this.cols[col] += currentPlayer
    
    let n = this.n
    if(col == row) this.diagonal += currentPlayer
    if(col + row == n - 1) this.antidiagonal += currentPlayer
    
    if((Math.abs(this.rows[row]) === n) || 
       (Math.abs(this.cols[col]) === n) ||
       (Math.abs(this.diagonal) === n) ||
       (Math.abs(this.antidiagonal) === n))  return player
    else return 0
};
`;

const expect348 = `class TicTacToe {
    constructor(n) {
        this.n = n
        this.rows = new Array(n).fill(0)
        this.cols = new Array(n).fill(0)
        this.diagonal = 0
        this.antidiagonal = 0
    }

    move(row, col, player) {
        let currentPlayer = (player == 1) ? 1 : -1
        this.rows[row] += currentPlayer
        this.cols[col] += currentPlayer

        let n = this.n
        if(col == row) this.diagonal += currentPlayer
        if(col + row == n - 1) this.antidiagonal += currentPlayer

        if((Math.abs(this.rows[row]) === n) || 
           (Math.abs(this.cols[col]) === n) ||
           (Math.abs(this.diagonal) === n) ||
           (Math.abs(this.antidiagonal) === n))  return player
        else return 0
    }
}
`

describe('tests', ()=> {

    it('empty', ()=>{
        const s = '';
        const classifier_ = new Classifier();
        const actual = classifier_.toClass(s);
        expect(actual).to.be.equal('');
    });

    it('Leetcode 251. Flatten 2D Vector, empty', () => {
        const classifier_ = new Classifier();
        const actual = classifier_.toClass(old521).trim();
		expect(actual).to.be.equal(expect521.trim());
	});

    it('Leetcode 348. Design Tic-Tac-Toe, finished', () => {
        const classifier_ = new Classifier();
        const actual = classifier_.toClass(old348).trim();
		expect(actual).to.be.equal(expect348.trim());
	});
});
