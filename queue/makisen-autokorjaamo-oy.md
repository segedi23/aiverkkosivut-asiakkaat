---
slug: makisen-autokorjaamo-oy
status: queued
createdAt: 2026-04-09T10:11:13.761Z
customerEmail: janne@edustajanne.fi
customerName: Jukka Mäkinen
businessName: Mäkisen Autokorjaamo Oy
type: restore
oldUrl: https://www.autokopa.fi
netlifySiteId: 8d98b188-830b-4ec7-bac5-b95e8d7a801c
previewUrl: https://makisen-autokorjaamo-oy.aiverkkosivut.fi
---

# Uusi onboarding: Mäkisen Autokorjaamo Oy

## Lomakkeen tiedot

- **Nimi:** Jukka Mäkinen
- **Yritys:** Mäkisen Autokorjaamo Oy
- **Sähköposti:** janne@edustajanne.fi
- **Paikkakunta:** Tampere
- **Puhelin:** 040 123 4567
- **Yrityksen sähköposti:** info@makisenautokorjaamo.fi
- **Some-linkit:** facebook.com/makisenautokorjaamo

## Sivuston suunnitelma

- **Tyyppi:** restore (VANHAN PÄIVITYS)
- **Tarkoitus:** Autokorjaamo
- **Toimiala:** Autohuolto ja korjaus
- **Rakenne:** Etusivu, Palvelut, Yhteystiedot
- **Väri:** Sininen ja valkoinen
- **Lisäpalvelut:** Ajanvaraus
- **Hinta:** 249€ + 39€/kk
- **Vanhan sivun osoite:** https://www.autokopa.fi


## Lisätiedot

Haluamme modernin ilmeen mutta vanha logo säilyy

## Valmistelut

- **Slug:** `makisen-autokorjaamo-oy`
- **Netlify-sivu luotu:** 8d98b188-830b-4ec7-bac5-b95e8d7a801c
- **Preview-URL:** https://makisen-autokorjaamo-oy.aiverkkosivut.fi

## Mitä tehdä seuraavaksi (Claude Code -session)

1. `cd /Users/janne/Desktop/verkkosivuja`
2. Aja: `claude "Lue /tmp/aiverkkosivut-asiakkaat-queue/makisen-autokorjaamo-oy.md ja tee V3/V4-flow täydellisesti"`
3. Claude Code:
   - Analysoi vanha sivu selaimessa (jos restore)
   - Lataa kuvat ja värit
   - Kirjoittaa CODEX_TASK.md:n ääkkösillä
   - Ajaa Codexin
   - Tarkistaa tuloksen visuaalisesti
   - Iteroi kunnes laatu on korkea
   - Commitoi sites/makisen-autokorjaamo-oy/ ja päivittää customers.json (lisää authorizedEmails: ["janne@edustajanne.fi"])
   - Poistaa queue/makisen-autokorjaamo-oy.md
   - Postaa Slackiin review-linkin
