const api_url = "https://api.adviceslip.com/advice"

async function getApi(url) {
    const response = await fetch(url);

    let data = await response.json();
    if (response) {
        hideLoader();
    }

    show(data)
}

getApi(api_url)

function hideLoader() {
    document.getElementById("loading").style.display = 'none';
}


function show(data) {

    let text = `
    <div class='advice-title'>
     ADVICE # <span class="title">${data.slip.id}</span>
    </div>
    <p class="text">"${data.slip.advice}"</p>
    `
     
    document.getElementById("text").innerHTML = text

}

const reloadButton = document.getElementById('reload-button')
reloadButton.addEventListener('click', loadAdvice)

function loadAdvice() {
    window.location.reload()
   }
