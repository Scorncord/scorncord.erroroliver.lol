import { readFileSync, writeFileSync } from "fs";

const BaseRedirects = {
    "/github": "https://github.com/Scorncord/Scorncord",
    "/discord": "https://discord.gg/574gU979yp",
    "/support": "https://discord.gg/574gU979ypd",
    "/install": "/download",
    "/plugins.json":
        "https://raw.githubusercontent.com/Scorncord/builds/main/plugins.json",
    "/plugin-readmes.json":
        "https://raw.githubusercontent.com/Scorncord/builds/main/plugin-readmes.json",
    "/donate": "https://github.com/sponsors/Scorncord",
    "/click-to-help/vencord": "https://github.com/sponsors/Scorncord",
    "/docs/plugin-requests":
        "https://github.com/Scorncord/plugin-requests/issues/new?template=request.yml",
};

const VesktopDownloads = version => ({
    "/download/vesktop/universal/windows": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/Scorntop-Setup-${version}.exe`,
    "/download/vesktop/amd64/windows-portable": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/VesktopScorntop-${version}-win.zip`,
    "/download/vesktop/arm64/windows-portable": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/Scorntop-${version}-arm64-win.zip`,

    "/download/vesktop/universal/dmg": `https://github.com/Vencord/Vesktop/releases/download/v${version}/Scorntop-${version}-universal.dmg`,

    "/download/vesktop/amd64/tar": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/scorntop-${version}.tar.gz`,
    "/download/vesktop/amd64/rpm": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/scorntop-${version}.x86_64.rpm`,
    "/download/vesktop/amd64/deb": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/scorntop_${version}_amd64.deb`,
    "/download/vesktop/amd64/appimage": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/Scorntop-${version}.AppImage`,

    "/download/vesktop/arm64/dmg": `https://github.com/Vencord/Scorntop/releases/download/v${version}/Vesktop-${version}-arm64.dmg`,

    "/download/vesktop/arm64/appimage": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/Scorntop-${version}-arm64.AppImage`,
    "/download/vesktop/arm64/tar": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/scorntop-${version}-arm64.tar.gz`,
    "/download/vesktop/arm64/deb": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/scorntop_${version}_arm64.deb`,
    "/download/vesktop/arm64/rpm": `https://github.com/Scorncord/Scorntop/releases/download/v${version}/scorntop-${version}.aarch64.rpm`,
});

const Redirects = {
    ...BaseRedirects,
    ...VesktopDownloads(
        readFileSync("scripts/_latestVesktopVersion.txt", "utf-8").trim()
    ),
};

const RedirectsString = Object.entries(Redirects)
    .map(([source, dest]) => `${source} ${dest} 302`)
    .join("\n");

writeFileSync("public/_redirects", RedirectsString);
