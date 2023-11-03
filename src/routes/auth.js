const { Router } = require('express');
const { getUsers, register, login, protected, logout} = require('../controllers/auth');
const { registerValidation, loginValidation } = require('../validators/auth');
const { validationMiddleware } = require('../middlewares/validators-middleware');
const {userAuth} = require('../middlewares/auth-middleware')
const router = Router()
const {createNote, getAllNotes, getOneNote, updateOneNote, deleteOneNote} = require('../controllers/noteController')

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)


router.get('/note', getAllNotes)
router.post('/note', createNote)
router.get('/note/:id', getOneNote)
router.put('/note/:id', updateOneNote)
router.delete('/note/:id',deleteOneNote)





module.exports = router;