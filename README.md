# google-err v1.0.0
<img alt="npm" src="https://img.shields.io/npm/dt/google-err?style=for-the-badge">
Search the web for your errors and/or queries directly from console.

# Installation
Global installation is recommended. Using npm: <br>
`$ npm i -g google-err` <br>
`$ npm i -g --save google-err` for node version < 5.0.0

# Usage
`$ err query` <br>
Replace query with your query / error. (Copy your error and paste using `Ctrl + Shift + V` or `Right click`.)

# Modifying your search engine
- Navigate to `node_modules` folder in your project
- Find the folder named `google-err`
- Navigate to `bin/index.js`
- Replace `google.com` with `your_preferred_search_engine.com`
- Type away !
- Note: You may have to further modify the `url` template literal for some search engines.
