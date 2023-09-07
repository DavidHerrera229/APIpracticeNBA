document.getElementById('loadPlayers').addEventListener('click', loadPlayers);
document.getElementById('getNets').addEventListener('click', getNets);

const URL = 'https://nba-stats-db.herokuapp.com/api/playerdata/season/2023';

//* This code brings API data correctly using the URl link.
// function getNets(){
//     fetch(URL)
//     .then((res) => res.json())
//     .then((data) => {
//         let output = '<h2>Users</h2>';
//         data.results.forEach(user => {
//             output += `
//             <ul>
//             <li>ID: ${user.id}</li>
//             <li>Player Name: ${user.player_name} </li>
//             <li>:Age ${user.age} </li>
//             <li>:Games ${user.games} </li>
//             <li>:Games Started ${user.games_started} </li>
//             <li>:Minutes Played ${user.minutes_played} </li>
//             <li>:PTS ${user.PTS} </li>
//             <li>:Team ${user.team} </li>
//             <li>:Season ${user.season} </li>
//             </ul>
//             `;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
// }

//* This code brings select API data saved on .json file in the local folder. (brooklyn Nets Players)
function getNets(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(user => {
            output += `
            <ul>
            <li>ID: ${user.id}</li>
            <li>Player Name: ${user.player_name} </li>
            <li>:Age ${user.age} </li>
            <li>:Games ${user.games} </li>
            <li>:Games Started ${user.games_started} </li>
            <li>:Minutes Played ${user.minutes_played} </li>
            <li>:PTS ${user.PTS} </li>
            <li>:Team ${user.team} </li>
            <li>:Season ${user.season} </li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}


//* This code brings the API data correctly (all players and results)
// function loadPlayers(){
//     fetch(URL)
//     .then((res) => res.json())
//     .then((data) => {
//         let post = '<h2>Users</h2>';
//         data.results.forEach(user => {
//             post += `
//             <ul>
//             <li>ID: ${user.id}</li>
//             <li>Player Name: ${user.player_name} </li>
//             <li>:Age ${user.age} </li>
//             <li>:Games ${user.games} </li>
//             <li>:Games Started ${user.games_started} </li>
//             <li>:Minutes Played ${user.minutes_played} </li>
//             <li>:PTS ${user.PTS} </li>
//             <li>:Team ${user.team} </li>
//             <li>:Season ${user.season} </li>
//             </ul>
//             `;
//         });
//         document.getElementById('post').innerHTML = post;
//     })
// }

//* This code brings the API data correctly (Now only asking for 3 subjects ID, Name & Team)
function loadPlayers(){
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        let post = '<h2>Users</h2>';
        data.results.forEach(user => {
            post += `
            <ul>
            <li>ID: ${user.id}</li>
            <li>Player Name: ${user.player_name} </li>
            <li>:Team ${user.team} </li>
            </ul>
            `;
        });
        document.getElementById('post').innerHTML = post;
    })
}