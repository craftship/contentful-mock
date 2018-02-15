# Contentful Mock API

![Contentful Mock Logo](https://s3-eu-west-1.amazonaws.com/learn.craftship.io/contentful-mock.png)

### Overview
This project aims to support developers using the contentful API.  Rather than having to always be online when developing applications this in memory database mock aims to ease the pain.

Its main aims are to help provide a simple way to mock out data as well as supporting fast automated tests with predictable scenarios.

### Getting Started

* Create a folder in the root of your project called `.contentful` ([example](https://github.com/craftship/contentful-mock/tree/master/tests/.contentful) here)
* Add a script to you project package.json `contentful-mock`
* Contentful mock server will be running on 8090

### Coming Soon

* Docker container that allows a simple copy of your `.contentful` mock yaml data folder
* Support for many more of the API endpoints see [tests](https://github.com/craftship/contentful-mock/blob/master/tests/integration/index.js) for status
