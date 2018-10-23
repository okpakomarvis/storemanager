 ```
 Store Manager
 
 ```
[![Coverage Status](https://coveralls.io/repos/github/okpakomarvis/okpakomarvis.github.io/badge.svg?branch=API)](https://coveralls.io/github/okpakomarvis/okpakomarvis.github.io?branch=API)
[![Build Status](https://travis-ci.org/okpakomarvis/okpakomarvis.github.io.svg?branch=API)](https://travis-ci.org/okpakomarvis/okpakomarvis.github.io)
[![Code Climate](https://codeclimate.com/github/cloudfoundry/membrane.png)](https://codeclimate.com/github/cloudfoundry/membrane)

What Does this app do?

	Store Manager is an inventory management app use to keep sales products records for a small.

Description of task to be completed?
-	Get /api/v1/products
-   Get /api/v1/sales
-	Post /api/v1/sales
-	Post /api/v1/products
-	Get /api/v1/products/:id
-	Put /api/v1/products/:id
-	Delete /api/v1/products/:id

How to Use the App
	After cloning the repo cd into it and install the folllowing dependencies
- Install Node js
```
   npm install -g n

```
- install express

```
   npm install -save express

```
- install body-parser
```
npm install -save body-parser

```
- intall morgan
```
npm install -save morgan

```
- install babel dev dependency
```
npm install -save babelCli babel-preset-env babel-preset-stage-2

```
- install mocha dev dependency
```
npm install -save chai-http chai mocha

```
How should this be Manually tested?

	After cloning the repo cd into it and run npm dist/test/

	Using postman test all the listed endpoint above

Pivotal tracker story
#160774187
