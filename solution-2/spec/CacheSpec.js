describe("Cache", function() {
	beforeEach(function() {
		cache = new Cache();
	});

	describe("#set", function() {
		it("adds a key value pair object", function() {
			cache.set("Stephen", {
				name: "Stephen",
				occupation: "Unemployed"
			});
			expect(cache._map.Stephen.value.name).toEqual("Stephen");
			expect(cache._map.Stephen).not.toEqual(undefined);
		});

		it("limits to 5", function() {
			cache.set("key1", "value1");
			cache.set("key2", "value2");
			cache.set("key3", "value3");
			cache.set("key4", "value4");
			cache.set("key5", "value5");
			cache.set("key6", "value6");
			expect(cache._size).toEqual(5);
			console.log(cache._map);
			expect(cache._map.key1).toEqual(undefined);
		});
	});

	describe("#get", function() {
		it("returns the values", function() {
			object = {
				name: "Stephen",
				occupation: "Unemployed"
			};
			cache.set("Stephen", object);
			expect(cache.get("Stephen")).toEqual(object);
		});

		it("moves object to front of cache", function() {
			cache.set("A", "1");
			cache.set("B", "2");
			cache.set("C", "3");
			cache.set("D", "4");
			cache.set("E", "5");
			expect(cache._head.key).toEqual("E");
			expect(cache._tail.key).toEqual("A");
			cache.get("C");
			expect(cache._tail.key).toEqual("A");
			expect(cache._head.key).toEqual("C");
		});
	});
});
