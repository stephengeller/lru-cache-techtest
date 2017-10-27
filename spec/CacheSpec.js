describe("Cache", function() {
	beforeEach(function() {
		cache = new Cache();
	});

	describe("#set", function() {
		it("adds a key value pair object", function() {
			cache.set("Stephen", "Unemployed");
			expect(cache.cacheKeys["Stephen"].arrayIndex).toEqual(0);
			expect(cache.cacheKeys["Stephen"].order).toEqual(1);
		});

		it("limits to 5", function() {
			cache.set("Stephen1", "1");
			cache.set("Stephen2", "2");
			cache.set("Stephen3", "3");
			cache.set("Stephen4", "4");
			cache.set("Stephen5", "5");
			cache.set("Stephen6", "6");
			lastItem = cache.cacheValues.length - 1;
			expect(cache.cacheValues.length).toEqual(5);
			expect(cache.cacheValues[lastItem]).toEqual("2");
		});
	});

	describe("#get", function() {
		it("returns a real obj", function() {
			cache.set("Stephen", "Unemployed");
			expect(cache.get("Stephen")).toEqual("Unemployed");
		});

		it("moves object to front of array", function() {
			cache.set("A", "1");
			cache.set("B", "2");
			cache.set("C", "3");
			cache.set("D", "4");
			cache.set("E", "5");
			cache.get("C");
			expect(cache.cacheValues[0].key).toEqual("C");
		});
	});
});

// get the order from
