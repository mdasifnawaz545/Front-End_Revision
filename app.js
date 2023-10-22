let url = "http://universities.hipolabs.com/search?name=";
let inp = document.querySelector('input');
let btn = document.querySelector("button");
let body = document.querySelector('body');
btn.addEventListener("click", async () => {
    let country = inp.value;
    console.log(country);
    let colarr = await getCollege(country);
    // console.log(colarr);
    display(colarr);
});
async function getCollege(country) {
    try {
        let col = await axios.get(url + country);
        // console.log(col.data);
        return col.data;
    } catch (error) {
        console.log("cought an error");
        let para = document.createElement('p');
        para.innerText = "Caught an Error";
        para.style.color = "#fff";
        body.appendChild(para);
    }
}
function display(colarr) {
    let nav = document.querySelector("#nav");
    nav.innerText = "";
    for (col of colarr) {
        let li = document.createElement('li');
        li.innerText = col.name;
        li.style.color="#fff";
        nav.append(li);
    }
}
