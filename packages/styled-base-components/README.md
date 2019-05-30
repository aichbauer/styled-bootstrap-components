# styled-base-components

[![npm](https://img.shields.io/npm/v/styled-base-components.svg?style=flat-square)](https://www.npmjs.com/package/styled-base-components)
[![Travis branch](https://img.shields.io/travis/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/styled-bootstrap-components)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/styled-bootstrap-components/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/styled-bootstrap-components)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://aichbauer.github.io/styled-bootstrap-components)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) base components made with [styled-components](https://styled-components.com).

## Table of Contents

* [Documentation](https://aichbauer.github.io/styled-bootstrap-components)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Related](#related)
* [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is built with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` > v4. To use this component you also need to `npm i styled-components -S`.

```sh
$ npm i styled-base-components -S
```

or

```sh
$ yarn add styled-base-components
```

## Usage

> This package contains basic global style for bootstrap layouts and
> styled components for using `utility` classes from bootstrap.

```jsx
/*
  if you installed `styled-bootstrap-components` use

    import { BootstrapBaseCss } from 'styled-bootstrap-components'

  instead.
*/
import { styled } from 'styled-components';
import { BootstrapBaseCss, Div, Utilities } from 'styled-base-components';

// Same as imported <Div> components, but you may want to use this for
// styling existing components.
const MyComponent = styled.div`
  ${Utilities};
`;


const App = (props) => (
  <div>
    <BootstrapBaseCss />
    {/*
      Use plain HTML
      e.g. <h4>Hello World</h4>
      these HTML uses the bootstrap
      styles for h4 now
    */}
    <Div bgDark textLight p2>
      Hello World
    </Div>
  <div>
);
```

## Properties

Possible values for `{size}`:

* nothing (for `xs`)
* `Sm` (for `sm`)
* `Md` (for `md`)
* `Lg` (for `lg`)
* `Xl` (for `xl`)

### Utilities

* vertical-align:
  * `text{size}Baseline`
  * `text{size}Top`
  * `text{size}Bottom`
  * `text{size}TextTop`
  * `text{size}TextBottom`
* text-align:
  * `text{size}Justify`
  * `text{size}Left`
  * `text{size}Right`
  * `text{size}Center`
* white-space:
  * `text{size}Wrap`
  * `text{size}NoWrap`
* text-transform:
  * `text{size}Lowercase`
  * `text{size}Uppercase`
  * `text{size}Capitalize`
* font-weight:
  * `text{size}WeightBold`
  * `text{size}WeightBolder`
  * `text{size}WeightNormal`
  * `text{size}WeightLight`
  * `text{size}WeightLighter`
* font-style:
  * `text{size}Italic`
* font-family:
  * `text{size}Monospace`
* color:
  * `text{size}Primary`
  * `text{size}Secondary`
  * `text{size}Success`
  * `text{size}Danger`
  * `text{size}Warning`
  * `text{size}Info`
  * `text{size}Light`
  * `text{size}Dark`
  * `text{size}Darker`
  * `text{size}Reset`
* background-color:
  * `bg{size}Primary`
  * `bg{size}Secondary`
  * `bg{size}Success`
  * `bg{size}Danger`
  * `bg{size}Warning`
  * `bg{size}Info`
  * `bg{size}Light`
  * `bg{size}Dark`
  * `bg{size}Darker`
  * `bg{size}White`
  * `bg{size}Transparent`
* text-decoration:
  * `textDecoration{size}None`
* word-break + overflow-wrap:
  * `text{size}WordBreak`
* (max-)width/height:
  * `w{size}100` (width: 100%)
  * `w{size}75` (width: 75%)
  * `w{size}50` (width: 50%)
  * `w{size}25` (width: 25%)
  * `h{size}100` (height: 100%)
  * `h{size}75` (height: 75%)
  * `h{size}50` (height: 50%)
  * `h{size}25` (height: 25%)
  * `mw{size}100` (max-width: 100%)
  * `mw{size}75` (max-width: 100%)
  * `mw{size}50` (max-width: 100%)
  * `mw{size}25` (max-width: 100%)
  * `mh{size}100` (max-height: 25%)
  * `mh{size}75` (max-height: 25%)
  * `mh{size}50` (max-height: 25%)
  * `mh{size}25` (max-height: 25%)
* box-shadow:
  * `shadow{size}None`
  * `shadow{size}Small`
  * `shadow{size}`
  * `shadow{size}Large`
* position:
  * `position{size}Static`
  * `position{size}Relative`
  * `position{size}Absolute`
  * `position{size}Fixed`
  * `position{size}Sticky`
* overflow:
  * `overflow{size}Auto`
  * `overflow{size}Hidden`
* float:
  * `float{size}Right`
  * `float{size}Left`
  * `float{size}None`
* border:
  * `borderLeft{size}`
  * `borderRight{size}`
  * `borderTop{size}`
  * `borderBottom{size}`
  * `border{size}`
  * `borderLeft{size}0`
  * `borderRight{size}0`
  * `borderTop{size}0`
  * `borderBottom{size}0`
  * `border{size}0`
* border-color:
  * `border{size}Primary`
  * `border{size}Secondary`
  * `border{size}Success`
  * `border{size}Danger`
  * `border{size}Warning`
  * `border{size}Info`
  * `border{size}Light`
  * `border{size}Dark`
  * `border{size}Darker`
* border-radius:
  * `roundedTop{size}`
  * `roundedBottom{size}`
  * `roundedLeft{size}`
  * `roundedRight{size}`
  * `rounded{size}`
  * `rounded{size}Circle`
  * `rounded{size}Pill`
* display
  * `d{size}None`
  * `d{size}Inline`
  * `d{size}InlineBlock`
  * `d{size}Block`
  * `d{size}Table`
  * `d{size}TableCell`
  * `d{size}TableRow`
  * `d{size}Flex`
  * `d{size}InlineFlex`
* flex-direction:
  * `flex{size}Row`
  * `flex{size}RowReverse`
  * `flex{size}Column`
  * `flex{size}ColumnReverse`
* justify-content:
  * `justifyContent{size}Start`
  * `justifyContent{size}End`
  * `justifyContent{size}Center`
  * `justifyContent{size}Between`
  * `justifyContent{size}Around`
* align-items:
  * `alignItems{size}Start`
  * `alignItems{size}End`
  * `alignItems{size}Center`
  * `alignItems{size}Baseline`
  * `alignItems{size}Stretch`
* align-self:
  * `alignSelf{size}Start`
  * `alignSelf{size}End`
  * `alignSelf{size}Center`
  * `alignSelf{size}Baseline`
  * `alignSelf{size}Stretch`
* align-content:
  * `alignContent{size}Start`
  * `alignContent{size}End`
  * `alignContent{size}Center`
  * `alignContent{size}Baseline`
  * `alignContent{size}Stretch`
* order:
  * `order{size}0`
  * `order{size}1`
  * `order{size}2`
  * `order{size}3`
  * `order{size}4`
  * `order{size}5`
  * `order{size}6`
  * `order{size}7`
  * `order{size}8`
  * `order{size}9`
  * `order{size}10`
  * `order{size}11`
  * `order{size}12`
* flex-grow:
  * `flexGrow{size}1`
  * `flexGrow{size}0`
* flex-shrink:
  * `flexShrink{size}1`
  * `flexShrink{size}0`
* flex-wrap:
  * `flexWrap{size}`
  * `flexNoWrap{size}`
  * `flexNoWrap{size}Reverse`
* visibility:
  * `visible{size}`
  * `invisible{size}`
* Clearfix
  * `clearfix{size}`
* Truncate text
  * `text{size}Truncate`
* Hide text
  * `text{size}Hide`

### Spacing

Possible properties:

* `m` => margin
* `p` => padding

Possible property directions:

* `l` => left
* `r` => right
* `t` => top
* `b` => bottom
* `x` => left and right
* `y` => top and bottom

Possible values for spacing:

* `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`

> Results in "`value * 0.25`rem"

Possible values for margin only:

* `n0`, `n1`, `n2`, `n3`, `n4`, `n5`, `n6`, `n7`, `n8`, `n9`
* `Auto`

> `n` means negative

Spacing props has format:

```text
{property}{direction}{size}{value}
```

Examples:

```text
m1 (margin: 1*0.25rem)
mb3 (margin-bottom: 3*0.25rem)
mbn3 (margin-bottom: -3*0.25rem)
my3 (margin-top: 3*0.25rem; margin-bottom: 3*0.25rem)
pr2 (padding-right: 2*0.25rem)
pMd5 (@media (min-width: medium-screen-size) { padding: 5*0.25rem;})
```

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)

## License

MIT © Lukas Aichbauer
