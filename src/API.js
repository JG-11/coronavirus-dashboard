const getCountriesData = async() => {
  const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "4235b924b7mshc2c6867f165137dp103a73jsn7a30a56a550d"
    }
  })

  const {countries_stat} = await response.json()

  return countries_stat
}

export default getCountriesData