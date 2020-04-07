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

export const getCountryData = async(name) => {
  const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "4235b924b7mshc2c6867f165137dp103a73jsn7a30a56a550d"
    }
  })

  const {countries_stat} = await response.json()

  const data = []

  countries_stat.map(country => {
    if(country['country_name'] === name) {
      const confirmed = country['cases']
      const recovered = country['total_recovered']
      const deaths = country['deaths']
      const critical = country['serious_critical']

      data.push({confirmed, deaths, recovered, critical})
    }
  })

  return data
}

export default getCountriesData