import { request, response } from "express"

//const{ response}=requiere('express')


export const usuariosGet=(req=request, res=response) => {
    //http://localhost:8080/api/usuarios?q=Hola&Nombre=Estiben&Ocupacion=Estudiante
    const {q,Nombre,Ocupacion,page='1-default'}=req.query
    res.json({
        ok:true,
        msg:'get API- Controlador',
        q,
        Nombre,
        Ocupacion,
        page
    })
}

export const usuariosPut=(req, res=response) => {

    const {id}=req.params
    res.status(400).json({
        ok:true,
        msg:'put API- Controlador',
        id
    })
  }

export const usuariosPost=(req, res=response) => {
    //Me recibe la info del post
    
    //const body=req.body

    const {nombre,edad}=req.body
    res.status(200).json({
        ok:true,
        msg:'post API- Controlador',
        //body
        nombre,
        edad
    })
  }

  export const usuariosDelete=(req, res=response) => {
    res.status(400).json({
        ok:true,
        msg:'delete API- Controlador'
    })
  }