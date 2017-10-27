var Cache = function(limit = 5) {
	this.LIMIT = limit;
	this.cacheItems = [];
};

Cache.prototype.get = function(key) {
	items = this.cacheItems;
	for (i = 0; i < items.length; i++) {
		if (items[i][key] != undefined) {
			obj = items[i];
			this.cacheItems.splice(i, 1);
			this.cacheItems.unshift(obj);
			return items[i][key];
		}
	}
};

Cache.prototype.set = function(cacheKey, value) {
	obj = {};
	obj[cacheKey] = value;
	this.cacheItems.unshift(obj);
	if (this.cacheItems.length > this.LIMIT) {
		lastItem = this.cacheItems.length - 1;
		this.cacheItems.splice(lastItem, 1);
	}
};

module.exports = Cache;
