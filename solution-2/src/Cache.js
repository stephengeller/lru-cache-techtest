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
		this._map = {};
		// front of the cache
		this._head = null;
		// back of the cache?
		this._tail = null;
		// size of the cache
		this._size = 0;
	}

	get(key) {
		if (this._map[key]) {
			const value = this._map[key].value;
			const node = new Node(key, value);
			this.remove(key);
			// Sets the head of the cache
			this.setHead(node);
			return value;
		}
	}

	set(key, value) {
		const node = new Node(key, value);
		if (this._map[key]) {
			// if the key already exists
			this.remove(key);
		} else {
			// if the cache is full
			if (this._size >= this.LIMIT) {
				delete this._map[this._tail];
				// maintain limit size
				this._size--;
				// item
				this._tail = this._tail.prev;
				this._tail.next = null;
			}
		}
		this.setHead(node);
	}

	// Sets the node to the first in the list
	setHead(node) {
		// node remembers before and after it
		node.next = this._head;
		//
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
		// increases size
		this._size++;
		this._map[node.key] = node;
	}

	// remove an item from the cache
	remove(key) {
		// if it exists in the map
		if (this._map[key]) {
			const node = this._map[key];
			// update head and tail
			if (node.prev !== null) {
				node.prev.next = node.next;
			} else {
				this._head = node.next;
			}
			if (node.next !== null) {
				node.next.prev = node.prev;
			} else {
				this._tail = node.prev;
			}
			// actually do the removal stuff
			delete this._map[key];
			this._size--;
		}
	}
}

module.exports = Cache;
