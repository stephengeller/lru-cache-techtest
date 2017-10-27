var Cache = function() {
	this.LIMIT = 5;
	this.cacheKeys = {};
};

// {"A": {
// 	arrayIndex: 4,
// 	order: 3
// }, "B": {
// 	arrayIndex: 4,
// 	order: 3
// }}
//
// obj = {}
//
// obj['key1'] = {value: 1}
// obj['key2'] = {value: 2}

Cache.prototype.get = function(key) {
	// for (i = 0; i < this.cacheValues.length; i++) {
	// 	if (key === this.cacheValues[i].key) {
	// 		object = this.cacheValues[i];
	// 		this.cacheValues.splice(i, 1);
	// 		this.cacheValues.unshift(object);
	// 		return this.cacheValues[i].value;
	// 	}
	// }
	// console.log("The key " + key + " does not exist");
	if (this.cacheKeys[key] != undefined) {
		arrayIndex = this.cacheKeys[key].arrayIndex;
		this.cacheKeys.arrayIndex = 1;
		return this.cacheValues[arrayIndex];
	} else {
		alert("undefined!");
	}
};

Cache.prototype.set = function(key, value) {
	this.cacheValues.push(value);
	arrayIndex = this.cacheValues.length - 1;
	this.cacheKeys[key] = {
		arrayIndex: arrayIndex,
		order: 1,
		lastUsed: this.currentDate
	};

	if (this.cacheValues.length > this.LIMIT) {
		lastItem = this.cacheValues.length - 1;
		this.cacheValues.splice(lastItem, 1);
		delete this.cacheKeys[key];
	}
};

module.exports = Cache;

// Use currentDate to determine least recently used,
// then order based on date in array
// SET:
