/*window.addEventListener("load", () => {
    let PB = document.querySelector("#parentBlock");

    let postList = [
        { id: 1, post: "Hello World" },
        { id: 2, post: "Hello Universe" },
        { id: 3, post: "Hello Javascript" },
        { id: 4, post: "Hello HTML" },
        { id: 5, post: "Hello CSS" },
        { id: 6, post: "Hello DOM" },
        { id: 7, post: "Hello JSON" },
        { id: 8, post: "Hello XML" },
        { id: 9, post: "Hello Callback" },
        { id: 10, post: "Hello AJAX" },
    ];

    for (i = 0; i <= 20; i++) {

        let item = postList[i];

        const NewElement = PB.children[0].cloneNode(true);

        NewElement.children[0].innerHTML = item.post;
        PB.insertBefore(NewElement, PB.firstChild)

    }

})*/



window.addEventListener("load", () => {

    let postList = [
        { id: 1, post: "Hello World" },
        { id: 2, post: "Hello Universe" },
        { id: 3, post: "Hello Javascript" },
        { id: 4, post: "Hello HTML" },
        { id: 5, post: "Hello CSS" },
        { id: 6, post: "Hello DOM" },
        { id: 7, post: "Hello JSON" },
        { id: 8, post: "Hello XML" },
        { id: 9, post: "Hello Callback" },
        { id: 10, post: "Hello AJAX" },
    ];

    for (i = 0; i < 20; i++) {
        let item = postList[i]
        let PB = document.querySelector("#parentBlock");
        let NewElement = PB.children[0].cloneNode(true)

        NewElement.children[0].innerHTML = item.post;
        PB.insertBefore(NewElement, PB.firstChild);

    }
}
)