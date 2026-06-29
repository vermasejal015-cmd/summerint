document.addEventListener('DOMContentLoaded', () => {
    const ticketForm = document.getElementById('ticketForm');
    const ticketContainer = document.getElementById('ticketContainer');

    // Array to temporarily hold tickets (simulating a database)
    let tickets = [];
    let ticketCounter = 1001;

    ticketForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // 1. Capture Client Input
        const clientName = document.getElementById('clientName').value;
        const category = document.getElementById('issueCategory').value;
        const description = document.getElementById('issueDesc').value;

        // 2. Generate a Ticket Object
        const newTicket = {
            id: `TKT-${ticketCounter}`,
            name: clientName,
            category: category,
            description: description,
            date: new Date().toLocaleDateString(),
            status: 'Open'
        };

        tickets.push(newTicket);
        ticketCounter++;

        // 3. Update the UI and reset form
        renderTickets();
        ticketForm.reset();
    });

    function renderTickets() {
        // Clear current list
        ticketContainer.innerHTML = '';

        if (tickets.length === 0) {
            ticketContainer.innerHTML = '<p class="empty-state">No open tickets at the moment.</p>';
            return;
        }

        // Generate HTML for each ticket
        tickets.forEach(ticket => {
            const ticketEl = document.createElement('div');
            ticketEl.className = 'ticket-card';

            ticketEl.innerHTML = `
                <div class="ticket-header">
                    <span><strong>ID:</strong> ${ticket.id}</span>
                    <span><strong>Date:</strong> ${ticket.date}</span>
                </div>
                <div class="ticket-title">${ticket.category} Issue</div>
                <p><strong>Client:</strong> ${ticket.name}</p>
                <p><strong>Description:</strong> ${ticket.description}</p>
            `;

            ticketContainer.appendChild(ticketEl);
        });
    }
});