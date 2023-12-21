function humanReadable(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds - h * 3600) / 60);
    let s = seconds - h * 3600 - m * 60;
    return [h, m, s].map(i => i < 10 ? '0' + i : i).join(':');
}

humanReadable(3600);

// /'01:00:00'