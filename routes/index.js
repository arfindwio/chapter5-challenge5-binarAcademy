const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yaml");
const fs = require("fs");
const Users = require("./users.routes");
const Accounts = require("./accounts.routes");
const Transactions = require("./transactions.routes");
const file = fs.readFileSync("docs/swagger.yaml", "utf8");

// api docs
const swaggerDocument = YAML.parse(file);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Users Data
router.use("/api/v1/users", Users);
router.use("/api/v1/accounts", Accounts);
router.use("/api/v1/transactions", Transactions);

module.exports = router;
