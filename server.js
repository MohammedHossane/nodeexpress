var express = require('express');
var path = require('path')

var app = new express();
var port = 3000;


app.get('/home', (req, res) => {


    res.sendFile(path.join(__dirname + '/component/home.html'));
});

app.get('/about', (req, res) => {


    res.sendFile(path.join(__dirname + '/component/about.html'));
});

app.get('/contact', (req, res) => {


    res.sendFile(path.join(__dirname + '/component/contact.html'));
});

app.get("/", (req, res) => {
    res.status(401).sendFile(path.join(__dirname + '/component/error.html'));
})
// res.send(401, 'error');

// app.use((req, res, next) => {
//     const err = new Error("Unauthorized")
//     err.status = 401
//     next(err)


// });


// app.use((err, req, res, next) => {
// res.status(err.status || 500)
// res.send({
//     error: {
//         status: err.status || 500,
//         message: "Unauthorized Access"
//     }
// })
// });


// res.status(401).send('No access!');

// // OR:

// res.send(401, 'No access!');

// const express = require('express');

// const app = express();

// const ProductRoute = require ('./Routes/Product.route')
// app.use('/products', ProductRoute);


// app.use((req, res, next) => {
// const err = new Error('Not found');
// err.status = 404;
// next(err);
// });

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send({
//         error: {
//             status: err.status || 500,
//             message: err.message
//         }
//     });
// });

app.listen(3000, () => {
    console.log('Server started on port 3000...')
});