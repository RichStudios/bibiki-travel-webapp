function updateSlots(tripId, newSlots) {
    // Update slots dynamically
    document.getElementById(tripId).querySelector('.slots').innerText = `Slots Available: ${newSlots}`;
}
