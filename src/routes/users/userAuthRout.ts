import { Router } from 'express'
import { check } from 'express-validator'
import { UserAuthController } from '../../controllers/user/user-auth.controller';
import { UserVerifyController } from '../../controllers/user/user-verify';

const router = Router();


router.post(
    '/signup',
    [
      check('email', 'Please include a valid email').exists().isEmail(),
      check('password', 'Password is required').exists(),
      check('firstName', 'pls add your firstname').exists(),
      check('lastName', "pls add your lastname").exists()
  
    ],
    UserAuthController.signUp
);

router.post(
  '/signin',
  [
    check('email', 'Please include a valid email').exists().isEmail(),
    check('password', 'Password is required').exists()
  ],
  UserAuthController.logIn
);

router.get('/verify/:token', UserVerifyController.verifyEmail)


export default router;
