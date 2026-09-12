function formatEventTitle(title, category){
    return `Подія : ${title} (${category})`;
}

function isRegistrationOpen(seatsLeft) {
    return seatsLeft > 0;
}

function printEventSummary(title, seatsLeft) {
    const registrationStatus = isRegistrationOpen(seatsLeft) ? 'Реєстрація відкрита' : 'Реєстрація закрита';
    console.log(`${formatEventTitle(title, registrationStatus)}`);
}

module.exports = {
    formatEventTitle,
    isRegistrationOpen,
    printEventSummary
};