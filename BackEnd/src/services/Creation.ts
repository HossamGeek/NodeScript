import { Model } from 'mongoose';

export default class Creation {
    private model:any;
    constructor (_model : Model<any>){
         this.model = _model;
    }
    set(data:Object){
            let _new = new this.model(data);
            return _new.save();
    }
}