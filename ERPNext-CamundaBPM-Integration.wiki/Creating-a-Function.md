For this documentation, we will use Node 12.x (with openfaas templates) , but the Zeebe Library is available in Java and Javascript languages.

## Pre-requisites

To create a function (micro service) is necessary create a template function with openfaas, other ways are possibles but for this example this tool will be used.

### Getting started with openfaas

To create a functions with open-faas:

```
faas-cli new <function-name> --lang <language>
```

Then, this generate an endpoint with an unique route, so, all of the code will be made in the <function-name>/handler.js

This template have this appearance:

```
'use strict'

module.exports = async (event, context) => {
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"]
  }

//function stuff goes here

  return context
    .status(200)
    .succeed(result)
}
```

So, we will create the function inside the body preserving the asynchrony between services.

### Zeebe-node installation 

For first, we need install the following npm packages:

```
npm install zeebe-node -s
npm install body-parser -s
```

Next, we can create some code follow the [docs](https://github.com/camunda-community-hub/zeebe-client-node-js)

## General Structure for a worker function

To create a node function and associates to task in Zeebe is necessary set up the credentials and instantiate a Zeebe Client in the function execution, like the next structure:

```
const { ZBClient } = require('zeebe-node')

const zbc = new ZBClient("my-broker-with-basic-auth.io:443", {
	basicAuth: {
		username: "user1",
		password: "secret",
	},
	useTLS: true
}
```

Or can use Oauth

```
const { ZBClient } = require('zeebe-node')

const zbc = new ZBClient("my-secure-broker.io:443", {
	oAuth: {
		url: "https://your-auth-endpoint/oauth/token",
		audience: "my-secure-broker.io",
		clientId: "myClientId",
		clientSecret: "randomClientSecret",
		cacheOnDisk: true
	}
}
``` 

And this is the authentication with Camunda Cloud

```
const { ZBClient } = require('zeebe-node')

const zbc = new ZBClient({
	camundaCloud: {
		clientId,
		clientSecret,
		clusterId,
	},
})
```

Also, there is a way to create a function without credentials nor login items 

```
const { ZBClient } = require('zeebe-node')

const zbc = new ZBClient()
```
