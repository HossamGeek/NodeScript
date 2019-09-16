import { Model } from 'mongoose';

export default class GetQueries {
    private model:any;
    constructor (_model : Model<any>){
         this.model = _model;
    }
    findAll(Where:Object){
        return this.model.find(Where)
    }
}