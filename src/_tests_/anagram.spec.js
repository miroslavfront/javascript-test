const isAnagram = require('../anagram');

describe('isAnagram', () => {
  test('The word foefet is an anagram of toffee', () => {
    expect(isAnagram('foefet', 'toffee')).toEqual(true);
  });
  test('The word Buckethead is an anagram of DeathCubeK', () => {
    expect(isAnagram('Buckethead', 'DeathCubeK')).toEqual(true);
  });
  test('The word Twoo is an anagram of WooT', () => {
    expect(isAnagram('Twoo', 'WooT')).toEqual(true);
  });
  test('Characters do not match for test case dumble, bumble', () => {
    expect(isAnagram('dumble', 'bumble')).toEqual(false);
  });
  test('Missing characters for test case ound, round', () => {
    expect(isAnagram('ound', 'round')).toEqual(false);
  });
  test('Same letters, but different count', () => {
    expect(isAnagram('apple', 'pale')).toEqual(false);
  });
});
