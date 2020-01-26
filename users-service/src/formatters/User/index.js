// const Item = {
//   createdAt: date,
//   data: email,
//   email,
//   passwordHash: hashPassword(password),
//   PK: `User-${uuidv4()}`,
//   SK: 'USER',
//   updatedAt: date,
// };
import uuidv4 from 'uuid/v4';
import { hashPassword } from '#root/handlers/utils';

export default class UserFormatter {
  static toDb({ email, password }) {
    const date = new Date().toISOString();
    return {
      createdAt: date,
      data: email,
      email,
      passwordHash: hashPassword(password),
      PK: `User-${uuidv4()}`,
      SK: 'USER',
      updatedAt: date,
    };
  }
}
