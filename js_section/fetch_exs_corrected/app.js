let output = document.querySelector('#grid');

fetch('https://randomuser.me/api/?results=30')
    .then(resp => resp.json())
    .then(data => showResults(data))
    .catch(() => {output.textContent = 'Ocorreu um erro';
    });

function showResults( users ) {
    console.log(users);

    let femaleUsers = users.results.filter (user => user.gender === 'female' );

    console.log(femaleUsers)

    femaleUsers.map(({ 
        picture: { large }, 
        name: { first, last }, 
        email, 
        phone, 
        location: { city, timezone: {offset} } 
    }) => {

        output.innerHTML += `
            <article>
                <img src="${large}" alt="User Avatar">
                <h2>${first} ${last}</h2>
                <h2>${email}</h2>
                <p>${phone}</p>
                <p>${city}</p>
                <p>${offset}</p>
                <hr>
            </article>
        `;
    });
}
