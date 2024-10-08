const router = require('express').Router();

const blogpostRoutes = require('./blogpostRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogpost', blogpostRoutes);
router.use('/user', userRoutes)

module.exports = router;
