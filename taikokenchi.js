var Kenchi = require('./kenchi');

var get_length = function(hash) {
    var count = 0;
    for(var tmp in hash) count++;
    return count;
};
var TaikoKenchi = module.exports = function(_tests) {
    this.count = 0;
    this.tests = _tests;
    this.length = get_length(this.tests);
};
TaikoKenchi.prototype.start = function() {
    for(var test in this.tests) this.tests[test](new Kenchi(this, test));
};
TaikoKenchi.prototype.finish = function() {
    this.count++;
    if(this.count === this.length) this.success();
};
TaikoKenchi.prototype.success = function() {
    console.log('success');
    process.exit(0);
};
