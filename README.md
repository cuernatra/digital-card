# Joel Turkka — Digital card

A minimal, dark professional profile in plain HTML, CSS and JavaScript. No dependencies or build step.

Live site: https://cuernatra.github.io/digital-card/

## Edit the profile

- `index.html`: name, title, introduction, skills, email and links. Finnish code comments mark editable sections.
- `style.css`: colours are defined in `:root`; mobile layout is at the bottom.
- `script.js`: updates the copyright year. Links work without JavaScript.

## Update the documents without changing their links

Replace `files/cv.pdf` or `files/portfolio.pdf` with a new PDF using exactly the same filename and folder. Commit the change to `main`. GitHub Pages will publish the update automatically.

Permanent document URLs:

- https://cuernatra.github.io/digital-card/files/cv.pdf
- https://cuernatra.github.io/digital-card/files/portfolio.pdf

PDF links open in a new tab, where supported. Browser settings may instead download the PDF. A cached older version can require a refresh.

The card URL and printed QR code remain unchanged when editing the page or replacing these PDFs. Renaming the repository or GitHub account can change the URL.

## Privacy

The site and linked PDFs are public. Search indexing is discouraged with `noindex` and `robots.txt`; these do not restrict access. The HTML, CSS and JavaScript delivered to visitors can always be inspected in their browsers.
