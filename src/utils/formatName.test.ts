import formatName from './formatName';

test('formatName', () => {
  expect(formatName('Mr. John Smith')).toBe('Smith, John (Mr.)');
  expect(formatName('Mrs. Jane Doe')).toBe('Doe, Jane (Mrs.)');
  expect(formatName('Ms. Jane Doe')).toBe('Doe, Jane (Ms.)');
  expect(formatName('Miss Jane Doe')).toBe('Doe, Jane (Miss)');
  expect(formatName('Jane Doe')).toBe('Doe, Jane');
  expect(formatName('John Smith')).toBe('Smith, John');
  expect(formatName('Mr. John Smith Jr.')).toBe('Smith Jr., John (Mr.)');
  expect(formatName('John Smith Jr.')).toBe('Smith Jr., John');
});
