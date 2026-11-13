# Oma QR-kortti

Yksinkertainen GitHub Pages -pohja: HTML, CSS ja JavaScript. Ei asennusta, riippuvuuksia, seurantaa tai rakennusvaihetta.

## Muokkaaminen

- `index.html`: nimi, nimikirjaimet, esittely, sähköposti ja linkit. Yhteystiedot ovat esimerkkejä: vaihda ne ennen kortin jakamista.
- `style.css`: värit `:root`-kohdassa sekä ulkoasu.
- `script.js`: linkin kopiointipainike ja vuosiluku.

Avaa `index.html` selaimessa esikatselua varten. Kopiointipainikkeen toiminta riippuu selaimen leikepöytäluvasta; muu sisältö toimii ilman JavaScriptiäkin.

## Julkaisu GitHub Pagesiin

1. Luo GitHubiin julkinen repo `digital-card` käyttäjälle `cuernatra` ja vie nämä tiedostot `main`-haaran juureen.
2. Avaa repon **Settings → Pages → Build and deployment**.
3. Valitse **Deploy from a branch**, haaraksi **main**, kansioksi **/(root)** ja tallenna.
4. Odota julkaisun valmistumista ja tarkista GitHubin näyttämä osoite. Suunniteltu osoite on `https://cuernatra.github.io/digital-card/`.
5. Tee QR-koodi vasta varmennetusta osoitteesta. Testaa se puhelimella ennen kortin tulostamista.

Sivun sisältöä voi päivittää saman osoitteen takana, jolloin kortin QR-koodi säilyy. Repon nimen tai käyttäjänimen muuttaminen voi rikkoa osoitteen.

## Yksityisyys

Tämä pohja on julkinen. QR-koodi sisältää tavallisen URL-osoitteen; kuka tahansa osoitteen saanut voi avata sen myös ilman QR-koodia. `robots.txt` ja HTML:n `noindex` pyytävät hakukoneita jättämään sivun indeksoimatta, mutta eivät ole pääsynhallintaa.

Yksityinen lähdekoodirepo ei yksin tee Pages-sivusta yksityistä. Aidosti yksityinen GitHub Pages -sivu vaatii GitHub Enterprise Cloud -organisaation ja kävijälle repon lukuoikeuden. QR-koodi ei ohita kirjautumista. Älä lisää tähän pohjaan salasanoja tai salaisia henkilötietoja.

GitHubin ohje: https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/about-privately-published-github-pages-sites
