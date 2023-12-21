async function getCountryName(code, page = 1) {
    let r = await fetch(`https://jsonmock.hackerrank.com/api/countries?page=${page}`);
    let { total_pages, data } = await r.json();
    let country = data.find(({ alpha2Code }) => alpha2Code === code);
    if (country) return country.name;
    else if (page < total_pages) return await getCountryName(code, ++page);
    else return null;
}
getCountryName('AF').then(console.log);
