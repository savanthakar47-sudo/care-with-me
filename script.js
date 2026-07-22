const medicines = {
  paracetamol: {
    use: "Fever aur pain ke liye.",
    warning: "Doctor ki salah ke bina recommended dose se zyada na lein."
  },
  cetirizine: {
    use: "Allergy ke symptoms ke liye.",
    warning: "Isse neend aa sakti hai."
  }
};

function searchMedicine() {
  const input = document.getElementById("medicine").value.toLowerCase().trim();
  const result = document.getElementById("result");

  if (medicines[input]) {
    result.innerHTML =
      "<h3>" + input + "</h3>" +
      "<p><b>Use:</b> " + medicines[input].use + "</p>" +
      "<p><b>Warning:</b> " + medicines[input].warning + "</p>";
  } else {
    result.innerHTML = "<p>Medicine information not found.</p>";
  }
}
