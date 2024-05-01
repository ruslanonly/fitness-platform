const express = require('express');
const { AuthWebMiddleware } = require('../middlewares/auth');

const router = express.Router();

const PAGE = (pageName, parameters) => (_, res) => res.render(pageName, parameters)

router.get('/login', PAGE('pages/login', {
    meta: {
        title: 'Вход в систему'
    },
    layout_elements: {
        header_tabs: false
    }
}));

router.get('/register', PAGE('pages/register', {
    meta: {
        title: 'Регистрация в системе'
    },
    layout_elements: {
        header_tabs: false
    }
}));

router.get('/courses', AuthWebMiddleware, PAGE('pages/courses', {
    meta: {
        title: 'Курсы'
    },
    layout_elements: {
        header_tabs: true
    }
}));

router.get('/feedback', AuthWebMiddleware, PAGE('pages/feedback', {
    meta: {
        title: 'Обратная связь'
    },
    layout_elements: {
        header_tabs: true
    }
}));

router.get('/401', PAGE('401', {
    meta: {
        title: 'Нет доступа'
    },
    layout_elements: {
        header_tabs: true
    }
}));

router.get('/*', PAGE('404', {
    meta: {
        title: 'Страница не найдена'
    },
    layout_elements: {
        header_tabs: true
    }
}));

module.exports = router;