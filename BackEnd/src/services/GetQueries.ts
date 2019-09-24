import { Model ,Document} from 'mongoose';

export default class GetQueries {
    private model:Model<Document>;
    constructor (_model : Model<Document>){
         this.model = _model;
    }
    findAll(Where:Object){
        return this.model.find(Where)
    }
}