require('dotenv').config();

const express = require("express");
const path = require("path");
const { createServer } = require("http");

const usersRouter = require("./server/routes/users.router.js");
const adminRouter = require("./server/routes/admin.router.js");
const servicesRoutes = require("./server/routes/service.router.js");
const { initSocketInstance } = require("./server/services/socket.service.js");

const PORT = 5057;

const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
app.use("/app_admin", express.static(path.join(__dirname, "app_admin")));
app.use("/app_user", express.static(path.join(__dirname, "app_user")));

// Routes
app.use("/", usersRouter);
app.use("/", adminRouter);
app.use("/", servicesRoutes);

// Services
initSocketInstance(httpServer);

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
