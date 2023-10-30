import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
    number() {
        return new NumberSchema();
    }
    array() {
        return new ArraySchema();
    }
    object() {
        return new ObjectSchema();
    }
}

const v = new Validator();
console.log(v);
console.log(v.number());
console.log(v.number().isValid(12));
