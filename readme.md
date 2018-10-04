
# fastify-express-compress-benchmark

Benchmark comparision between fastify and express(middleware/plugin)

## Installation

```
$ git clone 
$ cd compress-benchmark
$ npm install
$ npm start
```

`fastify`/`express` server will start on [localhost:3000](http://localhost:3000)

## Scripts

- Fastify without compress (`npm run f`)
- Fastify with compress (`npm run f:c`)
- Express without compress (`npm run e`)
- Express with compress (`npm run e:c`)
- Benchmark (`npm run benchmark`)

## Benchmark

### using fastify

- Without compress

```
Running 10s test @ http://localhost:3000
2 connections

Stat    2.5% 50%  97.5% 99%  Avg     Stdev   Max
Latency 0 ms 0 ms 0 ms  0 ms 0.01 ms 0.13 ms 32.31 ms

Stat      1%      2.5%    50%     97.5%   Avg      Stdev   Min
Req/Sec   10207   10207   19103   20207   18542.19 2721.45 10206
Bytes/Sec 1.57 MB 1.57 MB 2.94 MB 3.11 MB 2.86 MB  419 kB  1.57 MB

Req/Bytes counts sampled once per second.

204k requests in 11s, 31.4 MB read
```

- With compress

```
Running 10s test @ http://localhost:3000
2 connections

Stat    2.5% 50%  97.5% 99%  Avg     Stdev   Max
Latency 0 ms 0 ms 0 ms  0 ms 0.01 ms 0.17 ms 32.9 ms

Stat      1%      2.5%    50%     97.5%   Avg     Stdev   Min
Req/Sec   7627    7627    15295   17007   14873.4 2561.45 7624
Bytes/Sec 1.17 MB 1.17 MB 2.36 MB 2.62 MB 2.29 MB 395 kB  1.17 MB

Req/Bytes counts sampled once per second.

149k requests in 10s, 22.9 MB read
```

### using express

-  Without compress

```
Running 10s test @ http://localhost:3000
2 connections

Stat    2.5% 50%  97.5% 99%  Avg     Stdev   Max
Latency 0 ms 0 ms 1 ms  2 ms 0.06 ms 0.35 ms 28.98 ms

Stat      1%     2.5%   50%     97.5%   Avg     Stdev   Min
Req/Sec   2329   2329   7807    8059    6946.3  1750.29 2328
Bytes/Sec 559 kB 559 kB 1.87 MB 1.93 MB 1.67 MB 420 kB  559 kB

Req/Bytes counts sampled once per second.

69k requests in 10s, 16.7 MB read
```

-  With compress

```
Running 10s test @ http://localhost:3000
2 connections

Stat    2.5% 50%  97.5% 99%  Avg     Stdev   Max
Latency 0 ms 0 ms 0 ms  1 ms 0.04 ms 0.25 ms 11.2 ms

Stat      1%      2.5%    50%     97.5%   Avg    Stdev  Min
Req/Sec   6519    6519    8059    8231    7930.6 477.92 6518
Bytes/Sec 1.56 MB 1.56 MB 1.93 MB 1.98 MB 1.9 MB 115 kB 1.56 MB

Req/Bytes counts sampled once per second.

77k requests in 10s, 19 MB read
```

## Conclusion

- Fastify compress [fastify-compress](https://github.com/fastify/fastify-compress) not gives better benchmark than fastify core.
- Express compression [compression](https://github.com/expressjs/compression) gives better benchmark than express core.

## License

MIT © [Joydip Roy](https://github.com/rjoydip)