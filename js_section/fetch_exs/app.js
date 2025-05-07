let grid = document.querySelector('#grid');

fetch('https://randomuser.me/api/?results=30')
    .then(response => response.json())
    .then(data => mostrarUsers(data))
    .catch(() => {
        grid.textContent = 'Ocorreu um erro de comunicação';
    });

function mostrarUsers(users) {
    console.log(users);

    //Create a const that'll filter (or, in this case, include), all users whose gender is female.
    const femUsers = users.results.filter (user => user.gender === "female" );

    //Out of those users, include the following information inside each card
    femUsers.map(({ 
        picture: { large }, 
        name: { first, last }, 
        email, 
        phone, 
        location: { city, timezone: {offset} } 
    }) => {

        //Put all that into text

        grid.innerHTML += `
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
