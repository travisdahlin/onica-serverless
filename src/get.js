import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context, callback) {
  const params = {
    TableName: process.env.tableName,
    Key: {
      id: decodeURIComponent(event.pathParameters.id)
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      callback(null, success(result.Item));
      console.info(result.Item);
    } else {
      callback(null, failure({ status: false, error: "Item not found." }));
      console.warn("Item not found");
    }
  } catch (e) {
    callback(null, failure({ status: false, error: e.message }));
    console.error(e.message);
  }
}
