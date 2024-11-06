document.addEventListener('DOMContentLoaded', function () {
    const joinButton = document.getElementById('joinButton');

    function checkLiveSession() {
        const now = new Date();
        const day = now.getDay();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        // Check if it is Wednesday or Friday at 5:30 PM or Sunday at 9:00 AM
        if ((day === 3 || day === 5) && hours === 17 && minutes === 30) {
            joinButton.href = "https://web.facebook.com/divineliferestorationcentre"; // Replace with your actual Facebook live link
            joinButton.textContent = "Join Live on Facebook";
        } else if (day === 0 && hours === 9 && minutes === 0) {
            joinButton.href = "https://www.youtube.com/@divinetv5239/streams"; // Replace with your actual YouTube live link
            joinButton.textContent = "Join Live on YouTube";
        } else {
            joinButton.href = "#";
            joinButton.textContent = "Join Us";
        }
    }

    // Check the live session status immediately on page load
    checkLiveSession();

    // Set an interval to check the live session status every minute
    setInterval(checkLiveSession, 60000);
});
document.addEventListener('DOMContentLoaded', () => {
    const sendMessage = (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const whatsappNumber = '0717648634';
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
        
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappLink, '_blank');
    };

    document.getElementById('contact-form').addEventListener('submit', sendMessage);
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown > a");
    document.addEventListener('DOMContentLoaded', function() {
        const menuLinks = document.querySelectorAll('.main-menu a');
        document.querySelectorAll('.dropbtn').forEach(item => {
            item.addEventListener('click', event => {
                // Close all dropdowns
                document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                    if (dropdown !== item.nextElementSibling) {
                        dropdown.classList.remove('show');
                    }
                });
               
                
                // Toggle the current dropdown
                let dropdownContent = item.nextElementSibling;
                dropdownContent.classList.toggle('show');
            });
        });
    
        // Close the dropdown if the user clicks outside of it
       
        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
    
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjust offset as needed
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
});
 
 