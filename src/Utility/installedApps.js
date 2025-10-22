const KEY = "installedApps";

function safeParse(value) {
    try {
        return JSON.parse(value) || [];
    } catch {
        return [];
    }
}

export function getInstalledApps() {
    return safeParse(localStorage.getItem(KEY));
}

export function saveInstalledApps(apps = []) {
    localStorage.setItem(KEY, JSON.stringify(apps));
}

export function removeInstalledApp(id) {
    const apps = getInstalledApps();
    const filtered = apps.filter((a) => a.id !== Number(id));
    saveInstalledApps(filtered);
    return filtered;
}
