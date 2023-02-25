const loadCountries = (searchText) => {
  fetch(`https://restcountries.com/v3.1/${searchText}`)
    .then((res) => res.json())
    .then((data) => displayCountry(data))
    .catch((error) =>console.log(error))
};

const displayCountry = (countries) => {
    // console.log(countries);
  const countriesContainer = document.getElementById("all-countries");
  countriesContainer.innerHTML = "";
  //   for(const country of countries){
  //     console.log(country);
  //   }

  console.log(countries.length);
  countries.forEach((country) => {
    //console.log(country.capital[0]);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("col-10");
    countryDiv.classList.add("col-md-6");
    countryDiv.classList.add("col-lg-4");
    countryDiv.classList.add("mx-auto");
    countryDiv.classList.add("my-5");

    


    countryDiv.innerHTML = `
    
          <div class="card" style="width: 18rem">
            <img
              src="${country.flags.png}"
              class="card-img-top img-fluid country-img"
              alt="..." style="width: 22rem;
    height: 12rem;"
            />
            <div class="card-body">
              <h5 class="card-title">${country.name.common}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="d-flex justify-content-center">
              <a href="#" class="btn btn-primary">Population: ${country.population}</a>
              </div>
            </div>
          </div>
        
    `;

    countriesContainer.appendChild(countryDiv);
  });
};


const selectElement = document.querySelector("#country-select");
selectElement.addEventListener("change", function(){
    const selectedValue = selectElement.value;
    // console.log(selectedValue);
    const searchRegion = () =>{
        const searchText = `subregion/${selectedValue}`;
        // const searchText = `subregion/americas`;
        if (selectedValue === 'All Country'){
            loadCountries('all');
        }
        else{
            loadCountries(searchText);
        } 
        // console.log(searchText);
    }


    searchRegion();
})



loadCountries('all');





