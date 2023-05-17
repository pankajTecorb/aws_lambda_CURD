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
### Add User  => Post Type  (http://localhost:3000/dev/api/v1/add) 
- Request Body   
```
   {       
           "name":"userName", 
           "phoneNumber":"userPhone",
           "email":"userEmail",
           "address":"userAddress"
           
    }
``` 
### User Detail  =>  Get Type  (http://localhost:3000/dev/api/v1/detail/:id)
- Request Body   
```
  Param (id)
  
``` 

### Edit User  => Put Type  (http://localhost:3000/dev/api/v1//:id/edit) 
- Request Body   
```
   {       
           "name":"userName", 
           "phoneNumber":"userPhone",
           "email":"userEmail",
           "address":"userAddress"
           
    }
``` 
### User Status Change   => Put Type  (http://localhost:3000/dev/api/status/:id) 
- Request Body   
```
   {       
           "isActive":true/false 
          
    }
   Param (id) 
``` 
### Delete User  =>  Delete Type (http://localhost:3000/dev/api/v1/delete/:id)
- Request Body   
```
  Param (id)
  
```
