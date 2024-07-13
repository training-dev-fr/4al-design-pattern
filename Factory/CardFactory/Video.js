export default class Video{
    constructor(video, title){
        this.video = video;
        this.title = title;
    }

    displayCard(){
        return `
            <div class="card">
                <div class="title">${this.title}</div>
                <video src="${element.video}" />
            </div>
        `
    }
}