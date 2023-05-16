# Express Application Example

This  example demonstrates how to build an [express] CURD application for AWS Lambda based on serverless framework.

## Overview
This example built based on [aws-serverless-express].

## Prerequisite
You should install all dependencies.

- Nodejs
- AWS CLI
- Serverless offline framework
- MongoDb Data base local or atlas DB url
- AWS account with User Role auth (userName , password)

```
npm install
```

## Usage
### Deploy
If prerequisite is ready, run the command below to deploy this example to your AWS account.
```
npm run deploy
```

### Test locally
Do you not want to deploy this example? Or do you want to test before deploy? You can run it locally.
```
npm start
```

### Remove all resources
After you've done working with this example, run the command below to remove all resources from your AWS account. (if you want)
```
npm run remove
```


### API Routes
- Add user  => Post type (http://localhost:3000/dev/api/v1/add)  ,   body {name ,phoneNumber,email,address}
- Detail of user  => Get type  (http://localhost:3000/dev/api/v1/detail/:id)  ,   body {name ,phoneNumber,email,address}
- Edit user  => Put type  (http://localhost:3000/dev/api/v1//:id/edit)  ,   body {name ,phoneNumber,email,address}
- Status change of  user  => Put type (http://localhost:3000/dev/api/status/:id)   ,  body {name ,phoneNumber,email,address}
- Delete user  =>  Delete type (http://localhost:3000/dev/api/v1/delete/:id)  ,  body {name ,phoneNumber,email,address}