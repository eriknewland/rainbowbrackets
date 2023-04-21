![new hero](https://user-images.githubusercontent.com/114263701/232826474-ba2778e6-c37f-4146-bbcc-bba9f92fb744.png)
# rainbowBrackets: a codeMirror Extension
---

This is a working attempt at a rainbowBracket extension for CodeMirror6.

### What are rainbow brackets?
Great question! Rainbow Brackets are brackets, curly braces, or parentheses that change color with scope/depth. See intelliJ's Rainbow Bracket Extension.


## Demo

![rainbow-bracket-demo-npm](https://user-images.githubusercontent.com/114263701/233111574-44b592af-70cb-4330-b65f-9410562d04ce.gif)

Live Implementation:

[CodePen GPT](https://codepengpt.netlify.app/)

## Table of Contents

- [rainbowBrackets: a codeMirror Extension](#rainbowbrackets-a-codemirror-extension)
    - [What are rainbow brackets?](#what-are-rainbow-brackets)
- [Demo](#demo)
- [Features](#features)
- [Usage/Examples](#usageexamples)
    - [@uiw/react-codemirror](#uiwreact-codemirror)
    - [codemirror package](#codemirror-package)
    - [vanilla javascript](#vanilla-javascript)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [FAQ](#faq)
    - [Does this work for controlled and uncontroleld CodeMirror Components?](#does-this-work-for-controlled-and-uncontroleld-codemirror-components)
    - [Can I change the colors?](#can-i-change-the-colors)
- [Contributing](#contributing)
- [License](#license)
- [Related](#related)
- [Closing](#closing)

## Features

- Depth/Scope detection
- 7 customizable bracket classes
- Default colors: <span style="color:red">Red</span> <span style="color:orange">Orange</span> <span style="color:yellow">Yellow</span> <span style="color:green">Green</span> <span style="color:blue">Blue</span> <span style="color:indigo">Indigo</span> <span style="color:violet">Violet</span>
- Implementation agnostic
- Theme agnostic


## Usage/Examples

Depending on your theme and extensions, the rainbowBrackets may not apply correctly as the span structure looks something like this, where the color of the inner span will override the rainbow-bracket. Investigate with Chrome Dev Tools if you're encountering a bug.

>Nearly Fixed as of 2.0.0. See updated API Reference.

```javascript
<span class="rainbow-bracket-orange">
  <span class="ͼ5k">{</span> //opening bracket displaying theme color
</span>
```

To work around this, we can add the following CSS.
```css
.rainbow-bracket-red > span {
  color: red;
}

.rainbow-bracket-orange > span {
  color: orange;
}

.rainbow-bracket-yellow > span {
  color: yellow;
}

.rainbow-bracket-green > span {
  color: green;
}

.rainbow-bracket-blue > span {
  color: blue;
}

.rainbow-bracket-indigo > span {
  color: indigo;
}

.rainbow-bracket-violet > span {
  color: violet;
}
```
This will override the inner span. Future implementations should ensure the rainbowBracket has higher precedence.

### @uiw/react-codemirror

```javascript
import rainbowBrackets from 'rainbowbrackets'

const cmExtensions = [/*Your Other Extensions */, rainbowBrackets()]

//...

<CodeMirror
  //other props
  extensions={cmExtensions}
>
```
### codemirror package
```
coming soon...handle as you would an existing extension
```
### vanilla javascript
```
coming soon...handle as you would an existing extension
```
## API Reference

#### Class Structure
##### 1.0.1

```javascript
.rainbow-bracket-red {color: 'red'}
.rainbow-bracket-orange {color: 'orange'}
.rainbow-bracket-yellow {color: 'yellow'}
.rainbow-bracket-green {color: 'green'}
.rainbow-bracket-blue {color: 'blue'}
.rainbow-bracket-indigo {color: 'indigo'}
.rainbow-bracket-violet {color: 'violet'}
```

##### 2.0.0
```javascript
.rainbow-bracket-red: { color: 'red' }
.rainbow-bracket-red > span: { color: 'red' }
.rainbow-bracket-orange: { color: 'orange' }
.rainbow-bracket-orange > span: { color: 'orange' }
.rainbow-bracket-yellow: { color: 'yellow' }
.rainbow-bracket-yellow > span: { color: 'yellow' }
.rainbow-bracket-green: { color: 'green' }
.rainbow-bracket-green > span: { color: 'green' }
.rainbow-bracket-blue: { color: 'blue' }
.rainbow-bracket-blue > span: { color: 'blue' }
.rainbow-bracket-indigo: { color: 'indigo' }
.rainbow-bracket-indigo > span: { color: 'indigo' }
.rainbow-bracket-violet: { color: 'violet' }
.rainbow-bracket-violet > span: { color: 'violet' }
```

## Development

git fork, clone, then navigate into this repository.

Install dependencies:

```bash
  npm install
```

See [Contributing](#contributing). TLDR: Make a branch with your feature name/bug fix, include detailed commit log and PR message.

## Roadmap

- More testing across a wide range of functions, scopes, languages, etc

## FAQ

#### Does this work for controlled and uncontroleld CodeMirror Components?

Yes! Although it's likely there are unknown bugs I have yet to encounter.

#### Can I change the colors?

Yes! See the API reference above. If you want to change red to pink, simply use a little CSS:
```css
.rainbow-bracket-red {
    color: pink;
}
/* Override may be neccessary as well*/
.rainbow-bracket-red > span {
    color: pink;
}

```
I'll rename these classes if enough people want color flexibility to something more intuitive.


## Contributing

See [contributing.md](contributing/contributing.md) to get started.

Please adhere to this project's `code of conduct`.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Related

[CodeMirror HomePage](https://codemirror.net/)

[CodeMirror Extensions](https://codemirror.net/docs/extensions/)

[CodeMirror Extensions Forum Discussion](https://discuss.codemirror.net/t/list-of-community-extensions/4899)

[CodeMirror-React](https://www.npmjs.com/package/@uiw/react-codemirror)

[IntelliJ RainbowBrackets](https://plugins.jetbrains.com/plugin/10080-rainbow-brackets)

## Closing

This extension is still experimental and it may not perfectly colorize scope. It still may be useful, or at least fun to use. Improvements are welcome. Big thank you to Marijn Haverbeke, the CodeMirror community, and all its contributors.