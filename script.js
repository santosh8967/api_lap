//create div
let container = document.createElement("div");
container.setAttribute("class","container");
document.body.append(container);

//create paragraph
let paragraph = document.createElement("div");
paragraph.setAttribute("class","division")
container.append(paragraph);

//function
async function getdata()
{
    try{
        let url = await fetch("https://api.apicagent.com/?ua=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36");
        let data = await url.json();
        console.log(data);
        var value = (data.os);
        renderdata(value)
    }
    catch{

    }
}
getdata();

function renderdata(data=[])
{
console.log(data) 
paragraph.innerHTML+=`<p style="font-weight:bold">OS</p>`
paragraph.innerHTML+=`<p> Name: ${data.name}</p>`
paragraph.innerHTML+=`<p>Platform: ${data.platform}</p>`
paragraph.innerHTML+=`<p>Version: ${data.version}</p>`
}
