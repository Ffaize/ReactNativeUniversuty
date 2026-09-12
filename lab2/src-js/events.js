const events = [
    {
        id: 1,
        title: "Конференція",
        startsAt: "2024-07-15T09:00:00",
        seatsLeft: 50,
        category: "Бізнес",
        seatsLeft: 100,
        price: 200,
    },
    {
        id: 2,
        title: "Майстер-клас",
        startsAt: "2024-07-20T14:00:00",
        seatsLeft: 0,
        category: "Освіта",
        price: 150,
    },
    {
        id: 3,
        title: "Вебінар",
        startsAt: "2024-07-25T10:00:00",
        seatsLeft: 50,
        category: "Освіта",
        price: 100,
    },
    {
        id: 4,
        title: "Виставка",
        startsAt: "2024-08-01T11:00:00",
        seatsLeft: 20,
        category: "Мистецтво",
        price: 50,
    }
]

function getOpenEvents(events) {
    return events.filter(event => event.seatsLeft > 0);
}

function getEventsByCategory(events, category) {
    return events.filter(event => event.category === category);
}

function getEventById(events, id) {
    return events.find(event => event.id === id);
}

function getEventTitles(events) {
    return events.map(event => event.title);
}

module.exports = {
    events,
    getOpenEvents,
    getEventsByCategory,
    getEventById,
    getEventTitles
};