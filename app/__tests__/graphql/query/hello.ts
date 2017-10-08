import * as request from 'supertest';
import app from '../../../../app/router';

const query = `
  query helloQuery(
    $subject: String
  ) {
    hello(subject: $subject) {
      message
    }
  }
`;

describe('HelloQuery', () => {
  test('with subject', async () => {
    const response = await request(app)
      .get('/api')
      .send({
        query,
        variables: {
          subject: 'Matheus',
        },
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual({
      hello: {
        message: 'Hello, Matheus',
      },
    });
  });

  test('without subject', async () => {
    const response = await request(app)
      .get('/api')
      .send({ query });

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual({
      hello: {
        message: 'Hello, World',
      },
    });
  });
});
