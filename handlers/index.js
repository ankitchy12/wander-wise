import { Router } from 'express';
import USER_ROUTER from './user.js';
import AUTH_ROUTER from './auth.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Wander Wise API' });
});

router.use('/users', USER_ROUTER);
router.use('/auth', AUTH_ROUTER);

export default router;