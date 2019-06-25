import { Connection, EntitySchema, EntityMetadata } from 'typeorm'

// this is a copypasta of the existing typeorm Connection method
// with one line changed
// @ts-ignore
Connection.prototype.findMetadata = function (target: Function | EntitySchema<any> | string): EntityMetadata | undefined {
  return this.entityMetadatas.find(metadata => {
    // @ts-ignore
    if (metadata.target.name === target.name) { // in latest typeorm it is metadata.target === target
      return true;
    }
    if (target instanceof EntitySchema) {
      return metadata.name === target.options.name;
    }
    if (typeof target === "string") {
      if (target.indexOf(".") !== -1) {
        return metadata.tablePath === target;
      } else {
        return metadata.name === target || metadata.tableName === target;
      }
    }

    return false;
  });
}
