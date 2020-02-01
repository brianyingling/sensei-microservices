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

interface PersistedUser {
  createdAt: string,
  data: string,
  email: string,
  passwordHash: string,
  PK: string,
  SK: string,
  updatedAt: string
}

export default class UserFormatter {
  static toDb({ email, password }): PersistedUser {
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
