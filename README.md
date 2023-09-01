# React Native component for rendering mathematical expressions in HTML using the power of MathJax without WebView

An essential React Native component for rendering mathematical expressions in HTML using the power of MathJax. Harness the capabilities of MathJax effortlessly. Supercharge your app with effortless MathJax functionality, all without the need for react-native-webview.

With this component, you can convert TeX or LaTeX equations to SVG and HTML to native <Text/> components effortlessly.

## Installation

#### With react-native-cli
```bash
$ yarn add react-native-mathjax-text-svg
```
```bash
$ yarn add react-native-svg
```
```bash
$ cd ios && pod install
```
#### With expo-cli
```bash
$ expo install react-native-mathjax-text-svg 
```
```bash
$ expo install react-native-svg
```

## Usage
**Please note that this component only accepts in-line mathematics.** [Learn more](http://docs.mathjax.org/en/latest/basic/mathematics.html)
```jsx
import { MathJaxSvg } from 'react-native-mathjax-text-svg';
...

<MathJaxSvg 
  fontSize={16}
  color="red"
  fontCache={true}
>
  {'$$4sen(α)cos^2(α/2)$$'}
</MathJaxSvg>
```
## Using TeX or LaTeX with html
```jsx
import { MathJaxSvg } from 'react-native-mathjax-text-svg';

return (
  ...

<MathJaxSvg 
  fontSize={16}
  color="#000000"
  fontCache={true}
>
  {`
    <p>When \\(a \\ne 0\\), there are <u>two solutions</u> to \\(ax^2 + bx + c = 0\\) <span style="color:red;">and</span> they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$</p>
    <b>In-line Mathematics</b><br/><p>Finally, while display equations look good for a page of samples, the ability to mix math <mark>and text in a paragraph is also important.</mark><br/><b>This expression \\(\\sqrt{3x-1}+(1+x)^2\\) is an <span style="color:red;font-style:italic;">example of an inline equation</span>.</b>As you see, MathJax equations can be used this way as well, without unduly disturbing the <s>spacing between lines</s>.</p>
  `}
</MathJaxSvg>
  ...
);
```
### Output
<img width="600" src="https://raw.githubusercontent.com/oguzhankurumm/react-native-mathjax-text-svg/main/export.png"/>

|  Props            | Default                    | Description                             |
| ----------------- | -------------------------- | --------------------------------------- |
|  fontSize         | 14                         | The font size for displaying the formula. Note that it will also apply to regular text. Regular text can accept inline styles if HTML has inline styles.        |
|  color            | "#000000"                  | The color of the formula to display. Note that it will also apply to regular text. Regular text can accept inline styles if HTML has inline styles.             |
|  fontCache        | false                      | MathJax will cache font paths on an expression-by-expression basis (each expression has its own cache within the SVG image itself), which makes the SVG self-contained, but still allows for some savings if characters are repeated.               |
|  style            | `{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', flexShrink: 1 } `          | Container style             |


[comment]: <> (## Example)

[comment]: <> ([https://github.com/railsjack/demo-app-for-mathjax]&#40;https://github.com/railsjack/demo-app-for-mathjax&#41;)
