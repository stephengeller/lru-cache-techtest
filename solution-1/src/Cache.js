class Cache {
	constructor() {
		this.LIMIT = 5;
		this.cacheItems = [];
	}

	get(key) {
		var items = this.cacheItems;
		for (var i = 0; i < items.length; i++) {
			if (items[i][key] != undefined) {
				var obj = items[i];
				this.cacheItems.splice(i, 1);
				this.cacheItems.unshift(obj);
				return items[i][key];
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
}

module.exports = Cache;
