# react-country-flags-select

A customizable SVG flags select component and standalone SVG flags components are provided by this React component.

## Live demo example

[Live demo stackblitz.com](https://stackblitz.com/edit/react-ts-5hkkek?file=App.tsx)
[Storybook](https://kost927.github.io/react-country-flags-select/)

## Installation and usage

```
npm install react-country-flags-select
```

## Usage

### ReactCountryFlagsSelect

```javascript
import React, { useState } from "react";
import ReactCountryFlagsSelect from "react-country-flags-select";

const App = () => {
  const [selected, setSelected] = useState(null);

  <ReactCountryFlagsSelect selected={selected} onSelect={setSelected} />;
};

export default App;
```

### Countries

List of Countries with country codes. [Countries](https://github.com/Kost927/react-country-flags-select/blob/main/src/utils/countries.ts).

## Props

- `selected` - is a required `object` prop that contains current label and country code of the input.
  <br>

- `onSelect` - is a required `function` prop that receive the selected country from the user, which will be used to update the selected value.
  <br>

- `customCountries` - an option `object` prop that you can pass to replace default countries with your own `object`.
  <br>

- `searchable` - an option `boolean` prop that you can pass to make select searchable. `false` by default.
  <br>

- `customLabelOptions`- an option`object` prop that you can pass to rewrite original labels.
  <br>

- `labelWithCountryCode` - an option `boolean` prop that you can pass to see the country label in format `United States (US)`. `false` by default.
  <br>

- `labelOnlyCountryCode` - an option `boolean` prop that you can pass to see the country label in format `US`. `false` by default.
  <br>

- `searchPlaceholder` - an option `string` prop that you can pass to replace default placeholder in searchable mode.
  <br>

- `selectPlaceholder` - an option `string` prop that you can pass to replace default placeholder in not searchable mode.
  <br>

- `CustomOpenIcon` & `CustomCloseIcon` - an option props that you can pass to replace default open and close icons.
  <br>

- `clearIcon` - an option `boolean` prop that you can pass to remove clear icon. `true` by default.
  <br>

- `selectWidth` & `selectHeight` - an option `number` props that you can pass to change the width or height of the select.
  By default `selectWidth = 250px`, `selectHeight = 30px`.
  <br>

- `optionSize` & `selectedSize` an option `number` props that you can pass to change font size of the option or selected element.
  By default `optionSize = 16px`, `selectedSize = 16px`.
  <br>

- `fullWidth` = an option `boolean` prop that you can pass to make select element full width. By default `false`.
  if `fullWidth = true` will ignore `selectWidth` & `selectHeight` props.
  <br>

- `optionsListMaxHeight` - an option `number` prop that you can pass to change the max height of the dropdown overlay.
  By default `optionsListMaxHeight = 300px`.
  <br>

- `disabled` = an option `boolean` prop that you can pass to disable select element.
  <br>

- `id` = an option `string` prop that you can pass to container element.
  <br>

- `classes` = an option `object` prop that you can pass to rewrite default classes.
  <br>

**you can override such `classes` as:**
<br>

`container`, `selectWrapper`, `searchSelect`, `buttonSelect`, `buttonSelectText`, `clearIcon`, `optionsWrapper`,
`option`, `optionFlag`, `optionText`, `openIcon`, `closeIcon`.

```javascript
import { ReactComponent as SomeIcon } from "../SomeIcon.svg";

const [selected, setSelected] = useState(null);
const customCountries = {
  US: "United States",
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  US: "United States",
};
const customLabelOptions = {
  US: "U*S*A",
};
const searchPlaceholder = "some custom placeholder";
const selectPlaceholder = "some custom placeholder";
const classes = {
  container: "someNewClass",
  selectWrapper: "someNewClass",
  searchSelect: "someNewClass",
  buttonSelect: "someNewClass",
  buttonSelectText: "someNewClass",
  clearIcon: "someNewClass",
  optionsWrapper: "someNewClass",
  option: "someNewClass",
  optionFlag: "someNewClass",
  optionText: "someNewClass",
  openIcon: "someNewClass",
  closeIcon: "someNewClass",
};

<ReactCountryFlagsSelect
  selected={selected}
  onSelect={onSelect}
  customCountries={customCountries}
  customLabelOptions={customLabelOptions}
  searchPlaceholder={searchPlaceholder}
  selectPlaceholder={selectPlaceholder}
  CustomOpenIcon={SomeIcon}
  CustomCloseIcon={SomeIcon}
  clearIcon={false}
  searchable
  labelWithCountryCode
  labelOnlyCountryCode
  selectWidth={350}
  selectHeight={40}
  optionSize={20}
  selectedSize={20}
  fullWidth
  disabled
  classes={classes}
  optionsListMaxHeight={300}
  id
/>;
```

### Country Flag

```javascript
import React from "react";
import { Us } from "react-country-flags-select";

const Region = () => (
  <div>
    <Us /> United States
  </div>
);

export default Region;
```

## Contribution

This project is written in Typescript. [Storybook](https://storybook.js.org/). Tests are written with Jest and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Raise a pull request with your changes.

#### Installation

```
npm install
```

## License

MIT license.
