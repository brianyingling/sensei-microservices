import UserFormatter from '#root/formatters/User';

describe('UserFormatter', () => {
  it('exists', () => {
    expect(UserFormatter).toBeDefined();
  });

  describe('toDb()', () => {
    expect(UserFormatter.toDb).toBeDefined();

    describe('it matches the contract expected for persistence', () => {
      const user = { email: 'email@email.com', password: 'password' };
      let result;

      beforeEach(() => {
        result = UserFormatter.toDb(user);
      });
      it('has a primary key', () => {
        expect(result.PK).toBeDefined();
      });
      it('has a createdAt property', () => {
        expect(result.createdAt).toBeDefined();
      });
      it('has a data property', () => {
        expect(result.data).toBeDefined();
      });
      it('has a email property', () => {
        expect(result.email).toBeDefined();
      });
      it('has a passwordHash property', () => {
        expect(result.passwordHash).toBeDefined();
      });
      it('has a secondary key property', () => {
        expect(result.SK).toBeDefined();
      });
      it('has a updatedAt property', () => {
        expect(result.updatedAt).toBeDefined();
      });
    });
  });
});
