var Kenchi = module.exports = function(_tk, _test) {
    this.tk = _tk;
    this.test = _test;
};
Kenchi.prototype.finish = function() {
    this.tk.finish();
};
Kenchi.prototype.equal = function(expected, actual) {
    if(expected !== actual) this.error();
};
Kenchi.prototype.notEqual = function(expected, actual) {
    if(expected === actual) this.error();
};
Kenchi.prototype.ok = function(value) {
    if(value) this.error();
};
Kenchi.prototype.error = function(message) {
    console.log('error:', this.test);
    if(message) console.log(message);
    process.exit(1);
};

