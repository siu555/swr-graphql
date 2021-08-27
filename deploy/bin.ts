import * as cdk from "@aws-cdk/core";
import { Builder } from "@sls-next/lambda-at-edge";
import { NextStack } from "./stack";

const builder = new Builder(".", "./build", {args: ['build']});

builder
  .build(true)
  .then(() => {
    const app = new cdk.App();
    new NextStack(app, "amplifyhosting", {
      analyticsReporting: true,
      description: "Testing deploying Full Stack Cloud with Next.js, Tailwind, and AWS CDK with SSR"
    });
  })
  .catch((e) => {
    // console.log(e);
    process.exit(1);
  });
