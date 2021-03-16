# SWFights

## About

SWAPI turned out to be miserable to work with, and I had some issues with typing here. There are things I'm not proud of - like many castings, many issues I would have done differently if I was less tired. For some reason the last week killed me, by the way, and I do not feel like a birthday boy I was a couple of days ago.

## Tests

I wrote the outline for the tests that seemed really necessary in this application. Now, push come to shove, I would also test the couple of hooks that I wrote. The tests almost all fail, because I didn't finish them in the timeframe I gave myself, and frankly, at the moment I'm too exhausted.

## The gripes

Did you know SWAPI has the weirdest sort of an indexing situation in the world? For some reason, there is no `id` anywhere to be seen, and yesterday I was fuming when I realised the simple workflow of:

1. Get the number of entities from a general call to `api/starships/` or `api/people/`
2. Get a random number between 1 and the number of entities
3. Fetch that specific asset

The whole concept went to hell when I realised, actually, it doesn't mean that if the `count` for an entity = 86, that any call for an `entity/{1-86}` would return a value.

So instead, I kept all of the entities in a much less performant redux store. oof.

Then typing issues. I was frustrated enough with it by then, that some hellish construct emerged. Again, I'm not very happy with it.

Part of it might have been that my chair is a torture device, but a new one is coming, so good.

## Available Scripts

### `yarn start`

### `yarn test`

### `yarn build`
