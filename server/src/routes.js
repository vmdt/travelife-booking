const authRoutes = require("./routes/auth.route");

const BASE_AUTH_URL = "/api/v1/auth";

const appRoutes = (app) => {
	app.use(BASE_AUTH_URL, authRoutes.routes());
};

module.exports = appRoutes;
