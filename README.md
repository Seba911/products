# productos
App desarrollada en React para simular el consumo de una API con json-server, en la que se pueden crear, editar o buscar productos y añadirlos al carrito de compras

## Scripts

Se podran correr los siguientes comandos para las pruebas locales

### `npm start`

Abre [http://localhost:3000](http://localhost:3000)

### `npm run fake-api`

Sera necesario correr este comando para levantar el servidor creado para simular el consumo de la API, hecho por medio de json server.
Este se abrira en el puerto 3004 [http://localhost:3004](http://localhost:3004) en la ruta [http://localhost:3004/producto](http://localhost:3004/producto) figurara el json con todos los productos que vienen por default en el archivo db.json.

Si no lo pueden correr, instalarlo por medio del comando: npm install -g json-server

### `npm run test`

Se puede utilizar para testiar algunos items del cart
