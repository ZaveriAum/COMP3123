const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    // http://localhost:3000/
    if(req.method === 'GET' && req.url === '/') {
        res.write('<h1>Home Page</h1>');
        res.end();
        return;
    }

    // http://localhost:3000/hello
    if( req.method === 'GET' && req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World!</h1>');
        res.end();
        return;
    }

    // http://localhost:3000/about
    if(req.url === '/about') {
        res.write('<h1>About Us</h1>');
        res.end();
        return;
    }

    // http://localhost:3000/contact
    if(req.url === '/contact') {
        res.write('<h1>Contact Us</h1>');
        res.end();
        return;
    }

    if(req.url == '/request'){
        res.write()
        res.end()
        return;
    }

    if( req.method === 'POST' && req.url === '/student') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const stud = {
            name: 'John Doe',
            age: 20,
        }
        res.write(JSON.stringify(stud));
        res.end();
        return;
    }
    res.end(`Invalid URL: ${req.url}`);
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on port 3000');
})
