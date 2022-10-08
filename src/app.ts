import "dotenv/config";
import createServer from "./server";

const app = createServer();
const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
