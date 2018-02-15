import { createClient } from 'contentful';

const client = createClient({
  space: 'foo-space',
  accessToken: 'bar-token',
  host: '127.0.0.1:8090',
  insecure: true,
});

test('Gets entry', async () => {
  const response = await client.getEntry('foo');

  expect(response).toMatchSnapshot();
})

test('Gets all entries', async () => {
  const response = await client.getEntries();

  expect(response).toMatchSnapshot();
})
