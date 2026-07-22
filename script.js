function searchMedicine() {
    let input = document.querySelector("input").value.toLowerCase().trim();

    let medicines = {
        "paracetamol": {
            use: "Used for fever and pain relief.",
            dose: "500mg - 650mg every 4-6 hours (doctor's advice recommended).",
            side: "Nausea, rash, liver damage if overdosed."
        },
        "dolo 650": {
            use: "Used for fever and body pain.",
            dose: "650mg as prescribed by doctor.",
            side: "Stomach upset, allergy."
        },
        "crocin": {
            use: "Used for fever and headache.",
            dose: "As directed by doctor.",
            side: "Rare allergic reactions."
        },
        "cetirizine": {
            use: "Used for allergy, itching and sneezing.",
            dose: "10mg once daily.",
            side: "Sleepiness, dry mouth."
        },
        "azithromycin": {
            use: "Antibiotic used for bacterial infections.",
            dose: "Only on doctor's prescription.",
            side: "Diarrhea, nausea, stomach pain."
        }
    };

    if (medicines[input]) {
        document.getElementById("result").innerHTML = `
        <div class="card">
            <h2>💊 ${input.toUpperCase()}</h2>
            <p><b>Use:</b> ${medicines[input].use}</p>
            <p><b>Dose:</b> ${medicines[input].dose}</p>
            <p><b>Side Effects:</b> ${medicines[input].side}</p>
        </div>`;
    } else {
        document.getElementById("result").innerHTML = `
        <div class="card">
            <h2>❌ Medicine Not Found</h2>
            <p>Please check the spelling or consult a healthcare professional.</p>
        </div>`;
    }
}
