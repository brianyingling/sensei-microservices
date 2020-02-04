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

export interface User {
  id: string,
  email: string,
  passwordHash: string
}

export default class UserFormatter {
  static fromDb({ PK: id, email, passwordHash }): User {
    return {
      id,
      email,
      passwordHash
    }
  }

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
