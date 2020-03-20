const express = require ('express');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');
const cors = require ('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:/pensabem', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

requireDir('./src/models');

app.use('/sistema', require('./src/routes/routes'));
app.listen(3001);