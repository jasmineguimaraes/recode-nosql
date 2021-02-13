var mongoUtil = require("./mongoUtil");

mongoUtil.connectToServer(function (err, client) {
	if (err) console.log(err);
	const express = require("express");
	const app = express();

	const cors = require("cors");
	app.use(cors());

	let router = require("./routes.js");

	app.use("/", router);
	// Create a Server
	const server = app.listen(1337, function () {
		let host = server.address().address;
		let port = server.address().port;

		console.log("App listening at http://%s:%s", host, port);
	});
});
