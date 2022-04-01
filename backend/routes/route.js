const express = require('express')
const router = express.Router()
const { getData, postData, putData, delData } = require('../controllers/controller')

router.route('/').get(getData).post(postData)
router.route('/:id').delete(delData).put(putData)

module.exports = router;