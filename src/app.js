import express from 'express';
import employeesRoutes from './routes/employees.routes.js'

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir todas las solicitudes (esto puede ajustarse para mayor seguridad)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Encabezados permitidos
    next();
});


app.use(express.json())
app.use('/api' ,employeesRoutes)


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endponit Not Found'
    })
})



export default app