'use strict'
var chai = require('chai');
var expect = chai.expect;
// var sinon = require('sinon');
// var request = require('supertest');
chai.should();
// var app = require('app/routes.js');
function returnNames(name){
    return name;
};
describe('my first test' , function(){
    it('test assert',function(){
        returnNames("anurag").should.equal('anurag');
    });
});

// describe('first test', function() {
//     request(app)
//         .get('/contact')
//         .expect('Content-Type', /json/)
//         .expect('Content-Length', '4')
//         .expect(200, "ok")
//         .end(function(err, res){
//            if (err) throw err;
//         });
// });