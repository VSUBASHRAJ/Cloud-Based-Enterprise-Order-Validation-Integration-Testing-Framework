const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

// ✅ CSP Header (updated for UI)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; connect-src 'self' http://localhost:3000; script-src 'self'; style-src 'self'"
  );
  next();
});

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

let orders = [];

app.post('/api/orders', (req, res) => {
  const { product, quantity } = req.body;

  if (quantity <= 0) {
    return res.status(400).json({ error: 'Invalid quantity' });
  }

  const order = {
    id: orders.length + 1,
    product,
    quantity,
    status: 'Processing'
  };

  orders.push(order);

  setTimeout(() => {
    order.status = 'Completed';
  }, 2000);

  res.json(order);
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  res.json(order);
});

app.listen(3000, () => console.log('Server running on port 3000'));