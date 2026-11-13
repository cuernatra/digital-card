// Päivitä vuosiluku automaattisesti. Sivun sisältö toimii myös ilman JavaScriptiä.
document.querySelector('#year').textContent = new Date().getFullYear();

// Näytä kopiointipainike vain, kun JavaScript on käytössä.
const copyButton = document.querySelector('#copy-link');
const status = document.querySelector('#copy-status');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    // GitHub Pages käyttää HTTPS:ää, jota leikepöydän API tarvitsee.
    await navigator.clipboard.writeText(window.location.href);
    status.textContent = 'Linkki kopioitu!';
  } catch {
    // Jos selain estää kopioinnin, käyttäjä saa kopioitavan osoitteen.
    status.textContent = `Kopioi osoite selaimen osoiteriviltä: ${window.location.href}`;
  }
});
