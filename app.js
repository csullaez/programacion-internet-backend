const express = require('express')

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/estado', (req, res)=> {
  res.send('Backend funcionando correctamente');
});

app.post('/datos', (req, res)=>{
  const datos = req.body;
  res.json({
    mensaje: "Datos recibidos exitosamente",
    datosRecibidos: {
      nombre: datos.nombre,
      apellido: datos.apellido,
      nuevoNumero: datos.numero * 6,
    },
  });
});

app.put('/datos/:id', (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  res.json({
    mensaje: `Datos actualizados exitosamente del usuario ${id}`,
    datosActualizados: datos,
  });
});

app.listen(PORT, ()=>{
  console.log(`Servidor esta corriendo en http://localhost:${PORT}`);
});
