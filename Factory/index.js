let galleryElement = document.querySelector(".gallery");

export default async function gallery(){
    let result = await fetch("./data.json");
    let data = await result.json();

    for(let element of data){
        // if(element.type === "image"){
        //     galleryElement.innerHTML += `<img src="${element.picture}" />`;
        // }else if(element.type === "video"){
        //     galleryElement.innerHTML += `<video src="${element.video}" />`;
        // }
        galleryElement.innerHTML += element.display();
    }
}

gallery();