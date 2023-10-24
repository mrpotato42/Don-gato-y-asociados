CREATE TABLE Usuarios(
    id_user SERIAL PRIMARY KEY,
	activo BOOLEAN,
	username VARCHAR(255),
	contraseña VARCHAR(255),
	Nombre VARCHAR(255),
	Apellido VARCHAR(255),
	telefono VARCHAR(255),
	correo VARCHAR(255)
);

CREATE TABLE Billetera(
    id_billetera SERIAL PRIMARY KEY,
	id_user_fk int,
	capital int,
	foreign key(id_user_fk)
	REFERENCES Usuarios(id_user)	
);