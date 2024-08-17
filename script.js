function calculate() {
    const voltage = document.getElementById('voltage').value;
    const capacity = document.getElementById('capacity').value;
    const currentDraw = document.getElementById('currentDraw').value;

    if (voltage && capacity && currentDraw) {
        const wattHours = (voltage * capacity) / 1000; // Convert mAh to Ah
        const batteryLife = (capacity / 1000) / currentDraw; // Convert mAh to Ah and calculate hours

        document.getElementById('result').innerHTML = `
            <p><strong>Watt-Hours (Wh):</strong> ${wattHours.toFixed(2)} Wh</p>
            <p><strong>Estimated Battery Life:</strong> ${batteryLife.toFixed(2)} hours</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p style="color: red;">Please fill out all fields.</p>`;
    }
}
