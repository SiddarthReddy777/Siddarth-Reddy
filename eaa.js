document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("email").value;
    let issue = document.getElementById("issue").value;
    let feedback = document.getElementById("feedback").value;

    if (!email || !issue || !feedback) {
        alert("Please fill all fields!");
        return;
    }

    // Save data locally (can be extended to a backend)
    let report = { email, issue, feedback };
    localStorage.setItem("report", JSON.stringify(report));

    document.getElementById("message").innerHTML = "<p style='color: green;'>Report submitted successfully!</p>";

    document.getElementById("reportForm").reset();
    document.getElementById("previewImage").style.display = "none";
});

// Image preview function
document.getElementById("imageUpload").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("previewImage").src = e.target.result;
            document.getElementById("previewImage").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});