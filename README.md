# jeedom-custom-theme

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build --prod
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Deployment
Copy the dist folder content in a custom_theme folder in root Jeedom installation folder.

In Jeedom, create a new dashboard. Add a text/html element.

Create a div in this element like this :
```
<div id="custom_theme">

</div>
<script src="custom_theme/start.js"></script>
```
Copy/paste all link tag, the app div and all script tag from custom_theme/index.html to content of custom_theme div content.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
