# Onica Serverless API

Serverless API consits of a list and get api that return data from a DynamoDB table.

## Setup

### CI/CD

To setup the CI/CD piplines for dev and prod environments:

- Download the template/cicd-pipeline.yml CloudFormation template
- Create the CloudFormation stack, etiher through the AWS Console or with the CLI

**Note the stack name is important and should be sls-pipeline**

```bash
$ aws cloudformation create-stack --stack-name sls-pipeline --template-body file://templates/cicd-piipeline.yml --capabilities CAPABILITIES_IAM
```

### Dev Environment

- Clone the repository and install dependencies.

```bash
$ npm install
```

- Install serverless-framework

```bash
$ npm i -g serverless
```

## Deploy

The application can be deployed manually from the command line if you have the necessary IAM permissions, or can be commited to the CodeCommit repository created by the cicd-pipeline CloudFormation template which will trigger an automated deployement.

### Manual Deployment

**Deploy to dev**

```bash
$ sls deploy -v
```

- check the output for the api endpoints.

**Deploy to prod**

```bash
$ sls deploy -v --stage prod
```

- check the output for the api endpoints.

### CI/CD Deployment

- Find the appropriate CodeCommit Repository URL for the serverless-api repo (check CodeCommit or the sls-pipeline CloudFormation stack output) and add the remote repository to git.
- Commit to the dev branch to deploy to dev.
- Commit to the master branch to deploy to prod.
- Check the out CodeBuild logs for the api endpoints, or check ApiGateway.
