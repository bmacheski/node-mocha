var assert = require("chai").should();
var Animal = require("./lib/Animal");
var cp = require('child_process');

  describe('Tests', function () {
    it('truthyness', function () {
      true.should.equal(true);
    });
  });

  describe.only('CLI', function() {
    it('should thank me for stopping by', function(done){
      cp.execFile('./app.js', function(err, stdout) {
        stdout.should.equal('thanks for stopping by!\n')
        done();
      })
    })
  })

  describe('Animal', function(){
    describe('constructor', function() {
      it('should return an Animal object', function(){
        var animal = new Animal();
        animal.should.be.an('Object');
        animal.should.be.an.instanceOf(Animal);
      })
      it('should have alive', function() {
        var animal = new Animal();
        animal.isAlive.should.be.true;
      })
    });
    it('shuld have 100% health', function() {
      var animal = new Animal()
      animal.health.should.equal(1)
    })
    it('should accept a type', function() {
      var cat = new Animal('cat');
      var dog = new Animal('dog');
      cat.type.should.equal('cat');
      dog.type.should.equal('dog');
    })
    describe('#updateHealthStats()', function() {
      it('should change the health', function(done) {
        var animal = new Animal()
        var health = animal.health;

        animal.updateHealthStats(function() {
          animal.health.should.not.equal(health)
          done()
        });
      })
    })
    describe('#beCute()', function() {
      it('should be a prototype method', function() {
        var animal = new Animal()
        animal.should.respondTo('beCute')
        animal.should.not.have.ownProperty('beCute')
      })
      it('should make the animal cute', function() {
        var animal = new Animal()
        animal.isCute.should.not.be.true;
        animal.beCute()
        animal.isCute.should.be.true;
      })
    })
  });

  describe('Array', function(){
    describe('#filter()', function() {
      it('should return an array of item that return truthy', function() {
        var arr = [1,2,3,4,5]
        var output = arr.filter(function(item) {
         return item % 2
        })
        output.should.eql([1,3,5])
      });
    });

    describe('#map()', function() {
      it('should create a new array with the return value of the inner', function() {
        var array = [1,2,3,4,5]
        var res = array.map(function(item) {
          return item * item;
        });
        res.should.eql([1,4,9,16,25])
      })
      it('should keep the same length', function() {
       var array = [1,2,3,4,5];
       var length = array.map(function(item) {
          return false;
        }).length;
        length.should.equal(array.length);
      })
      it('should not  mutate the original array', function() {
        var arr = [1,2,3,4,5]
        arr.map(function(item) {
          return false;
        })
        arr.should.eql([1,2,3,4,5]);
      })
    })
  })
