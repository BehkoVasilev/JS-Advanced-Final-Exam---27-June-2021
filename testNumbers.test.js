const testNumbers = require('./testNumbers');
const {assert} = require('chai');

describe("test numbers", function() {
    describe("Test sumNumber …", function() {
        it("wrong input", function() {
            assert.equal(testNumbers.sumNumbers("2", 2), undefined);
            assert.equal(testNumbers.sumNumbers("2", "2"), undefined);
            assert.equal(testNumbers.sumNumbers(2, "2"), undefined);
        });

        it("correct inputs", () =>{
            assert.equal(testNumbers.sumNumbers(3, 2), 5.00);
            assert.equal(testNumbers.sumNumbers(3, 2.55), 5.55);
            assert.equal(testNumbers.sumNumbers(3, -2.55), 0.45);
        });
     });
    
     describe("test numberChecker", ()=>{
        it("correct input", () => {
            assert.equal(testNumbers.numberChecker(2), "The number is even!");
            assert.equal(testNumbers.numberChecker(-2), "The number is even!");
            assert.equal(testNumbers.numberChecker(-1), "The number is odd!");
            assert.equal(testNumbers.numberChecker(3), "The number is odd!");
        });

        it("wrong value", () => {
 
            assert.throw(() => testNumbers.numberChecker("test"), "The input is not a number!");

        });
     });

     describe("test averageSumArray", () =>{
        it("test average", () =>{
            let arr = [2, 3, 5, 10];
            assert.equal(testNumbers.averageSumArray(arr), 5);
        });
     });

});