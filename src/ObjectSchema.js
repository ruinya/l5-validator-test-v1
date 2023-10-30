export default class ObjectSchema {
    validators = [(value) => Array.isArray(value)];

    shape(fields) {
        this.schema = fields;
        return this;
    }

    isValid(value) {
        const keys = Object.keys(value);
        if (keys.length !== Object.keys(this.schema).length) {
            return false;
        }
        return keys.every((key) => this.schema[key].isValid((value[key])));
    }
}
