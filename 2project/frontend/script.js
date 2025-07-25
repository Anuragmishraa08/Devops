document.getElementById('feedbackForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    const res = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message })
    });

    const data = await res.json();
    document.getElementById('response').innerText = data.message || data.error;
});
