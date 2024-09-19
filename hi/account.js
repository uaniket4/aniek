// Example data for demonstration purposes
//chatgpt
const bookings = [
    { trainNumber: '12345', date: '2024-09-25', status: 'Confirmed' },
    { trainNumber: '67890', date: '2024-10-01', status: 'Pending' },
];

document.addEventListener("DOMContentLoaded", function () {
    const totalBookings = document.getElementById("total-bookings");
    const upcomingTrips = document.getElementById("upcoming-trips");
    const paymentDue = document.getElementById("payment-due");
    const bookingsTable = document.getElementById("bookings-table").getElementsByTagName('tbody')[0];

    totalBookings.textContent = bookings.length;
    upcomingTrips.textContent = bookings.filter(b => new Date(b.date) > new Date()).length;
    paymentDue.textContent = "₹0"; // Update with actual payment logic

    bookings.forEach(booking => {
        const row = bookingsTable.insertRow();
        row.insertCell(0).textContent = booking.trainNumber;
        row.insertCell(1).textContent = booking.date;
        row.insertCell(2).textContent = booking.status;
        row.insertCell(3).innerHTML = '<button class ="java-btn">Edit</button> <button class ="java-btn">Cancel</button>';
    });
});
