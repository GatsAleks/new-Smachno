

document.querySelector('.fetch-json')
    .addEventListener('click', fetchJson);

async function fetchJson() {
    const response = await fetch('client-data.json');
    const clientData = await response.json();
    let indx = Math.floor(Math.random() * Math.floor(clientData.length));
    document.querySelector('.client-name').innerText = clientData[indx].name;
    document.querySelector('.client-secondName').innerText = clientData[indx].secondName;
    document.querySelector('.back').innerText = clientData[indx].feedback;
}