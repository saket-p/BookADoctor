export default async function fetchData (url, cb) {
    const response = await fetch(url);
    const data = await response.json();
    cb(data);
}