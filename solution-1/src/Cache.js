class Cache {
	constructor() {
		this.LIMIT = 5;
		this.cacheItems = [];
	}

	get(key) {
		var items = this.cacheItems;
		for (var i = 0; i < items.length; i++) {
			if (items[i][key] != undefined) {
				return this._returnValues(i, key);
			}
		}
	}

	set(cacheKey, value) {
		var obj = {};
		obj[cacheKey] = value;
		this.cacheItems.unshift(obj);
		if (this.cacheItems.length > this.LIMIT) {
			var lastItem = this.cacheItems.length - 1;
			this.cacheItems.splice(lastItem, 1);
		}
	}

	_returnValues(index, key) {
		var items = this.cacheItems;
		var obj = items[index];
		this.cacheItems.splice(index, 1);
		this.cacheItems.unshift(obj);
		return this.cacheItems[index][key];
	}
}

module.exports = Cache;
