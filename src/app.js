const express = require('express');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const { connectionDB } = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

connectionDB();

app.use(express.json());

app.use(`/alumnos`, studentRoutes);
app.use(`/profesores`, teacherRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
