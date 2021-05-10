document.getElementById("search-input").addEventListener('keyup',
    (e) => {
        let query = e.target.value;
        console.log(query);
        fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => showResult(data))
        .catch(err => console.log(err));
    })

let showResult = results => {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML="";

    for(let i = 0; i < results.length; i++){
        result = results[i]["show"];
        let showTitle = result["name"];
        let showImage = result["image"];

        if(showImage != null) showImage = showImage["medium"];
        else showImage = "";

        resultsDiv.innerHTML += `<a class="result" href=#>
          <img src="${showImage}" alt="" class="show-img">
          <p class="show-title">${showTitle}</p>
        </a>`
    }
}