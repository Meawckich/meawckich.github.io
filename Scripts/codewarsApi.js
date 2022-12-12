
const getStats = async () => {
    var name;
    var katas;
    var response = await fetch("https://www.codewars.com/api/v1/users/meawckich")
    if(response.ok)
    {
        var json = await response.json();
        document.getElementById('codewars').innerHTML = json.ranks.overall.name;
        document.getElementById('katas').innerHTML = json.codeChallenges.totalCompleted;
    }

    try{
        fetch("https://api.github.com/users/meawckich")
        .then(response => response.json())
        .then(result => document.getElementById('github').innerHTML = result.public_repos == undefined? 0 : result.public_repos);
    }
    catch (e) {
        throw new Error(e);
    }
}
