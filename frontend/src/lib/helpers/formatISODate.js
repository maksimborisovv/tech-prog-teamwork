export function formatISODate(date) {
    return new Date(date).toString().substring(0, 10);
}
