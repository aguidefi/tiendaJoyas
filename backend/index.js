import express from 'express';
import routes from './routes/router.js'
import cors from 'cors';
import { serverMiddleware } from './middleware/middleware.js';

const app = express();

const port = 3000;

//Middleware
app.use(express.json());
app.use(cors());
app.use(serverMiddleware);

//Routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
})