# app.esx
jspm, systemjs, traceur, knockout 

#es6 modular application
* run modular es6 in browser
* tested on chrome v44, edge 

# install / run localhost:8080 
```shell
npm install -g jspm
npm install -g http-server
jspm config local
jspm install
http-server .
```

# build / bundle (not required)
```shell
jspm clear
jspm dl-loader babel 
jspm bundle ApplicationViewModel dist/app.js -minify
```

