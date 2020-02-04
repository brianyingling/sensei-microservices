import uuidv4 from 'uuid/v4';
import { addHours } from 'date-fns';
import { USER_SESSION_EXPIRY_HOURS } from '#root/consts';

export default class SessionFormatter {
  static fromDb({
    PK: id,
    createdAt,
    expiresAt,
    userId,
  }) {
    return {
      id,
      createdAt,
      expiresAt,
      userId,
    };
  }

  static toDb({ id }) {
    const expirationDate = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);
    const sessionToken = uuidv4();
    return {
      PK: `Session-${sessionToken}`,
      SK: 'SESSION',
      createdAt: new Date().toISOString(),
      expiresAt: expirationDate.toISOString(),
      userId: id,
    };
  }
}
