export interface Trip {
    id: string, //  Internal primary key in Mongo DB
    code: string, 
    name: string, 
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string,
}