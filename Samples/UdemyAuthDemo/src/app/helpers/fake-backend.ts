import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkbXl0cm8udHNpbmlhdnNreWlAZ21haWwuY29tIiwianRpIjoiYjRjYTJlOGUtMDM0YS00ODg3LThiY2YtMmVjNGEzOWZiMWQxIiwiaWF0IjoxNTIyNDM0MTY5LCJyb2wiOiJhcGlfYWNjZXNzIiwiaWQiOiJkM2Y5Y2JlYy0yNjk0LTRlYmQtOGE1MC03MWJiZWJkZWNmYTAiLCJuYmYiOjE1MjI0MzQxNjgsImV4cCI6MTUyMjQ0MTM2OCwiaXNzIjoiQW5ndWxhckNvcmVXZWJBcGkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjM2MTg1LyJ9.VsiVoiUVlV2WQ9gyQ3vlnRi4TEhM3qSpVMmR8LG7Wmo';

    backend.connections.subscribe((connection: MockConnection) => {
      // We are using the setTimeout() function to simulate an asynchronous call 
      // to the server that takes 1 second. 
      setTimeout(() => {
        //
        // Fake implementation of /api/authenticate
        //
        if (connection.request.url.endsWith('/api/authenticate') && 
            connection.request.method === RequestMethod.Post) {
            let body = JSON.parse(connection.request.getBody());

            if (body.email === 'dmytro.tsiniavskyi@gmail.com' && body.password === '1234') {
              connection.mockRespond(new Response(
                new ResponseOptions({ 
                  status: 200, 
                  body: { token: token }
                })
              ));
            } else {
              connection.mockRespond(new Response(
                new ResponseOptions({ status: 200 })
              ));
            }
        }
        


        // 
        // Fake implementation of /api/orders
        //
        if (connection.request.url.endsWith('/api/orders') && connection.request.method === RequestMethod.Get) {
            if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200, body: [1, 2, 3] })
                ));
            } else {
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 401 })
                ));
            }
        }     
          
        

      }, 1000);
    });
 
    return new Http(backend, options);
}
 
export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};