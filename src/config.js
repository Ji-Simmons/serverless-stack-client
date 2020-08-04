export default {
    STRIPE_KEY: "pk_test_51HBWwyDl68TNVtDpo4NMErdnIA8F4dxggMBb2nVzgrBH1McqjZQJRGI3z66lBxDU9DRGKzunjdl0PeH5MBlqyo3900O5Vk3XCY",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://lfaxcjefu1.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_yyXIFPeiW",
      APP_CLIENT_ID: "2o9aiosntrvbd7krj95pma3rse",
      IDENTITY_POOL_ID: "us-east-2:19f8dbc8-53fb-4b3c-bed3-d859da557586"
    }
  };