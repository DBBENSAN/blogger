const router = require('express').Router();

router.get('/login', (req, res) => {
   if (req.session.logged_in) {
      res.redirect('/profile');
      return;
   }

   res.render('login');
});

module.exports = router;