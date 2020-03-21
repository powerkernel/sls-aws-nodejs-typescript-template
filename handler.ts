import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const hello: APIGatewayProxyHandler = async event => {
  const code = 200;
  return {
    statusCode: code,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };
};
