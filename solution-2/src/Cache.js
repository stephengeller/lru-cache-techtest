class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class Cache {
	constructor(limit = 5) {
		this.LIMIT = limit;
		this.cacheItems = [];
		this._map = {};
		this._head = null;
		this._tail = null;
		this._size = 0;
	}

	get(key) {
		if (this._map[key]) {
			const value = this._map[key].value;
			const node = new Node(key, value);
			this.remove(key);
			this.setHead(node);
			return value;
		}
	}

	set(key, value) {
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
	}

	setHead(node) {
		// node remembers before and after it
		node.next = this._head;
		node.prev = null;
		// if the head exists
		if (this._head !== null) {
			// puts the node in front of the one in first
			this._head.prev = node;
		}
		this._head = node;
		// if the tail does not exist
		if (this._tail === null) {
			this._tail = node;
		}
	}
}

module.exports = Cache;

cache = new Cache();

cache.set(1, 2);
