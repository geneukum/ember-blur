```handlebars
<h1 {{blur shouldBlur=this.shouldBlur transition='all 1s ease-in-out'}}>
  Hello World
</h1>

<button {{on 'click' this.toggleBlur}}>
  Toggle Blur Effect
</button>
```

The [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) named argument allows you to define the transition between two states of the element.
