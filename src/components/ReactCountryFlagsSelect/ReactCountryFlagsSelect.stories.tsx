// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import ReactCountryFlagsSelect, { Props } from ".";

export default {
  title: "React-country-flags-select",
  component: ReactCountryFlagsSelect,
  argTypes: {
    searchable: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
      description: "Make the select searchable or not.",
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "Full width prop",
    },
    selectHeight: {
      table: { disable: true },
    },
    selectWidth: {
      table: { disable: true },
    },
    optionsListMaxHeight: {
      table: { disable: true },
    },
    optionSize: {
      table: { disable: true },
    },
    selectedSize: {
      table: { disable: true },
    },
    disabled: {
      table: { disable: true },
    },
    clearIcon: {
      table: { disable: true },
    },
    searchPlaceholder: {
      table: { disable: true },
    },
    selectPlaceholder: {
      table: { disable: true },
    },
    labelWithCountryCode: {
      table: { disable: true },
    },
    labelOnlyCountryCode: {
      table: { disable: true },
    },
    selected: {
      table: { disable: true },
    },
    onSelect: {
      table: { disable: true },
    },
    customCountries: {
      table: { disable: true },
    },
    customLabelOptions: {
      table: { disable: true },
    },
    classes: {
      table: { disable: true },
    },
    CustomOpenIcon: {
      table: { disable: true },
    },
    CustomCloseIcon: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof ReactCountryFlagsSelect>;

const Template: ComponentStory<typeof ReactCountryFlagsSelect> = (
  args: Props
) => {
  const [selected, setSelected] = useState<Props["selected"]>(args.selected);
  const onSelect = (code: Props["selected"]): void => setSelected(code);

  return (
    <div style={{ width: "calc(100vw - 2rem)" }}>
      <ReactCountryFlagsSelect
        selected={selected}
        onSelect={onSelect}
        searchable={args.searchable}
        fullWidth={args.fullWidth}
        customCountries={args.customCountries}
        customLabelOptions={args.customLabelOptions}
        disabled={args.disabled}
        clearIcon={args.clearIcon}
        searchPlaceholder={args.searchPlaceholder}
        selectPlaceholder={args.selectPlaceholder}
        labelWithCountryCode={args.labelWithCountryCode}
        labelOnlyCountryCode={args.labelOnlyCountryCode}
        selectWidth={args.selectWidth}
        selectHeight={args.selectHeight}
        optionsListMaxHeight={args.optionsListMaxHeight}
        optionSize={args.optionSize}
        selectedSize={args.selectedSize}
        id={args.id}
      />
    </div>
  );
};

export const DefaultReactCountryFlagsSelect = Template.bind({});
DefaultReactCountryFlagsSelect.argTypes = {
  disabled: {
    control: {
      type: "boolean",
    },
    defaultValue: false,
    description: "Disabled prop",
    table: { disable: false },
  },
  clearIcon: {
    control: {
      type: "boolean",
    },
    defaultValue: true,
    description: "show or hide clear icon",
    table: { disable: false },
  },
  searchPlaceholder: {
    control: {
      type: "text",
    },
    defaultValue: "Type or select a country...",
    description: "Search placeholder",
    table: { disable: false },
  },
  selectPlaceholder: {
    control: {
      type: "text",
    },
    defaultValue: "Select a country",
    description: "Select placeholder",
    table: { disable: false },
  },
  selectWidth: {
    control: {
      type: "number",
    },
    defaultValue: 250,
    description:
      "Set the width of the select (Doesn't work with fullWidth prop)",
    table: { disable: false },
  },
  selectHeight: {
    control: {
      type: "number",
    },
    defaultValue: 30,
    description:
      "Set the height of the select (Doesn't work with fullWidth prop)",
    table: { disable: false },
  },
  optionsListMaxHeight: {
    control: {
      type: "number",
    },
    defaultValue: 300,
    description: "Set the max height of the options list overlay)",
    table: { disable: false },
  },
  optionSize: {
    control: {
      type: "number",
    },
    defaultValue: 16,
    description: "Set the font-size of the option)",
    table: { disable: false },
  },
  selectedSize: {
    control: {
      type: "number",
    },
    defaultValue: 16,
    description: "Set the font-size of the select)",
    table: { disable: false },
  },
};

export const WithCustomLabelOptions = Template.bind({});
WithCustomLabelOptions.argTypes = {
  customCountries: {
    control: { type: "object" },
    defaultValue: {
      US: "United States",
      AF: "Afghanistan",
      AL: "Albania",
      DZ: "Algeria",
    },
    description: "Add your own country list",
    table: { disable: true },
  },
  customLabelOptions: {
    control: { type: "object" },
    defaultValue: {
      US: "U*S*A",
    },
    description: "Change the label option value",
    table: { disable: false },
  },
};

export const WithCustomCountries = Template.bind({});
WithCustomCountries.argTypes = {
  customCountries: {
    control: { type: "object" },
    defaultValue: {
      US: "United States",
      AF: "Afghanistan",
      AL: "Albania",
      DZ: "Algeria",
    },
    description: "Add your own country list",
    table: { disable: false },
  },
};

export const WithLabelWithCountryCode = Template.bind({});
WithLabelWithCountryCode.argTypes = {
  labelWithCountryCode: {
    control: {
      type: "boolean",
    },
    defaultValue: true,
    description: "Label include Country Codes",
    table: { disable: false },
  },
};

export const WithLabelOnlyCountryCode = Template.bind({});
WithLabelOnlyCountryCode.argTypes = {
  labelOnlyCountryCode: {
    control: {
      type: "boolean",
    },
    defaultValue: true,
    description: "Label include only Country Codes",
    table: { disable: false },
  },
};
