## This is a proxy api for retrieving user data from github api

Here caching and rate-limiting are implemented. `node-cache` is used for caching and `express-rate-limit`is used to limit the request rate.     
### **express-rate-limit**

To create a limiter middleware from `express-rate-limit` 

``` javascript
const rTime= 30 * 1000;
const maxReq=45;
const limiter = rateLimit({
    windowMs: rTime,
    max: maxReq
});

```
Then just use this limiter to your express app or any route.
For details , see the [express-rate-limit doc](https://www.npmjs.com/package/express-rate-limit)
### **node-cache** 

To create cache from `node-cache` , first create a node-cache object
```javascript
    const cache = require('node-cache')
    const mycache = new cache({
        deleteOnExpire: true,
        stdTTL: 5   
     })

```
Here, `stdTTL` is standard ttl (time to live) for a single cache object. This means that the lifespan of your cache data is `stdTTL` seconds.     
Now, you have created the node-cache object, you can store your cache. to store the cache 
```javascript
    mycache.set(key,data,expTime)
```
If you want to set the expiration time, then you can add expTime or you don't have to add this parameter. You can retrieve the data using the `key`
```javascript
    const data = mycache.get(key)
```
You can see the statistics of your caching by this
```javascript
    const stats= mycache.getStats()
    // the stat object (random values)
    /*
        {
            keys: 3,    // global key count
            hits: 2,    // global hit count
            misses: 0,  // global miss count
            ksize: 3410,   // global key size count in approximately bytes
            vsize: 3120    // global value size count in approximately bytes
        }
    */
```
You can delete all your cache data by this
```javascript
    mycache.flushAll();
    // now see the cache stats
    mycache.getStats();
    /*
        {
            keys: 0,    // global key count
            hits: 0,    // global hit count
            misses: 0,  // global miss count
            ksize: 0,   // global key size count in approximately bytes
            vsize: 0    // global value size count in approximately bytes
        }
    */
```

For more details, see the [node-cache doc](https://www.npmjs.com/package/node-cache)