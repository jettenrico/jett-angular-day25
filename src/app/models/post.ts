import { IPost } from "../interfaces/i-post";

export class Post implements IPost{
    id:number;
    title:string;
    body:string;
    isPublished:boolean;

    constructor(id:number, title:string, body:string, isPublised:boolean){
        this.id = id;
        this.title = title;
        this.body = body;
        this.isPublished = isPublised;
    }
}
