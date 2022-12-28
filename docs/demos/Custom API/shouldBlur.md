```handlebars
<h1 {{blur shouldBlur=this.shouldBlur}}>
  Hello World
</h1>

<button {{on 'click' this.toggleBlur}}>
  Toggle Blur Effect
</button>
```

The `shouldBlur` named argument allows you to toggle the blurring effect on and off.
