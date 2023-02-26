# react-country-flags-select

A customizable SVG flags select component and standalone SVG flags components are provided by this React library.

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

<ul>
  <li>`selected` - is a required `object` prop that contains current label and country code of the input.</li>
  <li>`onSelect` - is a required `function` prop that receive the selected country from the user, which will be used to update the selected value.
  </li>
  <li>`customCountries` - an option `object` prop that you can pass to replace default countries with your own `object`.
  </li>
  <li>`searchable` - an option `boolean` prop that you can pass to make select searchable. `false` by default.
  </li>
  <li>`customLabelOptions` - an option `object` prop that you can pass to rewrite original labels.
  </li>
  <li>`labelWithCountryCode` - an option `boolean` prop that you can pass to see the country label in format `United States (US)`. `false` by default.
  </li>
  <li>`labelOnlyCountryCode` - an option `boolean` prop that you can pass to see the country label in format `US`. `false` by default.
  </li>
  <li>`searchPlaceholder` - an option `string` prop that you can pass to replace default placeholder in searchable mode.
  </li>
  <li>`selectPlaceholder` - an option `string` prop that you can pass to replace default placeholder in not searchable mode.
  </li>
  <li>`CustomOpenIcon` & `CustomCloseIcon` - an option props that you can pass to replace default open and close icons.
  </li>
  <li>`clearIcon` - an option `boolean` prop that you can pass to remove clear icon. `true` by default.
  </li>
  <li>`selectWidth` & `selectHeight` - an option `number` props that you can pass to change the width or height of the select.
  By default `selectWidth = 250px`, `selectHeight = 30px`.
  </li>
  <li>`optionSize` & `selectedSize` an option `number` props that you can pass to change font size of the option or selected element.
  By default `optionSize = 16px`, `selectedSize = 16px`.
  </li>
  <li>`fullWidth` = an option `boolean` prop that you can pass to make select element full width. By default `false`.
  if `fullWidth = true` will ignore `selectWidth` & `selectHeight` props.
  </li>
  <li>`optionsListMaxHeight` - an option `number` prop that you can pass to change the max height of the dropdown overlay.
  By default `optionsListMaxHeight = 300px`.
  </li>
  <li>`disabled` = an option `boolean` prop that you can pass to disable select element.
  </li>
  <li>`id` = an option `string` prop that you can pass to container element.
  </li>
  <li>`classes` = an option `object` prop that you can pass to rewrite default classes.
  </li>
  <li></li>
</ul>

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
