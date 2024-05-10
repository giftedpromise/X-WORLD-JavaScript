// Define the API URL for fetching all countries data
const apiUrl = "https://restcountries.com/v3.1/all";

// Fetch all countries data from the API
fetch(apiUrl)
  .then((response) => {
    // Check if the response is OK (HTTP status code in the 200 range)
    if (!response.ok) {
      throw new Error("Failed to fetch countries data");
    }
    // Convert the response to JSON
    return response.json();
  })
  .then((countries) => {
    // Sort the countries alphabetically by their common name
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

    // Get the countries-wrapper container
    const countriesWrapper = document.querySelector(".countries-wrapper");
    countriesWrapper.style.display = "flex";
    countriesWrapper.style.flexWrap = "wrap";
    countriesWrapper.style.paddingLeft = "10rem";
    countriesWrapper.style.paddingRight = "10rem";
    countriesWrapper.style.marginTop = "5rem";

    // Update the total-countries count
    const totalCountriesElement = document.querySelector("#total-countries");
    totalCountriesElement.textContent = `Total Number of Countries: ${countries.length}`;
    totalCountriesElement.style.fontWeight = "bold";
    totalCountriesElement.style.fontSize = "16px";
    // Iterate over the sorted array of countries
    countries.forEach((country) => {
      // Create a new div element for each country
      const countryDiv = document.createElement("div");

      // Set the text content of the div to the country's common name
      countryDiv.textContent = country.name.common; // Use `common` for the common name of the country

      // Optionally, style each country div
      countryDiv.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.3)";
      countryDiv.style.padding = "10px";
      countryDiv.style.height = "100px";
      countryDiv.style.margin = "5px";
      countryDiv.style.fontWeight = "bold";
      countryDiv.style.width = "calc((100% / 6) - 10px)";
      countryDiv.style.textAlign = "center";
      countryDiv.style.display = "flex"; // Use flexbox to center the text
      countryDiv.style.justifyContent = "center"; // Center text horizontally
      countryDiv.style.alignItems = "center";

      // Append the new div element to the countries-wrapper container
      countriesWrapper.appendChild(countryDiv);
    });
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch operation
    console.error("Error fetching countries data:", error);
  });
