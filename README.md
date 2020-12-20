![npm](https://img.shields.io/npm/v/ivrita?label=npm%20version)
![Tests and Linting](https://github.com/AlefAlefAlef/ivrita/workflows/Tests%20and%20Linting/badge.svg)


<p align="center">
  <a href="https://alefalefalef.co.il/ivrita">
    <img src="https://alefalefalef.co.il/wp-content/files/ivrita-files/ivrita-logo-1080-white.png" alt="Ivrita Logo" width="80" height="80">
  </a>

  <h2 align="center"><a href="https://alefalefalef.co.il/ivrita">Ivrita</a> JavaScript Library</h2>

  <p align="center">
    Ivrita is an open-source set of typographic tools for gender equality in Hebrew.
    <br />
    <a target="_blank" href="https://alefalefalef.co.il/ivrita"><strong>Read about the project in Hebrew »</strong></a>
    <br />
    <br />
    <a target="_blank" href="https://github.com/AlefAlefAlef/ivrita-chrome">Chrome Extension</a>
    ·
    <a target="_blank" href="https://he.wordpress.org/plugins/ivrita">WordPress Plugin</a>
  </p>
</p>

## Install on your website
> If your website uses WordPress, check out the [WordPress Plugin](https://he.wordpress.org/plugins/ivrita) for easy usage

Installing the library on your website requires 3 steps:
1. Include the minified JS file:
    ```html
    <script src="https://ivrita.alefalefalef.co.il/ivrita.min.js"></script>
    ```
2. Initialize the Ivrita object:
    * First argument is the DOM element(s) for which texts should be changed (default: `document.body`)
    * Second argument is the initial gender to be set (default: `Ivrita.NEUTRAL`)
    ```JavaScript
    var ivrita = new Ivrita(document.querySelector('#content'), Ivrita.FEMALE);
    ```

3. Change the gender later with `setMode` on the object instance:
    ```JavaScript
    ivrita.setMode(Ivrita.MALE); // Possible options: Ivrita.MALE, Ivrita.FEMALE, Ivrita.NEUTRAL, Ivrita.ORIGNAL
    ```
That's it!

## Install Source

Use `npm` to install the package files locally, to include in another JS library:

```bash
npm install ivrita
```

```JavaScript
import Ivrita from 'ivrita';

console.log(Ivrita.genderize('ברוכים/ות הבאות/ים', Ivrita.FEMALE));
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Most typical changes to the Hebrew genderization should be added to the `rules.js` file. Note that the order of rules matters, since the rules are executed one by one and can conflict.

Use `npm test` (or `npm run test-watch`) to make sure your changes didn't break any functionality, and please make sure to update tests for new features or bug fixes.
