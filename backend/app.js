import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/database.js";
import initRelationships from "./models/relashionship.js";

import SequelizeStore from "connect-session-sequelize";
import DestinasiRoute from "./routes/DestinasiRoutes.js";
import AdminRoute from "./routes/AdminRoutes.js";
import MountaintripRoute from "./routes/MountaintripRoutes.js";
import AnothertripRoute from "./routes/AnotherRoutes.js";
import PendaftranpesertaRoute from "./routes/Pendaftaranpeserta.js";
import Blog from "./routes/blogRoutes.js";
import Product from "./routes/ProductRoutes.js";

dotenv.config();
const app = express();

// membuat store session
const sessionStore = new SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// untuk mengecek apakah database terhubung

// async function initializeDatabase() {
//   try {
//     await db.authenticate();
//     console.log("Database Connected..");

//     await db.sync({ alter: true });
//     console.log("Data dimodel telah dibuat ...");
//   } catch (error) {
//     console.log("Database tidak terhubung..", error);
//   }
// }

// initializeDatabase();

initRelationships();
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(fileUpload());

// membuat statik file agar image bisa diakses di browser
app.use(express.static("public"));
app.use(DestinasiRoute);
app.use(AdminRoute);
app.use(MountaintripRoute);
app.use(AnothertripRoute);
app.use(PendaftranpesertaRoute);
app.use(Product);
app.use(Blog);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server Running on http://localhost:${process.env.APP_PORT}`);
});
