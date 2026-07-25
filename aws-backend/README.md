# PACS Security AWS Backend

This proof-of-concept backend uses AWS SAM and a Lambda-powered API to support the security mapping app.

## Features
- GET `/devices`
- GET `/rules`
- GET `/incidents`
- POST `/event`

## Deployment
1. Install AWS SAM CLI and AWS CLI
2. Run `npm install`
3. Run `sam build`
4. Run `sam deploy --guided`

## Local development
- `npm run start`

The handler is in `src/handler.ts` and can be extended to integrate DynamoDB, SNS, or other AWS services.
