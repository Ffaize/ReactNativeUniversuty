export function formatEventTitle(title: string, category: string): string {
    return `Подія : ${title} (${category})`;
}

export function isRegistrationOpen(seatsLeft: number): boolean {
    return seatsLeft > 0;
}

export function printEventSummary(title: string, seatsLeft: number): void {
    const registrationStatus = isRegistrationOpen(seatsLeft) ? 'Реєстрація відкрита' : 'Реєстрація закрита';
    console.log(`${formatEventTitle(title, registrationStatus)}`);
}