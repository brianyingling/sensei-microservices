import { UsersService } from '#root/adapters';

const injectSession = async (req, res, next) => {
    console.log('session id in inject beforee check:', req.cookies.sessionId);
    console.log('cookies:', req.cookies);
    if (req.cookies.sessionId) {
        console.log('session id in inject:', req.cookies.sessionId);
        const session = await UsersService.getSession(req.cookies.sessionId);
        console.log('session in inject:', session);
        res.locals.session = session;
    }
    return next();
}

export default injectSession;