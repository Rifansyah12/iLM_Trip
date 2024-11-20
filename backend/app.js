import express from 'express';
import fileUpload from 'express-fileupload';

import cobaRoutes from './routes/cobaRoutes.js';
import bodyParser from 'body-parser';

const app = express();

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Middleware untuk file upload
app.use(fileUpload());

// Gunakan route coba
app.use('/api', cobaRoutes);

// Tentukan port aplikasi
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
