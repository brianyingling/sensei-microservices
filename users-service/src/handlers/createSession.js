import uuidv4 from 'uuid/v4';
import { addHours } from 'date-fns';
import { put, query } from '#root/db';
import { USER_SESSION_EXPIRY_HOURS } from '#root/consts';
import { queryForUser } from './getUser';
import getUserByEmail from './getUserByEmail';
import {
    handleError,
    passwordCompareSync,
    sendResponse
} from './utils';

const formatSession = ({ 
    PK: id, 
    createdAt, 
    expiresAt, 
    userId
}) => ({
    id,
    createdAt,
    expiresAt,
    userId
});

const sendFormattedResponse = res => formatted => res.send(formatted);

const buildSession = user => {
    const expirationDate = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);
    const sessionToken = uuidv4();

    return {
        PK: `Session-${sessionToken}`,
        SK: 'SESSION',
        createdAt: new Date().toISOString(),
        expiresAt: expirationDate.toISOString(),
        userId: user.id
    }
}

const createSession = async (req, res, next) => {
    if (!req.body.email || !req.body.password )
        return next(new Error('Invalid email or password'));

    const { email, password } = req.body;
    const user = await getUserByEmail(req.body.email);
    
    if (!passwordCompareSync(password, user.passwordHash)) 
        return next(new Error('Invalid password'));
    
    const session = buildSession(user);

    const params = {
        Item: session,
        TableName: 'sensei'
    }

    return put(params)
        .then((_) => formatSession(session))
        .then(sendFormattedResponse(res))
        .catch(handleError(next));
}

export default createSession;