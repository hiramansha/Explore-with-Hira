// ========================================
// EXPLORE WITH HIRA
// COUNTRY EXPLORER
// ========================================


// ========================================
// COUNTRY DATA
// ========================================

const countries = {

    pakistan: {
        name: "Pakistan",
        capital: "Islamabad",
        region: "Asia",
        subregion: "Southern Asia",
        population: "241.5 Million",
        area: "881,913 km²",
        currency: "Pakistani Rupee (PKR)",
        languages: "Urdu, English",
        timezone: "UTC+5",
        callingCode: "+92",
        flag: "🇵🇰"
    },

    india: {
        name: "India",
        capital: "New Delhi",
        region: "Asia",
        subregion: "Southern Asia",
        population: "1.43 Billion",
        area: "3,287,590 km²",
        currency: "Indian Rupee (INR)",
        languages: "Hindi, English",
        timezone: "UTC+5:30",
        callingCode: "+91",
        flag: "🇮🇳"
    },

    china: {
        name: "China",
        capital: "Beijing",
        region: "Asia",
        subregion: "Eastern Asia",
        population: "1.41 Billion",
        area: "9,596,960 km²",
        currency: "Chinese Yuan (CNY)",
        languages: "Chinese",
        timezone: "UTC+8",
        callingCode: "+86",
        flag: "🇨🇳"
    },

    japan: {
        name: "Japan",
        capital: "Tokyo",
        region: "Asia",
        subregion: "Eastern Asia",
        population: "124 Million",
        area: "377,975 km²",
        currency: "Japanese Yen (JPY)",
        languages: "Japanese",
        timezone: "UTC+9",
        callingCode: "+81",
        flag: "🇯🇵"
    },

    "united arab emirates": {
        name: "United Arab Emirates",
        capital: "Abu Dhabi",
        region: "Asia",
        subregion: "Western Asia",
        population: "9.5 Million",
        area: "83,600 km²",
        currency: "UAE Dirham (AED)",
        languages: "Arabic",
        timezone: "UTC+4",
        callingCode: "+971",
        flag: "🇦🇪"
    },

    "saudi arabia": {
        name: "Saudi Arabia",
        capital: "Riyadh",
        region: "Asia",
        subregion: "Western Asia",
        population: "36.9 Million",
        area: "2,149,690 km²",
        currency: "Saudi Riyal (SAR)",
        languages: "Arabic",
        timezone: "UTC+3",
        callingCode: "+966",
        flag: "🇸🇦"
    },

    turkey: {
        name: "Turkey",
        capital: "Ankara",
        region: "Asia",
        subregion: "Western Asia",
        population: "85.3 Million",
        area: "783,562 km²",
        currency: "Turkish Lira (TRY)",
        languages: "Turkish",
        timezone: "UTC+3",
        callingCode: "+90",
        flag: "🇹🇷"
    },

    "united kingdom": {
        name: "United Kingdom",
        capital: "London",
        region: "Europe",
        subregion: "Northern Europe",
        population: "68.3 Million",
        area: "243,610 km²",
        currency: "Pound Sterling (GBP)",
        languages: "English",
        timezone: "UTC+0",
        callingCode: "+44",
        flag: "🇬🇧"
    },

    uk: {
        name: "United Kingdom",
        capital: "London",
        region: "Europe",
        subregion: "Northern Europe",
        population: "68.3 Million",
        area: "243,610 km²",
        currency: "Pound Sterling (GBP)",
        languages: "English",
        timezone: "UTC+0",
        callingCode: "+44",
        flag: "🇬🇧"
    },

    france: {
        name: "France",
        capital: "Paris",
        region: "Europe",
        subregion: "Western Europe",
        population: "68 Million",
        area: "551,695 km²",
        currency: "Euro (EUR)",
        languages: "French",
        timezone: "UTC+1",
        callingCode: "+33",
        flag: "🇫🇷"
    },

    germany: {
        name: "Germany",
        capital: "Berlin",
        region: "Europe",
        subregion: "Western Europe",
        population: "84.5 Million",
        area: "357,022 km²",
        currency: "Euro (EUR)",
        languages: "German",
        timezone: "UTC+1",
        callingCode: "+49",
        flag: "🇩🇪"
    },

    italy: {
        name: "Italy",
        capital: "Rome",
        region: "Europe",
        subregion: "Southern Europe",
        population: "58.8 Million",
        area: "301,340 km²",
        currency: "Euro (EUR)",
        languages: "Italian",
        timezone: "UTC+1",
        callingCode: "+39",
        flag: "🇮🇹"
    },

    spain: {
        name: "Spain",
        capital: "Madrid",
        region: "Europe",
        subregion: "Southern Europe",
        population: "48.6 Million",
        area: "505,990 km²",
        currency: "Euro (EUR)",
        languages: "Spanish",
        timezone: "UTC+1",
        callingCode: "+34",
        flag: "🇪🇸"
    },

    canada: {
        name: "Canada",
        capital: "Ottawa",
        region: "Americas",
        subregion: "Northern America",
        population: "40.1 Million",
        area: "9,984,670 km²",
        currency: "Canadian Dollar (CAD)",
        languages: "English, French",
        timezone: "UTC-3:30 to UTC-8",
        callingCode: "+1",
        flag: "🇨🇦"
    },

    "united states": {
        name: "United States",
        capital: "Washington, D.C.",
        region: "Americas",
        subregion: "Northern America",
        population: "335 Million",
        area: "9,833,520 km²",
        currency: "US Dollar (USD)",
        languages: "English",
        timezone: "UTC-5 to UTC-10",
        callingCode: "+1",
        flag: "🇺🇸"
    },

    usa: {
        name: "United States",
        capital: "Washington, D.C.",
        region: "Americas",
        subregion: "Northern America",
        population: "335 Million",
        area: "9,833,520 km²",
        currency: "US Dollar (USD)",
        languages: "English",
        timezone: "UTC-5 to UTC-10",
        callingCode: "+1",
        flag: "🇺🇸"
    },

    america: {
        name: "United States",
        capital: "Washington, D.C.",
        region: "Americas",
        subregion: "Northern America",
        population: "335 Million",
        area: "9,833,520 km²",
        currency: "US Dollar (USD)",
        languages: "English",
        timezone: "UTC-5 to UTC-10",
        callingCode: "+1",
        flag: "🇺🇸"
    },

    australia: {
        name: "Australia",
        capital: "Canberra",
        region: "Oceania",
        subregion: "Australia and New Zealand",
        population: "26.6 Million",
        area: "7,692,024 km²",
        currency: "Australian Dollar (AUD)",
        languages: "English",
        timezone: "UTC+8 to UTC+10",
        callingCode: "+61",
        flag: "🇦🇺"
    },

    brazil: {
        name: "Brazil",
        capital: "Brasília",
        region: "Americas",
        subregion: "South America",
        population: "216 Million",
        area: "8,515,767 km²",
        currency: "Brazilian Real (BRL)",
        languages: "Portuguese",
        timezone: "UTC-2 to UTC-5",
        callingCode: "+55",
        flag: "🇧🇷"
    },

    egypt: {
        name: "Egypt",
        capital: "Cairo",
        region: "Africa",
        subregion: "Northern Africa",
        population: "112 Million",
        area: "1,001,450 km²",
        currency: "Egyptian Pound (EGP)",
        languages: "Arabic",
        timezone: "UTC+2",
        callingCode: "+20",
        flag: "🇪🇬"
    },

    malaysia: {
        name: "Malaysia",
        capital: "Kuala Lumpur",
        region: "Asia",
        subregion: "South-Eastern Asia",
        population: "34.3 Million",
        area: "330,803 km²",
        currency: "Malaysian Ringgit (MYR)",
        languages: "Malay, English",
        timezone: "UTC+8",
        callingCode: "+60",
        flag: "🇲🇾"
    },

    indonesia: {
        name: "Indonesia",
        capital: "Jakarta",
        region: "Asia",
        subregion: "South-Eastern Asia",
        population: "277.5 Million",
        area: "1,904,569 km²",
        currency: "Indonesian Rupiah (IDR)",
        languages: "Indonesian",
        timezone: "UTC+7 to UTC+9",
        callingCode: "+62",
        flag: "🇮🇩"
    },

    bangladesh: {
        name: "Bangladesh",
        capital: "Dhaka",
        region: "Asia",
        subregion: "Southern Asia",
        population: "172.9 Million",
        area: "147,570 km²",
        currency: "Bangladeshi Taka (BDT)",
        languages: "Bengali",
        timezone: "UTC+6",
        callingCode: "+880",
        flag: "🇧🇩"
    },

    afghanistan: {
        name: "Afghanistan",
        capital: "Kabul",
        region: "Asia",
        subregion: "Southern Asia",
        population: "40.1 Million",
        area: "652,230 km²",
        currency: "Afghan Afghani (AFN)",
        languages: "Pashto, Dari",
        timezone: "UTC+4:30",
        callingCode: "+93",
        flag: "🇦🇫"
    },

    iran: {
        name: "Iran",
        capital: "Tehran",
        region: "Asia",
        subregion: "Southern Asia",
        population: "88.5 Million",
        area: "1,648,195 km²",
        currency: "Iranian Rial (IRR)",
        languages: "Persian",
        timezone: "UTC+3:30",
        callingCode: "+98",
        flag: "🇮🇷"
    },

    nepal: {
        name: "Nepal",
        capital: "Kathmandu",
        region: "Asia",
        subregion: "Southern Asia",
        population: "30.5 Million",
        area: "147,516 km²",
        currency: "Nepalese Rupee (NPR)",
        languages: "Nepali",
        timezone: "UTC+5:45",
        callingCode: "+977",
        flag: "🇳🇵"
    }

};


// ========================================
// HTML ELEMENTS
// ========================================

const countryInput =
    document.getElementById("country-input");

const searchBtn =
    document.getElementById("search-btn");

const errorMessage =
    document.getElementById("error-message");

const countryResult =
    document.getElementById("country-result");

const countryDropdownBtn =
    document.getElementById("country-dropdown-btn");

const countryDropdown =
    document.getElementById("country-dropdown");

const countryOptions =
    document.querySelectorAll(".country-option");

const clearCountryBtn =
    document.getElementById("clear-country-btn");


// ========================================
// SEARCH COUNTRY
// ========================================

function searchCountry() {

    const searchValue =
        countryInput.value.trim().toLowerCase();

    errorMessage.textContent = "";

    countryResult.innerHTML = "";

    if (searchValue === "") {

        errorMessage.textContent =
            "Please enter a country name.";

        return;
    }

    const country =
        countries[searchValue];

    if (!country) {

        errorMessage.textContent =
            "Country not found. Please try another country.";

        return;
    }

    showCountry(country);
}


// ========================================
// FLAG IMAGE
// ========================================

function getFlagImage(flagEmoji) {

    const code = [...flagEmoji]
        .map(char => char.codePointAt(0) - 127397)
        .map(code => String.fromCharCode(code))
        .join("")
        .toLowerCase();

    return `https://flagcdn.com/w320/${code}.png`;
}

// ========================================
// SHOW COUNTRY
// ========================================

function showCountry(country) {

    const mapUrl =
        "https://www.google.com/maps/search/?api=1&query="
        + encodeURIComponent(country.name);


    countryResult.innerHTML = `

        <div class="country-card">

            <!-- Country Visual -->

            <div class="country-visual">

                <div class="country-flag">

    <img
        src="${getFlagImage(country.flag)}"
        alt="${country.name} flag"
        onerror="this.style.display='none'; this.parentElement.textContent='${country.flag}';"
    >

</div>

                <div class="flag-label">
                    ${country.name}
                </div>

            </div>


            <!-- Country Information -->

            <div class="country-information">

                <div class="country-heading">

                    <span class="small-label">
                        COUNTRY DETAILS
                    </span>

                    <h2>
                        ${country.name}
                    </h2>

                </div>


                <div class="info-grid">


                    <!-- Capital -->

                    <div class="info-box">

                        <span class="info-icon">
                            🏛️
                        </span>

                        <div>

                            <small>
                                Capital
                            </small>

                            <strong>
                                ${country.capital}
                            </strong>

                        </div>

                    </div>


                    <!-- Region -->

                    <div class="info-box">

                        <span class="info-icon">
                            🌎
                        </span>

                        <div>

                            <small>
                                Region
                            </small>

                            <strong>
                                ${country.region}
                            </strong>

                        </div>

                    </div>


                    <!-- Subregion -->

                    <div class="info-box">

                        <span class="info-icon">
                            📍
                        </span>

                        <div>

                            <small>
                                Subregion
                            </small>

                            <strong>
                                ${country.subregion}
                            </strong>

                        </div>

                    </div>


                    <!-- Population -->

                    <div class="info-box">

                        <span class="info-icon">
                            👥
                        </span>

                        <div>

                            <small>
                                Population
                            </small>

                            <strong>
                                ${country.population}
                            </strong>

                        </div>

                    </div>


                    <!-- Area -->

                    <div class="info-box">

                        <span class="info-icon">
                            📐
                        </span>

                        <div>

                            <small>
                                Area
                            </small>

                            <strong>
                                ${country.area}
                            </strong>

                        </div>

                    </div>


                    <!-- Currency -->

                    <div class="info-box">

                        <span class="info-icon">
                            💰
                        </span>

                        <div>

                            <small>
                                Currency
                            </small>

                            <strong>
                                ${country.currency}
                            </strong>

                        </div>

                    </div>


                    <!-- Languages -->

                    <div class="info-box">

                        <span class="info-icon">
                            🗣️
                        </span>

                        <div>

                            <small>
                                Languages
                            </small>

                            <strong>
                                ${country.languages}
                            </strong>

                        </div>

                    </div>


                    <!-- Time Zone -->

                    <div class="info-box">

                        <span class="info-icon">
                            🕐
                        </span>

                        <div>

                            <small>
                                Time Zone
                            </small>

                            <strong>
                                ${country.timezone}
                            </strong>

                        </div>

                    </div>


                    <!-- Calling Code -->

                    <div class="info-box">

                        <span class="info-icon">
                            📞
                        </span>

                        <div>

                            <small>
                                Calling Code
                            </small>

                            <strong>
                                ${country.callingCode}
                            </strong>

                        </div>

                    </div>

                </div>


                <!-- Google Maps Button -->

                <a
                    href="${mapUrl}"
                    target="_blank"
                    class="map-button"
                >
                    🗺️ View on Google Maps
                </a>


                <!-- Explore Another Country -->

                <button
                    class="explore-again-btn"
                    onclick="resetCountrySearch()"
                >
                    🔎 Explore Another Country
                </button>


            </div>

        </div>

    `;
}


// ========================================
// SEARCH BUTTON
// ========================================

searchBtn.addEventListener(
    "click",
    function () {

        searchCountry();

    }
);


// ========================================
// ENTER KEY SEARCH
// ========================================

countryInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchCountry();

        }

    }
);


// ========================================
// DROPDOWN OPEN / CLOSE
// ========================================

countryDropdownBtn.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        countryDropdown.classList.toggle("show");

    }
);


// ========================================
// COUNTRY DROPDOWN SELECTION
// ========================================

countryOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                const selectedCountry =
                    option.getAttribute(
                        "data-country"
                    );

                countryInput.value =
                    selectedCountry;

                countryDropdown.classList.remove(
                    "show"
                );

                clearCountryBtn.style.display =
                    "block";

                searchCountry();

            }
        );

    }
);


// ========================================
// FILTER COUNTRIES WHILE TYPING
// ========================================

countryInput.addEventListener(
    "input",
    function () {

        if (
            countryInput.value.trim() !== ""
        ) {

            clearCountryBtn.style.display =
                "block";

        } else {

            clearCountryBtn.style.display =
                "none";

        }


        const searchText =
            countryInput.value
                .trim()
                .toLowerCase();


        countryDropdown.classList.add(
            "show"
        );


        let foundCountry = false;


        countryOptions.forEach(
            function (option) {

                const countryName =
                    option
                        .getAttribute(
                            "data-country"
                        )
                        .toLowerCase();


                if (
                    countryName.includes(
                        searchText
                    )
                ) {

                    option.style.display =
                        "block";

                    foundCountry = true;

                } else {

                    option.style.display =
                        "none";

                }

            }
        );


        // No Country Message

        let noCountryMessage =
            document.getElementById(
                "no-country-message"
            );


        if (!noCountryMessage) {

            noCountryMessage =
                document.createElement(
                    "div"
                );

            noCountryMessage.id =
                "no-country-message";

            noCountryMessage.textContent =
                "🌍 No countries found";

            noCountryMessage.style.padding =
                "15px";

            noCountryMessage.style.textAlign =
                "center";

            noCountryMessage.style.color =
                "#9b899b";

            noCountryMessage.style.fontSize =
                "14px";

            countryDropdown.appendChild(
                noCountryMessage
            );

        }


        if (foundCountry) {

            noCountryMessage.style.display =
                "none";

        } else {

            noCountryMessage.style.display =
                "block";

        }

    }
);


// ========================================
// CLOSE DROPDOWN WHEN CLICKING OUTSIDE
// ========================================

document.addEventListener(
    "click",
    function (event) {

        const clickedInsideSearch =
            event.target.closest(
                ".search-input-wrapper"
            );


        if (!clickedInsideSearch) {

            countryDropdown.classList.remove(
                "show"
            );

        }

    }
);


// ========================================
// CLEAR COUNTRY BUTTON
// ========================================

clearCountryBtn.addEventListener(
    "click",
    function () {

        countryInput.value = "";

        countryResult.innerHTML = "";

        errorMessage.textContent = "";

        countryDropdown.classList.remove(
            "show"
        );


        countryOptions.forEach(
            function (option) {

                option.style.display =
                    "block";

            }
        );


        clearCountryBtn.style.display =
            "none";

    }
);


// ========================================
// EXPLORE ANOTHER COUNTRY
// ========================================

function resetCountrySearch() {

    countryInput.value = "";

    countryResult.innerHTML = "";

    errorMessage.textContent = "";

    countryDropdown.classList.remove(
        "show"
    );


    countryOptions.forEach(
        function (option) {

            option.style.display =
                "block";

        }
    );


    clearCountryBtn.style.display =
        "none";


    countryInput.focus();

}

// ========================================
// DARK / LIGHT MODE
// ========================================

const themeToggle =
    document.getElementById("theme-toggle");


// Check saved theme

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


// Toggle theme

themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        const isDarkMode =
            document.body.classList.contains(
                "dark-mode"
            );


        if (isDarkMode) {

            themeToggle.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeToggle.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);
