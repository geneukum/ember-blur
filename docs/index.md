# Ember-Blur Addon

This addon provides you with an Ember modifier that allows you to blur an element dynamically.

## Installing the addon

You install this addon like any other.

```sh
ember install ember-blur
```

## Custom API options

- `filter` _String (default: 'blur(1.5px)')_: The [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) style property. The filter applies graphical effects like blur or color shift to the element.
- `opacity` _String (default: '0.5')_: The [opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) style property. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
- `shouldBlur` _Boolean (default: true)_: Whether or not the element should be blurred.
- `transition` _String (default: 'all .2s linear')_: The [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) style property. Transitions enable you to define the transition between two states of an element.

## Contributing to the addon

If you want to contribute to this project or run into a bug, please reach out on [GitHub](https://github.com/geneukum/ember-blur).
