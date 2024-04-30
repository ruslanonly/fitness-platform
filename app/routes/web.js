const express = require('express');

const router = express.Router();

const PAGE = (pageName, parameters) => (_, res) => res.render(pageName, parameters)

router.get('/feedback', PAGE('pages/feedback', {
    meta: {
        title: 'Обратная связь'
    }
}));

router.get('/404', PAGE('404', {
    meta: {
        title: 'Страница не найдена'
    }
}));

module.exports = router;