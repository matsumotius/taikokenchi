var Kenchi = require('./kenchi');

var get_length = function(hash) {
    var count = 0;
    for(var test in hash) if(is_test(test)) count++;
    return count;
};
var is_test = function(test){
    return (test !== 'setUp' && test !== 'tearDown');
};
var TaikoKenchi = module.exports = function(_tests) {
    this.count = 0;
    this.tests = _tests;
    this.length = get_length(this.tests);
};
TaikoKenchi.prototype.start = function() {
    for(var test in this.tests) {
        if(is_test(test)) {
            this.setUp();
            this.tests[test](new Kenchi(this, test));
            this.tearDown();
        }
    }
};
TaikoKenchi.prototype.setUp = function() {
    if('setUp' in this.tests) this.tests.setUp();
};
TaikoKenchi.prototype.tearDown = function() {
    if('tearDown' in this.tests) this.tests.tearDown();
};
TaikoKenchi.prototype.finish = function() {
    this.count++;
    if(this.count === this.length) this.success();
};
TaikoKenchi.prototype.success = function() {
    console.log('TEST PASSED');
    process.exit(0);
};
