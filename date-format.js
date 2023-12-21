
function formatDuration(seconds) {
    if (seconds === 0) return "now";
    let years = Math.floor(seconds / 31536000);
    let days = Math.floor((seconds % 31536000) / 86400);
    let hours = Math.floor((seconds % 86400) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let second = seconds % 60;
    let result = [];
    if (years > 0) {
        result.push(years + " year" + (years > 1 ? "s" : ""));
    }
    if (days > 0) {
        result.push(days + " day" + (days > 1 ? "s" : ""));
    }
    if (hours > 0) {
        result.push(hours + " hour" + (hours > 1 ? "s" : ""));
    }
    if (minutes > 0) {
        result.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
    }
    if (second > 0) {
        result.push(second + " second" + (second > 1 ? "s" : ""));
    }
    if (result.length > 1) {
        let last = result.pop();
        return result.join(", ") + " and " + last;
    }
    return result.join("");
}


console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");