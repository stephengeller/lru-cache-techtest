// const Cache = require("../src/Cache.js").Cache;

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
			expect(cache.cacheItems[0].Stephen.name).toEqual("Stephen");
			expect(cache.cacheItems[0].Stephen.occupation).toEqual("Unemployed");
		});

		it("limits to 5", function() {
			cache.set("key1", "value1");
			cache.set("key2", "value2");
			cache.set("key3", "value3");
			cache.set("key4", "value4");
			cache.set("key5", "value5");
			cache.set("key6", "value6");
			lastItem = cache.cacheItems.length - 1;
			expect(cache.cacheItems.length).toEqual(5);
			expect(cache.cacheItems[lastItem].key2).toEqual("value2");
		});
	});

	describe("#get", function() {
		fit("returns a real obj", function() {
			object = {
				name: "Stephen",
				occupation: "Unemployed"
			};
			cache.set("Stephen", object);
			expect(cache.get("Stephen")).toEqual(object);
		});

		it("moves object to front of array", function() {
			cache.set("A", "1");
			cache.set("B", "2");
			cache.set("C", "3");
			cache.set("D", "4");
			cache.set("E", "5");
			expect(cache.cacheItems[0]).toEqual({ E: "5" });
			cache.get("C");
			expect(cache.cacheItems[0]).toEqual({ C: "3" });
			lastItem = cache.cacheItems.length - 1;
			expect(cache.cacheItems[lastItem]).toEqual({ A: "1" });
		});
	});
});

// get the order from
