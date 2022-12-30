# Use the default settings

```handlebars{data-execute=false}
<h1 {{blur}}>Hello World</h1>
```

# Use the custom options

- `filter` _String (default: 'blur(1.5px)')_: The graphical effects like blur or color shift applied to the element.
- `opacity` _String (default: '0.5')_: The opacity applied to the element.
- `shouldBlur` _Boolean (default: true)_: Whether the element should be blurred.
- `transition` _String (default: 'all .2s linear')_: The animated transitions between element states.

```handlebars{data-execute=false}
<h1 {{blur opacity='0.75'}}>Hello World</h1>
```
