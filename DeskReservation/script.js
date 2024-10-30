function reserveDesk() {
    const desk = document.getElementById('desk').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Send reservation details to the server (placeholder code)
    // You would replace this with actual server communication
    console.log(`Desk: ${desk}, Date: ${date}, Time: ${time}`);

    // Display confirmation message
    document.getElementById('confirmation').innerText = `Desk ${desk} reserved for ${date} at ${time}. Confirmation email sent.`;
}
