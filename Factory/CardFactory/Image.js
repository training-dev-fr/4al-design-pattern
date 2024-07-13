export default class Image{
    constructor(picture, title){
        this.picture = picture;
        this.title = title;
    }

    displayCard(){
        return `
            <div class="card">
                <div class="title">${this.title}</div>
                <img src="${element.picture}" />
            </div>
        `
    }
}