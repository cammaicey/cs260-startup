# Service Design

## Model and Sequence Diagrams
- model the application's primary objects and the interactions of the objects
- avoid introducing a model that focuses on programming constructs and infrastructure
- example, a chat program should model participants, conversations, and messages
- once primary objs define, sequence diagrams that show how the objects interact with each other

![example diagram](https://github.com/webprogramming260/.github/raw/main/profile/webServices/design/webServicesSequenceDiagram.jpg)

## Leveraging HTTP
- HTTP verbs such as GET, POST, PUT, and DELETE often mirror the designed actions of a web service
- use provided technologies so you don't have to recreate
    - caching servers that increase your performance, edge servers that bring your content closer, and replication servers that provide redundant copies of your content and make your application more resilient to network failures

![diagram](https://github.com/webprogramming260/.github/raw/main/profile/webServices/design/webServicesHTTPServices.jpg)

## Endpoints
- web service usually divided into multiple service endpoints
- each one provides single functional service
- criteria that you would apply to creating well designed code functions also applies when exposing service endpoints

![enpoints](https://github.com/webprogramming260/.github/raw/main/profile/webServices/design/webServicesHTTPEndpoints.jpg)
- endpoints are often called `Application Programming Interface` API
- sometimes API refers to the entire collection of endpoints, and sometimes it is used to refer to a single endpoint
- consider when designing your service's endpoints
    - **Grammatical**: HTTP everything is a resource, act on the resource with an HTTP verb, example, an order resource that is contained in a store resource then you create, get, update, and delete order resources on the store resource
    - **Readable**: clearly readable in URL path, example, order resource might contain the path to both the order and store where the order resource resides `/store/provo/order/28502`
    - **Discoverable**: provide the endpoints for the aggregated resources, someone using your endpoints only needs to remember the top level endpoint, example, store endpoint that returns information about a store you can include an endpoint for working with a store in the response
    ```
    GET /store/provo  HTTP/2
    ```
    ```
    {
    "id": "provo",
    "address": "Cougar blvd",
    "orders": "https://cs260.click/store/provo/orders",
    "employees": "https://cs260.click/store/provo/employees"
    }
    ```
    - **Compatible**: make it so that you can add new functionality without breaking existing clients, clients of your service endpoints should ignore anything that they don't understand, consider the two following JSON response
    - V1
    ```
    {
    "name": "John Taylor"
    }
    ```
    - V2
    ```
    {
    "name": "John Taylor",
    "givenName": "John",
    "familyName": "Taylor"
    }
    ```
    - adding new rep of `name` field, there is new functionality for clients that know how to use the new fields without harming older clients that ignore the new fields and simply use the old representation
    - you want to keep compatibility with at least one prev version of endpoint so that there is time for all clients to migrate before compatibility is removed
    - **Simple**: keep endpoints focused on primary resources of app helps to avoid the temptation to add endpoints that duplicate or create parallel access to primary resources, write some simple class and sequence diagrams that outline your primary resources before you begin coding, focus on the actual resources of the system you are modeling, not focus on the data structure or devices used to host the resources, one way to act on a resource, endpoints should only do one thing
    - **Documented**: [Open API Specification](https://spec.openapis.org/oas/latest.html) good example of tooling that helps create, use, and maintain documentation of your service endpoints, make use of such tools in order to provide client libraries for your endpoints and a sandbox for experimentation, initial draft of your endpoint documentation before you begin coding will help you mentally clarify your design
- many models for exposing endpoints, three common ones, RPC, REST, and GraphQL

## RPC
- `Remote Procedure Calls` (RPC) expose service endpoints as simple func calls
- RPC used over HTTP leverages POST HTTP verb
- actuals verb and sub of func call repped by func name
- example, `deleteOrder` or `updateOrder`, name of func either entire path of URL or param in POST body
```
POST /updateOrder HTTP/2

{"id": 2197, "date": "20220505"}
```
or
```
POST /rpc HTTP/2

{"cmd":"updateOrder", "params":{"id": 2197, "date": "20220505"}}
```
- advantage of RPC is that it maps directly to function calls that might exist within the server
    - could be considered a disadvantage as it directly exposes the inner workings of the service, and thus creates a coupling between the endpoints and the implementation

## REST
- `Representational State Transfer` (REST) attempts to take advantage of the foundational principles of HTTP
- REST HTTP verbs always act upon a resource
- ops on a resource will impact state of resource as it is transferred by REST endpoint calls
- allows for caching functionality of HTTP to work optimal
- example, GET always return same resource until a PUT is executed on resource
- PUT is used, cached resource is replaced with updated resource
- REST the updateOrder endpoint would look like
```
PUT /order/2197 HTTP/2

{"date": "20220505"}
```
- proper HTTP verb is used and the URL path uniquely identifies the resource
- seem like small differences, but maximizing HTTP pays dividends by making it easy

## GraphQL
- focuses on the manipulation of data instead of a function call (RPC) or a resource (REST)
- heart of GraphQL is a query that specifies the desired data and how it should be joined and filtered
- addresses frustration concerning the massive number of REST, or RPC calls
- instead of making a call for getting a store, and a bunch of calls for getting the store's orders and employees, GraphQL sends a single query that requests all of that info in one big JSON response
- server would examine the query, join the desired data, and then filter out anything that was not wanted
- example
```
query {
  getOrder(id: "2197") {
    orders(filter: {date: {allofterms: "20220505"}}) {
      store
      description
      orderedBy
    }
  }
}
```
- helps to remove a lot of the logic for parsing endpoints and mapping requests to specific resources
- only one endpoint, query endpoint
- downside of that flexibility is that the client now has significant power to consume resources on the server
- no clear boundary on what, how much, or how complicated aggregation of data is
- difficult for the server to implement authorization rights to data as they have to be baked into the data schema, standards for how to define a complex schema
- common GraphQL packages provide support for schema implementations along with database adaptors for query support