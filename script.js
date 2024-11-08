// Smooth scrolling when clicking on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mock Login Form Interaction (for demonstration purposes)
function mockLogin() {
    const name = document.getElementById("name").value;
    const studentNumber = document.getElementById("student-number").value;
    const course = document.getElementById("course").value;
    const section = document.getElementById("section").value;

    if (name && studentNumber && course && section) {
        alert("Welcome " + name + "! You have logged in successfully.");
        // Redirect to student dashboard or homepage
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
}// Mock login function
function mockLogin() {
    // Display the prank alert
    alert("It's a prank! This is a mock website. Thanks for trying it out!");
}
