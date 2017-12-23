import Queue from '../../exercises/data_structures/queue';

describe('ES6 Class', () => {
  test('has a Queue class', () => {
    expect(typeof Queue).toEqual('function');
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });
});

describe('Queue constructor', () => {
  test('has front and back properties that are initialized to 0', () => {
    const queue = new Queue();
    expect(queue._front).toEqual(0);
    expect(queue._back).toEqual(0);
  });

  test('has a storage property that initialized to an object', () => {
    const queue = new Queue();
    expect(queue._storage).toMatchObject({});
  });
});

describe('enqueue', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.enqueue).toEqual('function');
  });

  test('adds values to the back of the queue', () => {
    const queue = new Queue();
    queue.enqueue('good');
    expect(queue._storage).toMatchObject({ '0': 'good' });
    queue.enqueue('kid');
    expect(queue._storage).toMatchObject({ '0': 'good', '1': 'kid' });
    queue.enqueue('maad');
    expect(queue._storage).toMatchObject({ '0': 'good', '1': 'kid', '2': 'maad' });
    queue.enqueue('city');
    expect(queue._storage).toMatchObject({ '0': 'good', '1': 'kid', '2': 'maad', '3': 'city' });
  });
});

describe('dequeue', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.dequeue).toEqual('function');
  });

  test('removes values from the front of the queue', () => {
    const queue = new Queue();
    queue.enqueue('good');
    queue.enqueue('kid');
    queue.enqueue('maad');
    queue.enqueue('city');
    queue.dequeue();
    expect(queue._storage).toMatchObject({ '1': 'kid', '2': 'maad', '3': 'city' });
    queue.dequeue();
    expect(queue._storage).toMatchObject({ '2': 'maad', '3': 'city' });
    queue.dequeue();
    expect(queue._storage).toMatchObject({ '3': 'city' });
    queue.dequeue();
    expect(queue._storage).toMatchObject({});
  });
});

describe('peek', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.peek).toEqual('function');
  });

  test("returns the value at the front of the queue, but doesn't alter storage", () => {
    const queue = new Queue();
    queue.enqueue('good');
    queue.enqueue('kid');
    queue.enqueue('maad');
    queue.enqueue('city');
    expect(queue.peek()).toEqual('good');
    expect(queue.dequeue()).toEqual('good');
    expect(queue.peek()).toEqual('kid');
    expect(queue.dequeue()).toEqual('kid');
    expect(queue.peek()).toEqual('maad');
    expect(queue.dequeue()).toEqual('maad');
    expect(queue.peek()).toEqual('city');
    expect(queue.dequeue()).toEqual('city');
  });
});

describe('get_size', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.get_size).toEqual('function');
  });

  test('retuns the number of values in storage', () => {
    const queue = new Queue();
    expect(queue.get_size()).toEqual(0);
    queue.enqueue('good');
    expect(queue.get_size()).toEqual(1);
    queue.enqueue('kid');
    expect(queue.get_size()).toEqual(2);
    queue.dequeue();
    expect(queue.get_size()).toEqual(1);
    queue.dequeue();
    expect(queue.get_size()).toEqual(0);
  });
});

describe('reset', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.reset).toEqual('function');
  });

  test('empties the storage object', () => {
    const queue = new Queue();
    queue.enqueue('good');
    queue.enqueue('kid');
    queue.enqueue('maad');
    queue.enqueue('city');
    queue.reset();
    expect(queue._storage).toMatchObject({});
  });
});
