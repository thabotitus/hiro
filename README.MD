# TTS Web Starter Kit

TTS WSK is, as the name suggests, a starter kit to get you up and running with a static site generated from from Nunjucks templates and Sass. This can be use useful when you you want to build UI kits, websites or static component libraries. It is currently bundled with Bootstrap 5 but this can easily be replaced by any other framework of your choice, or just removed.

## Installation

Clone the repo by running one of the following commands:

```bash
# Through SSH
git clone git@github.com:ttsftwr/tts-web-starter-kit.git

# Through https
git clone https://github.com/ttsftwr/tts-web-starter-kit.git

# Through Github CLI
gh repo clone ttsftwr/tts-web-starter-kit
```

### Install dependencies

- Use node v13+

- Get Gulp

```bash
npm i -g gulp
```

- Install npm deps

```bash
npm install
```

- Build it

```bash
npm run build
```

## Usage

#### Running the development server

Starting the app in development mode starts up a server that hot reloads your scss changes and live reloads your HTML(Nunjucks) changes. Run `npm run build` before your very first run to build the files that will be served.

```bash
npm start
```

#### Build for production

You can build the app for production by running the command below. This will build all your files into the `/dist` folder. You can change this location in `build/config.js` in the `DISTRIBUTION_FOLDERS` hash under the key `root`.

```bash
npm run build
```

#### Bump versions

You can bump the version by running;

```bash
npm run bump:<major|minor|patch>
```

which will bump the version of your app in these files;

```
- package.json
- package-lock.json
- version.json
```

### Package it

You can build a compressed file with the built code by running:

```bash
npm run package
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
