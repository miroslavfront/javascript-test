const NameMe = require('../name_me');

describe('Name me', () => {
  const n = new NameMe('John', 'Doe');
  test('Verifying First name. Object returned should contain the firstname: John', () => {
    expect(typeof n.firstName != undefined && n.firstName == "John").toEqual(true);
  });
  test('Verifying Last name. Object returned should contain the lastname: Doe', () => {
    expect(typeof n.lastName != undefined && n.lastName == "Doe").toEqual(true);
  })
  test('Verifying full name. Object returned should contain the full name: John Doe', () => {
    expect(typeof n.name != undefined && n.name == "John Doe").toEqual(true);
  })
});
