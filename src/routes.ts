import { Router } from 'express';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListComplimentsSentController } from './controllers/ListComplimentsSentController';
import { ListComplimentsReceivedController } from './controllers/ListComplimentsReceivedController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listComplimentsSentController = new ListComplimentsSentController();
const listComplimentsReceivedController = new ListComplimentsReceivedController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post(
    '/users',
    createUserController.handle
);
router.post(
    '/tags', 
    ensureAuthenticated, 
    ensureAdmin, 
    createTagController.handle
);
router.post(
    '/login', 
    authenticateUserController.handle
);
router.post(
    '/compliments', 
    ensureAuthenticated, 
    createComplimentController.handle
);
router.get(
    '/users/compliments/sent',
    ensureAuthenticated,
    listComplimentsSentController.handle
);
router.get(
    '/users/compliments/received', 
    ensureAuthenticated,
    listComplimentsReceivedController.handle
);
router.get(
    '/tags',
    ensureAuthenticated,
    listTagsController.handle
);
router.get(
    '/users',
    ensureAuthenticated,
    listUsersController.handle
);

export { router };
