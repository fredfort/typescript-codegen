# typescript-codegen

Use Swagger to generate TypeScript code to be used by client side applications

Using Swagger to document your API is a good practice. It helps any consumer of the API understand what data are available and how to create, read, update or delete them.

Using Swagger to generate TypeScript code is the step further to ensure front-end developers consume APIs in a type-safe way.

With the power of Swagger and TypeScript, a developer can detect any mismatch early between the frontend and backend applications. Catching bugs early before CI end-to-end tests is a huge win for frontend developers.

In this project, we can see how to generate a client side API library based on Swagger within different runtime (JAVA and node).

This library is used with React to show how easy it is to execute any API calls or even to mock them in a type safe way.

## Server side

In this demo, we will use two different runtime to show how easy it is to generate a default swagger documentation that
will help generating a TypeScript library to help the front end interacts with the API

### Sprint boot

In this example, I have created a standart Sprint boot app that exposes few endpoints.

Just adding the following gradle dependency https://github.com/springdoc/springdoc-openapi is enough to generate a swagger documentation. No work is needed to maintain the Swagger, The springdoc-openapi Java library helps automating the generation of API documentation using Spring Boot projects.

You can start the project using the following commands:

```
cd spring-boot-runtime
./gradlew bootRun
```

Check the Swagger documentation here http://localhost:8080/swagger-ui/index.html?url=/v3/api-docs

### NodeJS

TODO
