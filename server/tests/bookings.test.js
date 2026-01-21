const request = require('supertest');
const app = require('..');

describe('Bookings API (in-memory fallback)', () => {
  test('create and list bookings', async () => {
    const booking = {
      name: 'Alice',
      phone: '9999999999',
      pickup: 'A',
      dropoff: 'B',
      date: '2025-12-15',
      time: '10:00',
      goodsType: 'furniture',
      size: 'small',
    };

    const res = await request(app).post('/api/bookings').send(booking).expect(201);
    expect(res.body.success).toBe(true);
    expect(res.body.booking.name).toBe('Alice');

    const list = await request(app).get('/api/bookings').expect(200);
    expect(Array.isArray(list.body)).toBe(true);
    expect(list.body.length).toBeGreaterThanOrEqual(1);
  });

  test('create and list owners', async () => {
    const owner = { name: 'Bob', phone: '8888888888', truckType: 'small', city: 'X' };
    const res = await request(app).post('/api/owners').send(owner).expect(201);
    expect(res.body.success).toBe(true);
    expect(res.body.owner.name).toBe('Bob');

    const list = await request(app).get('/api/owners').expect(200);
    expect(Array.isArray(list.body)).toBe(true);
    expect(list.body.length).toBeGreaterThanOrEqual(1);
  });

  test('reject invalid booking payload', async () => {
    const res = await request(app).post('/api/bookings').send({}).expect(400);
    expect(res.body.success).toBe(false);
  });

  test('reject invalid owner payload', async () => {
    const res = await request(app).post('/api/owners').send({}).expect(400);
    expect(res.body.success).toBe(false);
  });

  test('health check', async () => {
    const res = await request(app).get('/').expect(200);
    expect(res.text).toMatch(/Shifty API is running/);
  });
});
