# Hiro

Hiro is a UI kit

## Installation

Clone the repo by running one of the following commands:

```bash
# Through SSH
git clone git@github.com:thabotitus/hiro.git

# Through https
git clone https://github.com/thabotitus/hiro.git

# Through Github CLI
gh repo clone thabotitus/hiro
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

### Available Commands

| Command                            | Description                                                                                   |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| `npm start`                        | Starts the server on your configuerd port (default 3000) and begins browsersync session       |
| `npm run set:env`                  | Sets your node env to the one specified in `.node-version`                                    |
| `npm run build`                    | Builds your app for production in your configured folder (default `docs`)                     |
| `npm run package`                  | Takes contents from your built app and zips them into a folder with the configured name       |
| `npm run deploy`                   | Takes contents from your built app and deploys it to Surge.sh with the configured domain name |
| `npm run bump:<major/minor/patch>` | Bumps the version in the version files (`version.json`, `pacakge.json`, `package-lock.json`)  |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
