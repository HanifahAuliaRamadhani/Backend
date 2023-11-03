const db = require('../db')

exports.createNote = async(req, res) => {
    try{
        const { title, description } = req.body;
        const newNote = await db.query("INSERT INTO cttn (title, description) VALUES($1,$2) RETURNING *", [title, description])
        res.status(201).json({
            message: "success",
            data: newNote.rows[0]
        });   
    } catch (err) {
        console.error(err.message)
    }
    
}

exports.getAllNotes = async(req,res) => {
    try {
        const allNotes =  await db.query("SELECT * FROM cttn");
        res.json(allNotes.rows);
        
    } catch (err) {
        console.error(err.message)
    }
}

exports.getOneNote = async(req,res) => {
    try {
        const { id } = req.params;
        const oneNote =  await db.query("SELECT * FROM cttn WHERE id = $1", [id]);
        res.json(oneNote.rows[0]);
        
    } catch (err) {
        console.error(err.message)
    }
}

exports.updateOneNote = async(req, res) => {
    try {

        const {id} = req.params;
        const { title, description} = req.body

        const updatedNote = await db.query("UPDATE cttn SET title = $1, description = $2 WHERE id= $3 RETURNING *", [title, description, id])
        
        res.json("Note has been updated")
    } catch (err) {
        console.error(err.message)
        
    }
};

exports.deleteOneNote = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteNote = await db.query("DELETE FROM cttn WHERE id = $1", [id]);
        res.json("Note has been deleted");
    } catch (err) {
        console.error(err.message)
        
    }
}
