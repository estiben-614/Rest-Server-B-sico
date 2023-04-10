import express from "express";
import cors from "cors"

import { router } from "../routes/user.js   ";

export class Server{
    constructor(){
        //Cada vez que se crea una clase server se ejecutan estas variables
        this.app= express()
        this.port = process.env.PORT

        this.usuariosPath='/api/usuarios'
        //Middlewares : Funciones que se van a levantar cuando se ejecute el servidor 
        this.middelwares()
        //Rutas de aplicación
        this.routes()
    }

    middelwares(){
        //CORS
        this.app.use(cors())

        //Lectura y parseo del body, recibe la info de los post,put, etc
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath,router)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}