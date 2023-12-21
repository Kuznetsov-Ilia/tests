let res = {};
async function getTeams(year, k, page = 1) {
    let r = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`);
    let { total_pages, data } = await r.json();
    data.forEach(({ team1, team2 }) => {
        res[team1] = res[team1] ? res[team1] + 1 : 1;
        res[team2] = res[team2] ? res[team2] + 1 : 1;
    });
    if (page < total_pages) return await getTeams(year, k, ++page);
    else return Object.keys(res).filter(team => res[team] >= k);
}
getTeams(2015, 13).then(console.log);
