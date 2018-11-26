/*
Imports
*/
    // NodeJS
    const { Router } = require('express');

    // Inner
    const AuthRouterClass = require('./auth/auth.routes');
    const MessageRouterClass = require('./message/message.route');
//

/*
Define routers
*/
    // Parent
    const mainRouter = Router({ mergeParams: true });
    const apiRouter = Router({ mergeParams: true });

    // Child
    const authRouter = new AuthRouterClass();
//

/*
Define routes
*/
    mainRouter.use('/api', apiRouter);
    apiRouter.use('/auth', authRouter.init());
    apiRouter.use('/message', MessageRouter.init())
//

/*
Export
*/
    module.exports = { mainRouter };
//