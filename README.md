# Least Recently Used Cache Test

## To install
```
$ git clone git@github.com:stephengeller/lru-cache-techtest.git
$ cd lru-cache-techtest
```

## To use

```Javascript
cache = new Cache()
cache.set(key, value) // adds a key / value pair to cache
cache.get(key) // returns value of that key
```

## Tests

Clone the repo, then open SpecRunner.html in your browser from either solution-1 or solution-2 to see the tests.

```Bash
$ open solution-1/SpecRunner.html
$ open solution-2/SpecRunner.html
```

## Solution 1
This solution uses an array of objects to keep track of the most recently (and least recently) used items, and has a limit set when initializing. This can be customised if necessary.

The problem with this solution is that the get() function has to iterate over the entire array of items until it finds the requested key. If the cache limit is high, this become very inefficient.

## Solution 2

TBC, looking into using linked lists to complete.

Learning how to solve using [this tutorial](http://learnjswith.me/implement-an-lru-cache-in-javascript/), extracting and interpreting while I learn.

###### Interpretation
It appears that this solution works through having each node remember a key, a value and the nodes before and after it - this maintains the order. In turn, the cache remembers the most recently and least recently used items, in order to know what to delete.

When setHead gets called, the first item in the list becomes the next item in the list. For example, if node3 gets called and node5 was called before that, node3.next becomes node5, and node3.prev = null.
