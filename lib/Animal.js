function Animal(type) {
  this.isAlive = true;
  this.isCute = false;
  this.type = type;
  this.health = 1;
}
Animal.prototype.beCute = function()  {
    this.isCute = true;
};
Animal.prototype.updateHealthStats = function(cb)  {
     var self = this;
    // this.health = Math.random()

    setTimeout(function() {
      self.health = Math.random();
      cb();
    }, 1000);
};

module.exports = Animal;
