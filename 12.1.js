let callAjax = function () {


    let object = new XMLHttpRequest();

    object.onload = () => {


        let abc = JSON.parse(object.responseText)

        domlogic(abc);
    };


    object.open("get", "https://reqres.in/api/users?page=2");
    object.send();
};

//Now We have TO perForm Dom operation on The Data in abc object


let domlogic = function (abc) {

    console.log(abc);

    let parent = document.querySelector("#parent");

    for (let i = 0; i < abc.data.lenght; i++) {

        const abcData = abc.data[i];

        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = abcData.first_name;

        parent.insertBefore(newElement, parent.firstChild);
    }
};