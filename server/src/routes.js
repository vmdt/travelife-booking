const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");

const BASE_AUTH_URL = "/api/v1/auth";
const BASE_USER_URL = "/api/v1/users";

const appRoutes = (app) => {
	app.use(BASE_AUTH_URL, authRoutes.routes());
	app.use(BASE_USER_URL, userRoutes.routes());
};

module.exports = appRoutes;
