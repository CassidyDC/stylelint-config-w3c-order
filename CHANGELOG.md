# stylelint-config-w3c-order Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-08-13

### Added

- Added `.editorconfig`, `.markdownlint-cli2.jsonc`, and `eslint.config.js` config files.
- Added `.vscode/settings.json` file with "prettier.configPath".
- Added devDependencies:
  - eslint
  - globals
  - markdownlint-cli2
  - prettier

### Changed

- Renamed `dist/cssmodules` directory to `w3c-modules`.
- Updated README.md description and links.
- Updated `prettier.config.js` for `.jsonc` files.
- Updated node module packages versions.
- Updated package name from `stylelint-config-cssmodules-order` to `stylelint-config-w3c-order` to avoid confusion with "CSS Modules".

## [1.1.1] - 2025-01-09

### Changed

- Updated current border properties per module.

## [1.1.0] - 2025-01-09

### Added

- Added `Cascade` module with the `all` property.
- Added `MathML Core` module.
- Added `Compatibility Standard` non-module with browser prefixes.

### Changed

- Updated the `config.js` properties order.
- Updated all module files to use formatted JSDocs.

## [1.0.0] - 2025-01-04

### Added

- Added `.gitignore` file.
- Added `.npmignore` file.
- Added `CHANGELOG.md` file.
- Added `config.js` file with CSS properties order.
- Added `LICENSE` file.
- Added `package.json` files
- Added `prettier.config.js` file.
- Added `README.md` file.
- Added `test` directory with `compare.js` and `output.json` files.
- Added individual **CSS Modules** files in `/lib/css-modules/*`.
