// server.js
// Backend for "Explore with Hira"
// - Serves the frontend (public/)
// - GET /api/country/:name -> fetches real country data from REST Countries API
//   and merges in any personal notes you've written in data/notes.json

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const NOTES_PATH = path.join(__dirname, 'data', 'notes.json');

// ---------- Helpers ----------

function loadNotes() {
  try {
    const raw = fs.readFileSync(NOTES_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return {};
  }
}

function formatCountryData(apiCountry, notes) {
  const c = apiCountry;

  // "Pakistani Rupee (PKR)" -- use the currency's code (the object key), not its symbol
  const currencies = c.currencies
    ? Object.entries(c.currencies).map(([code, cur]) => `${cur.name} (${code})`)
    : [];

  const languages = c.languages ? Object.values(c.languages) : [];

  // "+92" style calling code from idd.root + first suffix
  let callingCode = 'N/A';
  if (c.idd?.root) {
    const suffix = c.idd.suffixes && c.idd.suffixes.length === 1 ? c.idd.suffixes[0] : '';
    callingCode = c.idd.root + suffix;
  }

  return {
    name: c.name?.common || 'Unknown',
    officialName: c.name?.official || '',
    capital: c.capital ? c.capital[0] : 'N/A',
    region: c.region || 'N/A',
    subregion: c.subregion || 'N/A',
    population: c.population ?? null,
    area: c.area ?? null,
    flagEmoji: c.flag || '',
    flagImage: c.flags?.png || c.flags?.svg || '',
    currencies,
    languages,
    timezones: c.timezones || [],
    callingCode,
    mapsUrl: c.maps?.googleMaps || '',
    // Personal, hand-written content merged in by country name (case-insensitive)
    personalNote: notes[c.name?.common?.toLowerCase()] || null
  };
}

// ---------- Middleware ----------

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---------- API Routes ----------

// GET /api/country/:name  -> single country lookup
app.get('/api/country/:name', async (req, res) => {
  const countryName = req.params.name.trim();

  if (!countryName) {
    return res.status(400).json({ error: 'Country name is required.' });
  }

  try {
    const fields = 'name,capital,region,subregion,population,area,flags,flag,currencies,languages,timezones,idd,maps';
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fields=${fields}`;

    const apiRes = await fetch(url);

    if (apiRes.status === 404) {
      return res.status(404).json({ error: `No country found matching "${countryName}".` });
    }
    if (!apiRes.ok) {
      throw new Error(`REST Countries API responded with ${apiRes.status}`);
    }

    const data = await apiRes.json();

    // The API can return multiple close matches; prefer an exact (case-insensitive) match
    const notes = loadNotes();
    const exact = data.find(
      d => d.name?.common?.toLowerCase() === countryName.toLowerCase()
    );
    const best = exact || data[0];

    res.json(formatCountryData(best, notes));
  } catch (err) {
    console.error('Error fetching country data:', err.message);
    res.status(502).json({ error: 'Could not fetch country data right now. Please try again.' });
  }
});

// GET /api/countries -> list of all country names (for autocomplete/dropdown)
app.get('/api/countries', async (req, res) => {
  try {
    const apiRes = await fetch('https://restcountries.com/v3.1/all?fields=name');
    if (!apiRes.ok) throw new Error(`REST Countries API responded with ${apiRes.status}`);
    const data = await apiRes.json();
    const names = data.map(c => c.name.common).sort((a, b) => a.localeCompare(b));
    res.json(names);
  } catch (err) {
    console.error('Error fetching country list:', err.message);
    res.status(502).json({ error: 'Could not fetch country list right now.' });
  }
});

// GET /api/notes/:name -> just your personal note for a country (handy for an admin/editor UI later)
app.get('/api/notes/:name', (req, res) => {
  const notes = loadNotes();
  const key = req.params.name.trim().toLowerCase();
  res.json({ country: req.params.name, note: notes[key] || null });
});

// POST /api/notes/:name -> add/update your personal note for a country
// Body: { "note": "My trip in 2023 was..." }
app.post('/api/notes/:name', (req, res) => {
  const key = req.params.name.trim().toLowerCase();
  const { note } = req.body;

  if (!note || typeof note !== 'string') {
    return res.status(400).json({ error: 'Body must include a "note" string.' });
  }

  const notes = loadNotes();
  notes[key] = note;

  fs.writeFileSync(NOTES_PATH, JSON.stringify(notes, null, 2), 'utf-8');
  res.json({ country: req.params.name, note });
});

// ---------- Fallback ----------

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Explore with Hira backend running at http://localhost:${PORT}`);
});
