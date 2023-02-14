import express, { Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";
import { v4 as uuidv4, v4 } from "uuid";
import bodyParser, { BodyParser } from "body-parser";

const app = express();
const PORT = 3000;
dotenv.config();

app.use(bodyParser.json());
app.use(express.static("./public"));

const apiUrl = process.env.API_URL;
const html = `<html>
<body>
<script>
localStorage.setItem("apiUrl" ,"${apiUrl}" )
</script>
</body>
</html>
`;

app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.get("/api/users", (req: Request, res: Response) => {
  res.send({ name: "user1", email: "user1@gmail.com", age: 30 });
});

app.post("/api/upload", (req: Request, res: Response) => {
  const fileName = v4();
  const fileType = req.headers["content-type"]?.split("/")[1];
  const fileStream = fs.createWriteStream(`${fileName}.${fileType}`);
  req.pipe(fileStream);
  res.end();
});

app.listen(PORT, () => {
  console.log("server at port:", PORT);
});
