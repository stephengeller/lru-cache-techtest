class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

var Cache = function(limit = 5) {
	this.LIMIT = limit;
	this.cacheItems = [];
	this._map = {};
	this._head = null;
	this._tail = null;
	this._size = 0;
};

Cache.prototype.get = function(key) {
	if (this._map[key]) {
		const value = this._map[key].value;
		const node = new Node(key, value);
		this.remove(key);
		this.setHead(node);
		return value;
	}
};

Cache.prototype.set = function(key, value) {
	const node = new Node(key, value);
	console.log(node);
	if (this._map[key]) {
		// if the key already exists
		this.remove(key);
	} else {
		// if the cache is full
		if (this._size >= this.LIMIT) {
			delete this._map[this._tail];
			this._size--;
			this._tail = this._tail.prev;
			this._tail.next = null;
		}
	}
	this.setHead(node);
};

module.exports = Cache;

cache = new Cache();

cache.set(1, 2);
