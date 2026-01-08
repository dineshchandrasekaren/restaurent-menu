import createApp from "./src/app";
import config from "./src/config";
import connectDb from "./src/config/db.config";

const app = createApp();

function errorHandler(err: any) {
  console.log(err.message);
}

function listening() {
  console.log(`Server is running on http://localhost:${config.PORT}`);
}

connectDb().then(() => {
  const server = app.listen(config.PORT);
  server.on("listening", listening);
  server.on("error", errorHandler);
});
