export class Product {
    constructor(
        public name:string,
        public price:number,
        public imageUrl: string = '',
        public description: string = '',
        public category: string = '',
        public id?:string,
    ){}
}