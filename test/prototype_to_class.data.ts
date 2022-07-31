import { Test } from "mocha";

export class TestCase {
    input: string = '';
    expected: string = '';
}

export const tc251 = new TestCase();
tc251.input=`/**
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
   
};`;

tc251.expected=`class Vector2D {
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
}`;

export const tc348 = new TestCase();
tc348.input = `var TicTacToe = function(n) {
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

tc348.expected = `class TicTacToe {
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

export const tc641 = new TestCase();
tc641.input = `/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
   
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
   
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
   
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
   
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
   
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
   
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
   
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
   
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
   
};`;
tc641.expected = `class MyCircularDeque {
    /**
     * @param {number} k
     */
    constructor(k) {

    }

    /** 
     * @param {number} value
     * @return {boolean}
     */
    insertFront(value) {

    }

    /** 
     * @param {number} value
     * @return {boolean}
     */
    insertLast(value) {

    }

    /**
     * @return {boolean}
     */
    deleteFront() {

    }

    /**
     * @return {boolean}
     */
    deleteLast() {

    }

    /**
     * @return {number}
     */
    getFront() {

    }

    /**
     * @return {number}
     */
    getRear() {

    }

    /**
     * @return {boolean}
     */
    isEmpty() {

    }

    /**
     * @return {boolean}
     */
    isFull() {

    }
}`;
// tc 642 
// https://leetcode.com/problems/design-search-autocomplete-system/discuss/2120043/Javascript-Trie
// 
export const tc642Trie = new TestCase();
tc642Trie.input = `const Trie = function (weight = 0) {
    this.children = new Map();
    this.top = [];
    this.weight = 0;
}

Trie.prototype.insert = function (phrase, weight) {
    let node = this;
    let stack = [];
    
    for (let i = 0; i < phrase.length; i++) {
        const currChar = phrase[i];

        if (!node.children.has(currChar)) {
            node.children.set(currChar, new Trie());
        }
        
        node = node.children.get(currChar);
        stack.push(node);
    }

    node.weight = (node.weight || 0) + weight;
    
    while (stack.length) {
        const parent = stack.pop();

        if (isWeighterThanCurrentTop(parent.top, node.weight, phrase)) {
            parent.top = insertItemInTop(parent.top, phrase, node.weight)
            continue;
        } else {
            break;
        }
    }
}

Trie.prototype.find = function (query) {
    let node = this;

    for (let i = 0; i < query.length; i++) {
        const currChar = query[i];

        if (!node.children.has(currChar)) {
            return []
        }
        
        node = node.children.get(currChar);
    }
    
    return node.top.map((item) => item[1]);
}`;
tc642Trie.expected = `class Trie {
    constructor(weight = 0) {
        this.children = new Map();
        this.top = [];
        this.weight = 0;
    }

    insert(phrase, weight) {
        let node = this;
        let stack = [];

        for (let i = 0; i < phrase.length; i++) {
            const currChar = phrase[i];

            if (!node.children.has(currChar)) {
                node.children.set(currChar, new Trie());
            }

            node = node.children.get(currChar);
            stack.push(node);
        }

        node.weight = (node.weight || 0) + weight;

        while (stack.length) {
            const parent = stack.pop();

            if (isWeighterThanCurrentTop(parent.top, node.weight, phrase)) {
                parent.top = insertItemInTop(parent.top, phrase, node.weight)
                continue;
            } else {
                break;
            }
        }
    }

    find(query) {
        let node = this;

        for (let i = 0; i < query.length; i++) {
            const currChar = query[i];

            if (!node.children.has(currChar)) {
                return []
            }

            node = node.children.get(currChar);
        }

        return node.top.map((item) => item[1]);
    }
}`;

export const tc642Main = new TestCase();
tc642Main.input =`var AutocompleteSystem = function(sentences, times) {
    this.trie = new Trie();
    this.query = '';
    
    for (let i = 0; i < sentences.length; i++) {
        this.trie.insert(sentences[i], times[i])
    }
};

AutocompleteSystem.prototype.input = function(c) {
    if (c === '#') {
        if (this.query) {
            this.trie.insert(this.query, 1);
        }
        
        this.query = '';
        
        return [];
    } else {
        this.query += c;
        return this.trie.find(this.query)
    }
};`;
tc642Main.expected = `class AutocompleteSystem {
    constructor(sentences, times) {
        this.trie = new Trie();
        this.query = '';

        for (let i = 0; i < sentences.length; i++) {
            this.trie.insert(sentences[i], times[i])
        }
    }

    input(c) {
        if (c === '#') {
            if (this.query) {
                this.trie.insert(this.query, 1);
            }

            this.query = '';

            return [];
        } else {
            this.query += c;
            return this.trie.find(this.query)
        }
    }
}`;

export const tc2254empty = new TestCase();
tc2254empty.input = `
var VideoSharingPlatform = function() {
    
};

/** 
 * @param {string} video
 * @return {number}
 */
VideoSharingPlatform.prototype.upload = function(video) {
    
};

/** 
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.remove = function(videoId) {
    
};

/** 
 * @param {number} videoId 
 * @param {number} startMinute 
 * @param {number} endMinute
 * @return {string}
 */
VideoSharingPlatform.prototype.watch = function(videoId, startMinute, endMinute) {
    
};

/** 
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.like = function(videoId) {
    
};

/** 
 * @param {number} videoId
 * @return {void}
 */
VideoSharingPlatform.prototype.dislike = function(videoId) {
    
};

/** 
 * @param {number} videoId
 * @return {number[]}
 */
VideoSharingPlatform.prototype.getLikesAndDislikes = function(videoId) {
    
};

/** 
 * @param {number} videoId
 * @return {number}
 */
VideoSharingPlatform.prototype.getViews = function(videoId) {
    
};
`;
tc2254empty.expected = `
class VideoSharingPlatform {
    constructor() {

    }

    /** 
     * @param {string} video
     * @return {number}
     */
    upload(video) {

    }

    /** 
     * @param {number} videoId
     * @return {void}
     */
    remove(videoId) {

    }

    /** 
     * @param {number} videoId 
     * @param {number} startMinute 
     * @param {number} endMinute
     * @return {string}
     */
    watch(videoId, startMinute, endMinute) {

    }

    /** 
     * @param {number} videoId
     * @return {void}
     */
    like(videoId) {

    }

    /** 
     * @param {number} videoId
     * @return {void}
     */
    dislike(videoId) {

    }

    /** 
     * @param {number} videoId
     * @return {number[]}
     */
    getLikesAndDislikes(videoId) {

    }

    /** 
     * @param {number} videoId
     * @return {number}
     */
    getViews(videoId) {

    }
}
`;


export const tc307func = new TestCase();
tc307func.input = `
/**
 * @param {number[]} nums
 */
function NumArray(nums) {
    
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
};
`

tc307func.expected = `
class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {

    }

    /** 
     * @param {number} index 
     * @param {number} val
     * @return {void}
     */
    update(index, val) {

    }

    /** 
     * @param {number} left 
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {

    }
}
`