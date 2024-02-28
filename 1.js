
    function showHome() {
            document.getElementById('home-tab').classList.add('active');
            document.getElementById('menu-tab').classList.remove('active');
            document.getElementById('about-tab').classList.remove('active');
            document.getElementById('menu-container').style.display = 'none';
            document.getElementById('about-container').style.display = 'none';
            document.getElementById('home-container').style.display = 'block';
        }

        
    function showMenu() {
            document.getElementById('menu-tab').classList.add('active');
            document.getElementById('home-tab').classList.remove('active');
            document.getElementById('about-tab').classList.remove('active');
            document.getElementById('menu-container').style.display = 'block';
            document.getElementById('home-container').style.display = 'none';
            document.getElementById('about-container').style.display = 'none';
            
        }
    
    function showAbout() {
        
            document.getElementById('about-tab').classList.add('active');
            document.getElementById('home-tab').classList.remove('active');
            document.getElementById('menu-tab').classList.remove('active');
            document.getElementById('about-container').style.display = 'block';
            document.getElementById('home-container').style.display = 'none';
            document.getElementById('menu-container').style.display = 'none';
            
    }
    function openAppointmentForm() {
        const appointmentFormPopup = document.getElementById('appointmentFormPopup');
        appointmentFormPopup.style.display = 'block';

        const today = new Date().toISOString().split('T')[0];
        document.getElementById('appointmentDate').min = today;

        
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('appointmentDate').value = '';
        document.getElementById('num').value = '';
        document.getElementById('message').value = '';
    }

    function closeAppointmentForm() {
        const appointmentFormPopup = document.getElementById('appointmentFormPopup');
        appointmentFormPopup.style.display = 'none';
    }

    document.getElementById('appointmentForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Table booked successfully!');
        closeAppointmentForm();
    });
    document.getElementById('home-tab').addEventListener('click', function() {
    this.classList.toggle('clicked');
    });
    document.getElementById('menu-tab').addEventListener('click', function() {
    this.classList.toggle('clicked');
});
document.getElementById('about-tab').addEventListener('click', function() {
    this.classList.toggle('clicked');
});