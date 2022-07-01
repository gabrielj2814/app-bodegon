-- CREATE DATABASE bodegon_db; PRODUCCION

-- CREATE DATABASE bodegon_db_test; TEST

CREATE TABLE ttipo_personal(
    id_tipo_personal SERIAL,
    nombre_personal character varying(140) NOT NULL,
    estatus_tipo_personal character(1) NOT NULL,
    constraint PK_id_tipo_personal primary key(id_tipo_personal)
);

CREATE TABLE tpersona(
    id_persona SERIAL,
    dni character varying(140) NOT NULL,
    nombres character varying(140) NOT NULL,
    apellidos character varying(140) NOT NULL,
    correo character varying(140) NOT NULL,
    telefono_mobil character varying(140) NULL,
    telefono_local character varying(140) NULL,
    sexo character(1) NOT NULL,
    constraint PK_id_persona primary key(id_persona)
);

CREATE TABLE tperfil(
    id_perfil SERIAL,
    nombre_perfil character varying(140) NOT NULL,
    estatus_perfil character(1) NOT NULL,
    constraint PK_id_perfil primary key(id_perfil)
);

CREATE TABLE tmodulo(
    id_modulo SERIAL,
    id_perfil INTEGER NOT NULL,
    ruta_modulo character varying(140) NOT NULL,
    estatus_modulo character(1) NOT NULL,
    constraint PK_id_modulo primary key(id_modulo),
    constraint FK_id_perfil foreign key(id_perfil) references tperfil(id_perfil) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE tsub_modulo(
    id_sub_modulo SERIAL,
    id_modulo INTEGER NOT NULL,
    ruta_sub_modulo character varying(140) NOT NULL,
    estatus_sub_modulo character(1) NOT NULL,
    constraint PK_id_sub_modulo primary key(id_sub_modulo),
    constraint FK_id_modulo foreign key(id_modulo) references tmodulo(id_modulo) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE tpregunta_seguridad(
    id_pregunta_seguridad SERIAL,
    pregunta_seguridad character varying(140) NOT NULL,
    estatus_pregunta_seguridad character(1) NOT NULL,
    constraint PK_id_pregunta_seguridad primary key(id_pregunta_seguridad)
);

CREATE TABLE tpersonal(
    id_personal SERIAL,
    id_persona INTEGER NOT NULL,
    id_tipo_personal INTEGER NOT NULL,
    id_perfil INTEGER NOT NULL,
    clave character varying(255) NOT NULL,
    estatus_sub_modulo character(1) NOT NULL,
    constraint PK_id_personal primary key(id_personal),
    constraint FK_id_persona foreign key(id_persona) references tpersona(id_persona) ON UPDATE CASCADE ON DELETE CASCADE,
    constraint FK_id_tipo_personal foreign key(id_tipo_personal) references ttipo_personal(id_tipo_personal) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE timagen_personal(
    id_imagen_personal SERIAL,
    id_personal INTEGER NOT NULL,
    fecha_subida_imagen_personal DATE NOT NULL,
    extencion_imagen_personal character varying(5) NOT NULL,
    nombre_imagen_personal character varying(140) NOT NULL,
    estatus_imagen_personal character(1) NOT NULL,
    constraint PK_id_imagen_personal primary key(id_imagen_personal),
    constraint FK_id_personal foreign key(id_personal) references tpersonal(id_personal) ON UPDATE CASCADE ON DELETE CASCADE 
);

CREATE TABLE tpregunta_seguridad_personal(
    id_pregunta_seguridad_personal SERIAL,
    id_personal INTEGER NOT NULL,
    id_pregunta_seguridad INTEGER NOT NULL,
    respuesta character varying(255) NOT NULL,
    constraint PK_id_pregunta_seguridad_personal primary key(id_pregunta_seguridad_personal),
    constraint FK_id_personal foreign key(id_personal) references tpersonal(id_personal) ON UPDATE CASCADE ON DELETE CASCADE,
    constraint FK_id_pregunta_seguridad foreign key(id_pregunta_seguridad) references tpregunta_seguridad(id_pregunta_seguridad) ON UPDATE CASCADE ON DELETE CASCADE
);
