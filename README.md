# react-country-flags-select

A customizable SVG flags select component and standalone SVG flags components are provided by this React library.

## Code Example

Live demo: [ekwonye-richard.github.io/react-flags-select/](https://ekwonye-richard.github.io/react-flags-select/?path=/story/reactflagsselect--primary)

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
  const [selected, setSelected] = useState("");

  <ReactCountryFlagsSelect selected={selected} onSelect={setSelected} />;
};

export default App;
```

### Countries

List of Countries with country codes. [Countries](https://github.com/Kost927/react-country-flags-select/blob/main/src/utils/countries.ts).

## Props

`selected` - is a required `object` prop that contains current label and country code of the input.
`onSelect` - is a required `function` prop that receive the selected country from the user, which will be used to update the selected value.
`customCountries` - an option `object` prop that you can pass to replace default countries with your own `object`.
`searchable` - an option `boolean` prop that you can pass to make select searchable. `false` by default.
`customLabelOptions` - an option `object` prop that you can pass to rewrite original labels.
`labelWithCountryCode` - an option `boolean` prop that you can pass to see the country label in format `United States (US)`. `false` by default.
`labelOnlyCountryCode` - an option `boolean` prop that you can pass to see the country label in format `US`. `false` by default.
`searchPlaceholder` - an option `string` prop that you can pass to replace default placeholder in searchable mode.
`selectPlaceholder` - an option `string` prop that you can pass to replace default placeholder in not searchable mode.
`CustomOpenIcon` & `CustomCloseIcon` - an option props that you can pass to replace default open and close icons.
`clearIcon` - an option `boolean` prop that you can pass to remove clear icon. `true` by default.
`selectWidth` & `selectHeight` - an option `number` props that you can pass to change the width or height of the select.
By default `selectWidth = 250px`, `selectHeight = 30px`.
`optionSize` & `selectedSize` an option `number` props that you can pass to change font size of the option or selected element.
By default `optionSize = 16px`, `selectedSize = 16px`.
`fullWidth` = an option `boolean` prop that you can pass to make select element full width. By default `false`.
if `fullWidth = true` will ignore `selectWidth` & `selectHeight` props.
`optionsListMaxHeight` - an option `number` prop that you can pass to change the max height of the dropdown overlay.
By default `optionsListMaxHeight = 300px`.
`disabled` = an option `boolean` prop that you can pass to disable select element.
`id` = an option `string` prop that you can pass to container element.
`classes` = an option `object` prop that you can pass to rewrite default classes.

you can override such `classes` as:
`container`, `selectWrapper`, `searchSelect`, `buttonSelect`, `buttonSelectText`, `clearIcon`, `optionsWrapper`,
`option`, `optionFlag`, `optionText`, `openIcon`, `closeIcon`.

```javascript
import { ReactComponent as SomeIcon } from "../SomeIcon.svg";

const [selected, setSelected] = useState("");
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
    container: 'someNewClass',
    selectWrapper: 'someNewClass',
    searchSelect: 'someNewClass',
    buttonSelect: 'someNewClass',
    buttonSelectText: 'someNewClass',
    clearIcon: 'someNewClass',
    optionsWrapper: 'someNewClass',
    option: 'someNewClass',
    optionFlag: 'someNewClass',
    optionText: 'someNewClass',
    openIcon: 'someNewClass'
    closeIcon: 'someNewClass'
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
  clearIcon
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

This project is written in Typescript. Tests are written with Jest and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Raise a pull request with your changes.

#### Installation

```
npm install
```

## License

MIT license.
