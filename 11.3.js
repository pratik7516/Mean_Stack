window.addEventListener("load", () => {

    console.log("I am called once the page load");

    let pbc = document.querySelector("#parentBlockElement");

    console.log(pbc);

    for (let i = 0; i <= 20; i++) {

        let newElement = pbc.children[0].cloneNode(true);

        pbc.insertBefore(newElement, pbc.firstChild);
    }
});