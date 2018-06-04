var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var allData = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < allData.length; i++) {
    var aliens = allData[i];
    var areReal = Object.keys(aliens);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < areReal.length; j++) {
      var varInput = areReal[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = aliens[varInput];
    }
  }
}

function handleSearchButtonClick() {
  var searchDate = $dateInput.value.trim();
  var searchCity = $cityInput.value.trim().toLowerCase();
  var searchState = $stateInput.value.trim().toLowerCase();
  var searchCountry = $countryInput.value.trim().toLowerCase();
  var searchShape = $shapeInput.value.trim().toLowerCase();

  allData = dataSet.filter(function(sort) {
    var filterDate = sort.datetime;
    var filterCity = sort.city.toLowerCase();
    var filterState = sort.state.toLowerCase();
    var filterCountry = sort.country.toLowerCase();
    var filterShape = sort.shape.toLowerCase();

    if (
      (searchDate === filterDate || searchDate == '')&&
      (searchCity === filterCity || searchCity == '')&&
      (searchState === filterState || searchState == '')&&
      (searchCountry === filterCountry || searchCountry == '')&&
      (searchShape === filterShape || searchShape == '')
    ) {
      return true;
    } 
    return false;
  });
  renderTable();
}

renderTable();
