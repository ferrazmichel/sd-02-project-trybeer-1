const productsMock = {
  products: [
    { id: "1", name: "cerva1", price: 2.2, volume: 500 },
    { id: "2", name: "cerva2", price: 2.2, volume: 500 },
    { id: "3", name: "cerva3", price: 2.2, volume: 500 },
    { id: "4", name: "cerva4", price: 2.2, volume: 500 },
    { id: "5", name: "cerva5", price: 2.2, volume: 500 },
  ],
};

const ordersMock = {
  orders: [
    { orderId: "1", address: "cerva1", number:'51',totalPrice: 2.2, status: 'entregue' },
    { orderId: "2", address: "cerva2", number:'52',totalPrice: 3.2, status: 'entregue' },
    { orderId: "3", address: "cerva3", number:'53',totalPrice: 4.2, status: 'entregue' },
    { orderId: "4", address: "cerva4", number:'54',totalPrice: 5.2, status: 'pendente' },
    { orderId: "5", address: "cerva5", number:'55',totalPrice: 6.2, status: 'pendente' },
  ],
};

const storageMock = {
  products: {
    1: { id: "1", product: "cerva1", price: 2.2, volume: 500, count: 1 },
    2: { id: "2", product: "cerva2", price: 2.2, volume: 500, count: 2 },
    3: { id: "3", product: "cerva3", price: 2.2, volume: 500,count: 3 },
    4: { id: "4", product: "cerva4", price: 2.2, volume: 500, count: 4 },
    5: { id: "5", product: "cerva5", price: 2.2, volume: 500, count: 5 },
  },
};


module.exports = {
  productsMock,
  storageMock,
  ordersMock
