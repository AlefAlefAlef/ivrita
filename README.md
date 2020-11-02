![npm](https://img.shields.io/npm/v/ivrita?label=npm%20version)
![Tests and Linting](https://github.com/AlefAlefAlef/ivrita/workflows/Tests%20and%20Linting/badge.svg)


<p align="center">
  <a href="https://alefalefalef.co.il/ivrita">
    <img src="https://github.com/AlefAlefAlef/ivrita-chrome/raw/main/src/icon.png" alt="Ivrita Logo" width="80" height="80">
  </a>

  <h2 align="center"><a href="https://alefalefalef.co.il/ivrita">Ivrita</a> JavaScript Library</h2>

  <p align="center">
    Ivrita is an open-source set of typographic tools for gender equality in Hebrew.
    <br />
    <a href="https://alefalefalef.co.il/ivrita"><strong>Read about the project in Hebrew »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AlefAlefAlef/ivrita-chrome">Chrome Extension</a>
    ·
    <a href="https://github.com/AlefAlefAlef/ivrita-wordpress">WordPress Plugin</a>
  </p>
</p>

## Install on your website
> If your website uses WordPress, check out the [WordPress Plugin](https://github.com/AlefAlefAlef/ivrita-wordpress) for easy usage

Installing the library on your website requires 3 steps:
1. Include the minified JS file:
    ```html
    <script src="https://ivrita.alefalefalef.co.il/dist/ivrita.min.js"></script>
    ```
2. Initialize the Ivrita object:
    ```JavaScript
    var ivrita = new Ivrita(document.querySelector('#content'));
    ```
    (If no argument is passed to the `Ivrita` constructor, `document.body` is used instead)
3. Pass to the `Ivrita` object the user's gender with `setMode`:
    ```JavaScript
    ivrita.setMode(Ivrita.MALE); // Possible options: Ivrita.MALE, Ivrita.FEMALE, Ivrita.NEUTRAL
    ```
That's it!

## Install Source

Use the npm to install the source files locally:

```bash
npm install ivrita
```

```JavaScript
import Ivrita from 'ivrita';
console.log(Ivrita.genderize('מעצבים/ות', Ivrita.FEMALE));
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Most typical changes to the Hebrew genderization should be added to the `rules.js` file. Notice the orer of the rule matters, since the rules are executed one by one and can conflict.

Use `npm test` or `npm run test-watch` to make sure your changes didn't break any functionality, and please make sure to update tests as appropriate.
