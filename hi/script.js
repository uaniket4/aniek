

// Form Validation(booking form)
document.getElementById('train-booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});

// Smooth Scroll Animations Initialization
AOS.init({
    duration: 1200,
    once: true
});


//account page code
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Sample booking data (in a real application, this would come from a server)
    const bookings = [
        {
            id: 1,
            from: 'New York',
            to: 'Washington D.C.',
            date: '2023-07-15',
            time: '09:00 AM',
            seats: 2,
            class: 'Business'
        },
        {
            id: 2,
            from: 'Los Angeles',
            to: 'San Francisco',
            date: '2023-08-01',
            time: '11:30 AM',
            seats: 1,
            class: 'Economy'
        },
        {
            id: 3,
            from: 'Chicago',
            to: 'Detroit',
            date: '2023-08-15',
            time: '02:00 PM',
            seats: 3,
            class: 'First Class'
        }
    ];

    const bookingsContainer = document.getElementById('bookings-container');

    // Function to create a booking card
    function createBookingCard(booking) {
        const card = document.createElement('div');
        card.className = 'booking-card';
        card.innerHTML = `
            <div class="booking-info">
                <h3>${booking.from} to ${booking.to}</h3>
                <p><strong>Date:</strong> ${booking.date}</p>
                <p><strong>Time:</strong> ${booking.time}</p>
                <p><strong>Seats:</strong> ${booking.seats}</p>
                <p><strong>Class:</strong> ${booking.class}</p>
            </div>
            <div class="booking-actions">
                <button onclick="cancelBooking(${booking.id})">Cancel Booking</button>
            </div>
        `;
        return card;
    }

    // Populate bookings
    bookings.forEach(booking => {
        bookingsContainer.appendChild(createBookingCard(booking));
    });

    // Global function to handle booking cancellation
    window.cancelBooking = function(id) {
        // In a real application, this would send a request to the server
        alert(`Booking ${id} has been cancelled.`);
        // Remove the booking card from the DOM
        const card = document.querySelector(`.booking-card:has(button[onclick="cancelBooking(${id})"])`);
        if (card) {
            card.remove();
        }
    };
});


//Firebase AUTH
    //Google Auth
document.getElementById('google-signin').addEventListener('click', () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        console.log("User signed in with Google:", result.user);
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  });

    //Facebook Auth (Incomplete)
  document.getElementById('facebook-signin').addEventListener('click', () => {
    auth.signInWithPopup(facebookProvider)
      .then((result) => {
        console.log("User signed in with Facebook:", result.user);
      })
      .catch((error) => {
        console.error("Error during Facebook sign-in:", error);
      });
  });

  //auth state
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User is signed in:", user);
      
    } else {
      console.log("No user is signed in.");
    }
  });