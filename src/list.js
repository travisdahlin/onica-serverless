import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context, callback) {
  const params = {
    TableName: process.env.tableName
  };

  try {
    const result = await dynamoDbLib.call("scan", params);
    if (result.Items) {
      callback(null, success(result.Items));
      console.info(result.Items);
    } else {
      callback(null, failure({ status: false, error: "No Items found." }));
      console.warn("No Items found.");
    }
  } catch (e) {
    callback(null, failure({ status: false, error: e.message }));
    console.error(e.message);
  }
}
