const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.send(
    `<form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('name').value)">
    <input type="text" name="username" placeholder="username" id="name">
    <br>
    <button type="submit">Login</button>
    </form>`);
});

router.post('/login', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;