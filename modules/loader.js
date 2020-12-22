export default async function load(path, file) {
    return await fetch(new URL(file || '', path).toString()).then(_ => _.text());
}
