# parse-ms

> Parse milliseconds into an object

## Install

```sh
npm install @leonetti/timeparser
```

## Usage

```js
import parseMilliseconds from '@leonetti/timeparser';

parseMilliseconds(1337000001);
/*
{
	days: 15,
	hours: 11,
	minutes: 23,
	seconds: 20,
	milliseconds: 1,
	microseconds: 0,
	nanoseconds: 0
}
*/

```