export default function getDir(scriptPath) {
    let path = new URL(scriptPath).pathname.split('/');
    path.pop()
    return location.origin + path.join('/') + '/'
}
