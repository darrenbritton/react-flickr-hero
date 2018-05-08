basic example:

```js
<FlickrHero api_key='1b4e5b0203fab0d5731afe68f0a543e1' user_id='132343752@N06' limit={9} />
```

providing album id example:

```js
<FlickrHero api_key='1b4e5b0203fab0d5731afe68f0a543e1' user_id='132343752@N06' album_id='72157694825254121' />
```

just searchTerm example:

```js
<FlickrHero api_key='1b4e5b0203fab0d5731afe68f0a543e1' searchTerm='cats' limit={3} />
```

no user id, album id or searchTerm example:

```js
<FlickrHero api_key='1b4e5b0203fab0d5731afe68f0a543e1' />
```
