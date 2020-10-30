import DS from "ember-data";
import { pluralize } from "ember-inflector";

export default DS.RESTSerializer.extend({
  primaryKey: "id",
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let modelName = pluralize(primaryModelClass.modelName);
    payload = { [modelName]: payload };
    return this._super(
      store,
      primaryModelClass,
      { [modelName]: payload },
      id,
      requestType
    );
  },
});
