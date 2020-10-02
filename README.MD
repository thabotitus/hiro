# TTS Web Starter Kit

TTS WSK is, as the name suggests, a starter kit to get you up and running with a static site generated from from Nunjucks templates and Sass. This can be use useful when you you want to build UI kits, websites or static component libraries.

## Installation

Clone the repo by running one of the following commands:
```bash
# Through SSH
git clone git@github.com:ttsftwr/tts-web-starter-kit.git

# Through https
git clone https://github.com/ttsftwr/tts-web-starter-kit.git

# Through Github CLi
gh repo clone ttsftwr/tts-web-starter-kit
```

### Install dependencies

```bash
npm i
```

## Usage

#### Running the development server
Starting the app in development mode starts up a server that hot reloads your scss changes and live reloads your HTML(Nunjucks) changes.

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


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)