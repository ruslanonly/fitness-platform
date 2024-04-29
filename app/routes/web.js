const express = require('express');

const router = express.Router();

const PAGE = (pageName) => (_, res) => res.render(pageName)

router.get('/404', PAGE('404'));

module.exports = router;