import './dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import authenticateUserRoute from './routes/user/authenticate';
import logoutUserRoute from './routes/user/logout';
import verifyUserRoute from './routes/user/verify';

const baseUrl = '/api/v1';
const PORT = process.env.PORT || 3030;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(`${baseUrl}/user`, authenticateUserRoute);
app.use(`${baseUrl}/user`, logoutUserRoute);
app.use(`${baseUrl}/user`, verifyUserRoute);

// Catchs all errors thrown and sends them
// as part of the response object
app.use((error, req, res, next) => {
  res.status(500).send({ error: error.message });
});

app.listen(PORT, () => {
  console.log('App listening on:', PORT);
});
