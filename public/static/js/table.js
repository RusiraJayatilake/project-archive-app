fetch('/app/api/projects').then(res => res.json())
.then(data => {
    const tableBody = document.getElementById('tableBody');
    data.forEach(project => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${project.id}</td>
            <td class="px-6 py-4 whitespace-nowrap">${project.title}</td>
            <td class="px-6 py-4 whitespace-nowrap">${project.description}</td>
            <td class="px-6 py-4 whitespace-nowrap"><a>${project.reference}</a></td>
            <td class="px-6 py-4 whitespace-nowrap">progress bar</td>
            <td class="px-6 py-4 whitespace-nowrap"><input type="submit" value="Delete" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 delete-btn" data-id="${project.id}"></td>
        `;

        tableBody.appendChild(row);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.id;

            // Send a delete request to the server
            fetch(`/app/api/delete/${projectId}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete data');
                } else {
                    button.closest('tr').remove();    
                }
            }).catch(error => console.error('Error:', error));
        });
    });
}).catch(err => console.error('Error fetching data: ', err));