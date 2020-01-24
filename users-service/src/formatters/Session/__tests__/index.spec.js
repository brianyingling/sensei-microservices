import isValid from 'date-fns/isValid';
import SessionFormatter from '../index';

describe('SessionFormatter', () => {
  it('exists', () => {
    expect(SessionFormatter).not.toBeUndefined();
  });

  describe('toDb()', () => {
    it('exists', () => {
      expect(SessionFormatter.toDb).not.toBeUndefined();
    });
    describe('it matches the contract expected for persistence', () => {
      const user = { id: '123' };
      let result;

      beforeEach(() => {
        result = SessionFormatter.toDb(user);
      });
      it('has a primary key', () => {
        expect(result.PK).toBeDefined();
      });
      it('has a secondary key', () => {
        expect(result.SK).toBeDefined();
      });
      it('has a secondary key with the appropriate value', () => {
        expect(result.SK).toEqual('SESSION');
      });
      it('has a createdAt property', () => {
        expect(result.createdAt).toBeDefined();
        expect(isValid(new Date(result.createdAt))).toBe(true);
      });
      it('has a createdAt property with a valid date', () => {
        const createdAt = new Date(result.createdAt);
        expect(isValid(createdAt)).toBe(true);
      });
      it('has an expiresAt property', () => {
        expect(result.expiresAt).toBeDefined();
      });
      it('has a expiresAt property with a valid date', () => {
        const expiresAt = new Date(result.expiresAt);
        expect(isValid(expiresAt)).toBe(true);
      });
      it('has a user ID property', () => {
        expect(result.userId).toBeDefined();
      });
      it('has a User ID property with the value passed into it', () => {
        expect(result.userId).toEqual(user.id);
      });
    });
  });
});
