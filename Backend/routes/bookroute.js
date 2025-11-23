const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookcontroller');

router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.post('/bulk', bookController.new);

router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
