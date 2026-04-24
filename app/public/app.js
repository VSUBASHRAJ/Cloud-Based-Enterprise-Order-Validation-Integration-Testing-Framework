const submitBtn = document.getElementById('submitOrder');
const statusText = document.getElementById('status');
const errorBox = document.getElementById('error');

submitBtn.addEventListener('click', async () => {
  errorBox.style.display = 'none';
  statusText.innerText = 'Submitting...';

  const product = document.getElementById('product').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product, quantity })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    }

    const order = await res.json();
    statusText.innerText = order.status;

    // Poll for completion
    const interval = setInterval(async () => {
      const check = await fetch(`/api/orders/${order.id}`);
      const updated = await check.json();

      statusText.innerText = updated.status;

      if (updated.status === 'Completed') {
        clearInterval(interval);
      }
    }, 1000);

  } catch (e) {
    errorBox.innerText = e.message;
    errorBox.style.display = 'block';
    statusText.innerText = 'Error';
  }
});