// Funksjonen show(character) tar imot en kategori (character) som parameter.
function show(character) {
    // Finn den valgte kategorien i ressursene
    let chosen = resources.find((item) => item.category === character);

    // Opprett HTML-innhold for artikkelen basert på valgt kategori
    let article_innhold = `
        <article class="artikkel_kort">
            <h1 class="tittel">${chosen.category}</h1>
            <p class="text">${chosen.text}</p>
            <ul class="linker">
                <li><a href="${chosen.sources[0].url}">${chosen.sources[0].title}</a></li>
                <li><a href="${chosen.sources[1].url}">${chosen.sources[1].title}</a></li>
                <li><a href="${chosen.sources[2].url}">${chosen.sources[2].title}</a></li>
            </ul>
        </article>`;

    // Oppdater innholdet i HTML-dokumentet med den valgte artikkelen
    document.getElementById("Article").innerHTML = article_innhold;

    // Fjern "hidden" klassen for å vise artikkelen
    document.getElementById("Article").classList.remove("below");
}
