import {Router} from 'express';
import USER_ROUTE from './user.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Wanderwise API' });
});

router.use('/users', USER_ROUTE);

export default router;
