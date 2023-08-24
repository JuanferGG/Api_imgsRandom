import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM data')
        res.json(rows)
    } catch(error){
        return res.status(500).json({
            message:  'Error'
        })
    }
}


export const getEmploye = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM data WHERE id_data=?', [req.params.id_data])
        if(rows.length <= 0){
            return res.status(400).json({
                message: 'Data not found'
            })
        }
        res.json(rows[0])

    } catch(error){
        return res.status(500).json({
            message: 'Algo a Ocurrido'
        })
    }
}