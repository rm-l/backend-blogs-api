const express = require('express');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRoutes');
const categoryRouter = require('./routes/categoryRouter');
const postsRouter = require('./routes/postsRouter');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoryRouter);

app.use('/post', postsRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
