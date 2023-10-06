// Create div
let container = document.createElement("div");
container.setAttribute("class", "container");
document.body.append(container);

// Create paragraph
let paragraph = document.createElement("p");
paragraph.setAttribute("class", "division");
container.append(paragraph);

// Function
async function getData() {
    try {
        let url = await fetch("https://api.apicagent.com/?ua=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36");
        let data = await url.json();
        console.log(data);
        renderData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getData();

function renderData(data) {
    console.log(data);
    paragraph.innerHTML += `<p style="font-weight:bold">OS</p>`;
    paragraph.innerHTML += `<p>Name: ${data.os.name}</p>`;
    paragraph.innerHTML += `<p>Platform: ${data.os.platform}</p>`;
    paragraph.innerHTML += `<p>Version: ${data.os.version}</p>`;
}
