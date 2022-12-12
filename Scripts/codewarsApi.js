
const getStats = async () => {
    try{
        fetch("https://www.codewars.com/api/v1/users/meawckich")
        .then(response => response.json())
        .then(result => document.getElementById('codewars').innerHTML = result.ranks.overall.name);
        fetch("https://api.github.com/users/meawckich")
        .then(response => response.json())
        .then(result => document.getElementById('github').innerHTML = result.public_repos == undefined? 0 : result.public_repos);
    }
    catch (e) {
        throw new Error(e);
    }

}
