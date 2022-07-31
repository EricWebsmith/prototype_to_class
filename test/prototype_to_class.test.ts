
// import { expect } from 'chai';
import { expect } from "chai";
import { Classifier } from "../src/prototype_to_class";
import { TestCase, tc251, tc348, tc641, tc642Trie, tc642Main, tc2254empty, tc307func } from './prototype_to_class.data';

function test(tc: TestCase) {
    const classifier_ = new Classifier();
    const actual = classifier_.toClass(tc.input).trim();
    expect(actual).to.be.equal(tc.expected.trim());
}

describe('tests', ()=> {

    it('empty', ()=>{
        const s = '';
        const classifier_ = new Classifier();
        const actual = classifier_.toClass(s);
        expect(actual).to.be.equal('');
    });

    it('Leetcode 251. Flatten 2D Vector, empty', () => {
        test(tc251);
	});

    it.only('Leetcode 307. Range Sum Query - Mutable, function', () => {
        test(tc307func);
	});

    it('Leetcode 348. Design Tic-Tac-Toe, finished', () => {
        test(tc348);
	});

    it('Leetcode 641. Design Circular Deque, empty', () => {
        test(tc641);
	});

    it('Leetcode 642. Design Search Autocomplete System, Trie', () => {
        test(tc642Trie);
	});

    it('Leetcode 642. Design Search Autocomplete System, Main', () => {
        test(tc642Main);
	});

    it('Leetcode 2254. Design Video Sharing Platform, Empty', () => {
        test(tc2254empty);
	});
});
