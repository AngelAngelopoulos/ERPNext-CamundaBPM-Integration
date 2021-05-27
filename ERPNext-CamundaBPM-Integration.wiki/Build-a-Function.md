Before using the command to build the function, check the .yml file and make some modifications.

The file looks like the following:

```
version: 1.0
provider:
  name: openfaas
  gateway: 
functions:
  arrive-message:
    lang: node12
    handler: ./arrive-message
    image: 
```

In the gateway part, the address where you have OpenFaas is placed (see this [section](https://github.com/AngelAngelopoulos/ERP-BPM-integration/wiki/Open-faas-%28faas-cli%29-Environment) for more information).

In the image section, the docker hub user is placed before the function name as follows:

user / arrive-message: latest


In the package.json file you have to add the dependencies, as shown in the following code.

```
{
  "name": "openfaas-function",
  "version": "1.0.0",
  "description": "OpenFaaS Function",
  "main": "handler.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 0"
  },
  "keywords": [],
  "author": "OpenFaaS Ltd",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.19.0",
    "zeebe-node": "^0.26.0"
  }
}
```
Now you just have to place the following commands:
```
faas-cli build -f name-function.yml  
```
```
faas-cli push -f name-function.yml  
```

