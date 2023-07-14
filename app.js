const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '579b2971d6msh4cb4962ca141338p14a535jsn590ea3115c19',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            const wordHeading = document.getElementById('wordheading');
            const definition = document.getElementById('definition');
            wordHeading.innerHTML = 'Meaning of: ' + response.word;
            definition.innerHTML = response.definition.replace("2", "<br>2").replace("3", "<br>3").replace("4", "<br>4");
        })
        .catch(err => console.error(err));
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchinput');
    const searchBtn = document.getElementById('searchbtn');

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dictionary(searchInput.value);
    });
});
