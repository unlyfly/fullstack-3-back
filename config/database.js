// Importamos Mongoose
const mongoose = require("mongoose");

// Define una función asincrónica para conectarse a la base de datos MongoDB
const connectDB = async () => {
  try {
    // Conecta a la base de datos utilizando la URL de conexión proporcionada en la variable de entorno "DB_STRING"
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Muestra un mensaje en la consola cuando se establece la conexión
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    //Mensaje de error en caso de fallo de conexion
    console.error(err);
    process.exit(1);
  }
};

//Exportamos la variable connectDb para utilizar en otro archivo
module.exports = connectDB;
