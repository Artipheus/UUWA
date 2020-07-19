# Useless Utilities Web App (UUWA)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7a4f8e6b-51cf-431d-9ae7-61fbbc3b53c8/deploy-status)](https://app.netlify.com/sites/nightingale-uuwa/deploys)

A Website that contains random utilities.
It's still WIP.

Current utilities that will be implemented:
* Random Number Generator (I have an obsession with random numbers).
* Note utility (couldn't come up with a good name for it).
* Calculator (who doesn't like calculators).
* IP Address Calculator (I recently finished a networking course, so that was stuck in my mind)
* IP Address & DNS 'getter' (I don't know if this is possible with JAMStack)

I was thinking of creating a ping utility but a quick search made it clear that that will require a web server (I don't think it's possible with JAMStack).

Most utilities will have a history table that will contain values the user has saved (they will probably be saved by default). It will probably be done using IndexedDB.

## Todo
- [ ] Brainstorm more utilities.
- [x] Home page (index)
  - [x] for mobile.
  - [x] for tablet.
  - [x] for desktop.
- [ ] RNG Utility
  - [ ] for mobile.
  - [ ] for tablet.
  - [ ] for desktop.
- [ ] Note Utility
  - [ ] for mobile.
  - [ ] for tablet.
  - [ ] for desktop.
- [ ] Calculator
  - [ ] for mobile.
  - [ ] for tablet.
  - [ ] for desktop.
- [ ] IP Address Calculator
  - [ ] for mobile.
  - [ ] for tablet.
  - [ ] for desktop.
- [ ] IP Address & DNS
  - [ ] for mobile.
  - [ ] for tablet.
  - [ ] for desktop.
- [ ] Implement storage for storing things from utilities. (IndexedDB?)
- [ ] Implement PWA things. (I have no idea how to do that)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Credits

Nick Roach  - https://www.iconfinder.com/iconsets/circle-icons-1

Alexiuz AS  - https://www.iconfinder.com/WHCompare

ultimatearm - https://www.flaticon.com/authors/ultimatearm

Freepik     - http://www.freepik.com/

## License
GNU General Public License v3.0
