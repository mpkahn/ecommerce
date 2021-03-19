const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>These aren't the routes you're looking for!</h1>")
});

module.exports = router;