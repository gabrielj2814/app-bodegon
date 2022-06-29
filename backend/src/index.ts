import app from "./app"

let Server = app.listen(app.get("port"),() => {
    console.log("ejecutando servidor en el puerto : "+app.get("port"))
})