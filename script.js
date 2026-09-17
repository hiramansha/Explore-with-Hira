// =========================
// ELEMENTS
// =========================

const countryInput = document.getElementById("country-input");
const searchBtn = document.getElementById("search-btn");
const errorMessage = document.getElementById("error-message");
const countryResult = document.getElementById("country-result");


// =========================
// SEARCH COUNTRY
// =========================

async function searchCountry() {

    const countryName = countryInput.value.trim();

    // Empty input
    if (countryName === "") {

        errorMessage.textContent =
            "Please enter a country name.";

        countryResult.innerHTML = "";

        return;
    }


    // Clear previous messages
    errorMessage.textContent = "";

    countryResult.innerHTML = `
        <p class="loading">
            🌍 Exploring ${countryName}...
        </p>
    `;


    try {

        // =========================
        // API REQUEST
        // =========================

        const response = await fetch(
            `https://api.restcountries.com/countries/v5/name?q=${encodeURIComponent(countryName)}`,
            {
                headers: {
                    "Authorization": "Bearer rc_live_demo"
                }
            }
        );


        // Convert response to JSON
        const result = await response.json();

        console.log("API Response:", result);


        // =========================
        // CHECK RESPONSE
        // =========================

        if (!response.ok) {
            throw new Error("Country not found");
        }


        // =========================
        // GET COUNTRY
        // =========================

        const country = result.data.objects[0];


        if (!country) {
            throw new Error("Country not found");
        }


        // =========================
        // COUNTRY DATA
        // =========================

        const name =
            country.names?.common || "N/A";


        const capital =
            country.capitals?.[0] || "N/A";


        const region =
            country.region || "N/A";


        const population =
            country.population
                ? country.population.toLocaleString()
                : "N/A";


        const area =
            country.area
                ? country.area.toLocaleString() + " km²"
                : "N/A";


        const code =
            country.codes?.alpha_2 || "N/A";


        const flag =
            country.flag?.emoji || "🌍";


        // =========================
        // DISPLAY COUNTRY
        // =========================

        countryResult.innerHTML = `

            <div class="country-card">

                <div class="country-flag">

                    <div class="big-flag">
                        ${flag}
                    </div>

                </div>


                <div class="country-info">

                    <h2>
                        ${name}
                    </h2>


                    <p>
                        <strong>📍 Capital:</strong>
                        ${capital}
                    </p>


                    <p>
                        <strong>🌎 Region:</strong>
                        ${region}
                    </p>


                    <p>
                        <strong>👥 Population:</strong>
                        ${population}
                    </p>


                    <p>
                        <strong>📐 Area:</strong>
                        ${area}
                    </p>


                    <p>
                        <strong>🏳️ Country Code:</strong>
                        ${code}
                    </p>

                </div>

            </div>

        `;

    }


    catch (error) {

        console.error("ERROR:", error);

        countryResult.innerHTML = "";

        errorMessage.textContent =
            "Country not found. Please check the country name.";

    }

}


// =========================
// SEARCH BUTTON
// =========================

searchBtn.addEventListener(
    "click",
    searchCountry
);


// =========================
// ENTER KEY
// =========================

countryInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchCountry();

        }

    }
);