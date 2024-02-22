document.getElementById('projectForm').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const formData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        reference: document.getElementById('reference').value
    };

    fetch('/app/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        clearForm();
    }).catch(error => console.error('Error:', error));
});

function clearForm() {
    // Reset input field values to empty strings
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('reference').value = '';
}