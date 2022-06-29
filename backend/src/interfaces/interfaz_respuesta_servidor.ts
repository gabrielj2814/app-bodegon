interface respuestaServidor{
    codigo_respuesta:string,
    tipo_mensaje:string,
    mensaje_respuesta:string,
    detalle_respuesta?:object,
    datos_respuesta?:object
}


export default respuestaServidor