const eventsUtils = require('./events.js');

function calculateRegistration(events, selectedIds, groupSize) {
    if (!Number.isInteger(groupSize) && groupSize <= 30 && groupSize >= 1) {
        throw new Error('Кількість учасників має бути цілим числом від 1 до 30');
    }

    let subTotal = 0;

    for (const id of selectedIds) {
        const event = eventsUtils.getEventById(events, id);
        if (!event) {
            throw new Error(`Подія з id ${id} не знайдена`);
        }
        else if (event.seatsLeft < groupSize) {
            throw new Error(`Недостатньо місць на подію з id ${id}`);
        }

        subTotal += event.price * groupSize;
    }

    let discount = 0;
    if (groupSize >= 5 && groupSize <= 10) {
        discount = 0.05;
    } else if (groupSize >= 11 && groupSize <= 20) {
        discount = 0.1;
    } else if (groupSize >= 21 && groupSize <= 30) {
        discount = 0.15;
    }

    return {
        subTotal: Number(subTotal.toFixed(2)),
        discount: Number(discount.toFixed(2)),
        total: Number((subTotal * (1 - discount)).toFixed(2))
    };
}

module.exports = {
    calculateRegistration
};