function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("hidden");
    });
  
    document.getElementById(sectionId).classList.remove("hidden");
  }
  
  async function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      reason: document.getElementById("reason").value,
      browser: navigator.userAgent, // Capture browser info
      machineId: window.navigator.platform, // Capture platform/machine info
    };
  
    // Prepare the data string to send via curl format
    const dataString = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nReason: ${formData.reason}\nBrowser: ${formData.browser}\nMachine ID: ${formData.machineId}`;
  
    try {
      // Send data using fetch (emulating a curl request)
      const response = await fetch(
        "http://ntfy.404engineering.online/AcCDReSwUIuHg38J",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: dataString,
        },
      );
  
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Error:", error); // Log the actual error for debugging
    }
  }
  