import { CampusEvent } from './events';
import { Attendee } from './attendee';

/**
 * Реєструє учасника на подію.
 * Повертає оновлену подію (а не void), бо викликачу зручно одразу
 * прочитати нове значення seatsLeft без повторного пошуку події в масиві.
 */
export function registerForEvent(attendee: Attendee, event: CampusEvent): CampusEvent {
    if (event.seatsLeft === 0) {
        throw new Error(`На подію "${event.title}" немає вільних місць`);
    }

    if (attendee.isRegisteredForEvent(event.id)) {
        throw new Error(`Учасник вже зареєстрований на подію "${event.title}"`);
    }

    attendee.registerForEvent(event.id);
    event.seatsLeft -= 1;

    return event;
}
