import { Model,Document } from 'mongoose';

export default class Creation {
    private model:Model<Document>;
    constructor (_model : Model<Document>){
         this.model = _model;
    }
    set(data:Object){
            let _new = new this.model(data);
            return _new.save();
    }
}