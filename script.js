document.getElementById("calculate").addEventListener("click", function() {
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
    const berat = parseFloat(document.getElementById("berat").value);

    if (isNaN(tinggi) || isNaN(berat) || tinggi <= 0 || berat <= 0) {
        alert("Masukkan tinggi dan berat yang valid!");
        return;
    }

    const bmi = (berat / (tinggi * tinggi)).toFixed(2);
    const resultElement = document.getElementById("result");
    const commentElement = document.getElementById("comment");

    resultElement.textContent = bmi;

    if (bmi < 18.5) {
        commentElement.textContent = "Komentar: Berat badan kurang, makan king.";
    } else if (bmi < 24.9) {
        commentElement.textContent = "Komentar: Berat badan normal.";
    } else if (bmi < 29.9) {
        commentElement.textContent = "Komentar: Berat badan berlebih, olahraga king.";
    } else {
        commentElement.textContent = "Komentar: Obesitas, ntnt king.";
    }
});

const changeImperialTinggi = document.getElementById("tinggi")
const changeImperialBerat = document.getElementById("berat")
const changeMetricTinggi = document.getElementById("tinggi")
const changeMetricBerat = document.getElementById("tinggi")

document.getElementById("imperial").addEventListener("click", function() {
    changeImperialTinggi.textContent = "Tinggi (inch)";
    changeImperialBerat.textContent = "Berat (lbs)";
});

document.getElementById("metric").addEventListener("click", function() {
    changeImperialTinggi.textContent = "Tinggi (cm)";
    changeImperialBerat.textContent = "Berat (kg)";
});