# aiverkkosivut-asiakkaat

Monorepo AI-verkkosivut -asiakkaiden sivustoille.

## Rakenne

```
customers.json       # Mappaus domain → slug → Netlify site
sites/
  palosaaren-metalli/
  kuljetusliike-lindgren/
  rm-hitsaamo/
  sbs-innovation/
  ...
```

Sähköpostin `info@aiverkkosivut.fi` käsittelee Cloudflare Worker `aiverkkosivut-email`,
joka etsii lähettäjän domainin `customers.json`-tiedostosta ja ohjaa muutokset oikealle
sivustolle.
