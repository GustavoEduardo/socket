import routes from './routes';
import express from 'express';
const app = express();
var http = require("http").createServer(app);
//http é um módulo nativo do node, e é onde roda o socket.io
//express vai rodar dentro do servidor nativo pois para funcionar com socket.io precisa estar rodando no mesmo servidor http que ele

var io = require("socket.io")(http);//passando servidor http como parametro na criação do socket

//toda vez que um front se conectar executa o on
io.on("connection",(socket: any)=>{
    socket.on("diconnect",()=>{
        console.log(socket.id+ "Se desconectou")
    })

    socket.on("novaMensagem", (data: any)=>{
        //socket.emit("showMsg", data);//só o socket que enviou a msg irá ver a msg
        io.emit("showMsg", data);//todos veem as mensagem de todos. Io é o serviodor
        //socket.broadcast.emit("showMsg", data);//Todos recebem, menos oqq enviou
        console.log(data.nome, data.mensagem)
    })

    
});



app.use('', routes);
app.use(express.json());
app.set("view engine","ejs");

http.listen(3030, () => console.log(`server listening on port 3030`));
