import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
const PORT = 3000;
dotenv.config();

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

app.listen(PORT, () => {
  console.log("server at port:", PORT);
});
