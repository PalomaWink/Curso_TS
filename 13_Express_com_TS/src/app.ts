//1 - Iniciando o projeto

// console.log('Hello alteracao!');

//2 - Inicializando o express
import express, { NextFunction, Request, Response } from "express";

const app = express();

// 3 - Rotas com Postaman
app.use(express.json());

app.get("/", (request, response) => {
  return response.send("Hello World");
})

app.post("/api/product", (request, response) => {
  console.log(request.body);

  return response.send("Produto adicionado!");
  
})

//4 rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  if (req.method === "POST") {
    return res.send("Inseriu algum registro")
  } else if (req.method === "GET") {
    return res.send("Leu algum registro")
  } else {
    return res.send("Nao podemos realizar essa operacao!")
  }
})

//5- interfaces do express
app.get("/api/interfaces", (_req: Request, res: Response) => {
  return res.send("Utilizando as interfaces")
})

//6 - enviando um JSON
app.get("/api/json", (req:Request, res: Response) => {
  return res.json({
    "name": "Paloma",
    'age': 28
  })
})

//7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);
  if (req.params.id === "1") {
    const product = {
      "id": req.params.id,
      "name": "Bone",
      "price": 10.00,
    }
    return res.json(product);
  } else {
    return res.send("Produto encontrado!")
  }
  
})

//8 - rotas complexas
app.get("/api/product/:id/review/:reviweId", (req: Request, res: Response) => {
  console.log(req.params);
  return res.send("funcionou!")
  
})

// 9 - router handler

function getUser(req: Request, res: Response) {
  console.log(`Resgatando usuario de id ${req.params.id}`);
  
  return res.send("Usuario localizado!")
}

app.get("/api/user/:id", getUser);

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if(req.params.id === "1") {
    console.log("Pode seguir!");
    next()
  } else {
    console.log("Acesso restrito");
  }
}


app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({message: "Bem vindo a area administrativa!"})
})

app.listen(3000, () => console.log('Server is running'));