# Zainpay Node SDK

NodeJS wrapper for making request to Zainpay API


## Table of content

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Services exposed by the SDK](#available-services-exposed-by-the-sdk)

## Getting Started

- To get started with this SDK, create an [account](https://zainpay.ng/) on Zainpay if you haven't already.
- You can then retrieve your API keys from your [dashboard](https://zainpay.ng/).

## Installation

This SDK can be installed with `npm` or `yarn`.

Using `npm`,

```
npm install zainpay-nodejs-sdk
```

Using `yarn`,

```bash
yarn add zainpay-nodejs-sdk
```

## Usage

```js
const { Zainpay, serviceTypes} = require('zainpay-nodejs-sdk'); // JavaScript
```

Instantiate the Zainpay class

```js
  const reponse = await Zainpay({
    publicKey: PUBLIC_KEY,
    serviceType: serviceTypes.SERVICE_TYPE,
    sandbox: true,
    data: {
      "bankType": "wemaBank",
      "firstName": "Bello",
      "surname": "Samuel Sunday",
      "email": "bellosamuelsunday@gmail.com",
      "mobileNumber": "0810000000",
      "dob": "12-08-1980",
      "gender": "M",
      "address": "Gidado street Kano",
      "title": "Mr",
      "state": "Kano",
      "zainboxCode": "_FDkbg2DOykjQWRpNxv9d"
  }
  });
  console.log(reponse);
```

**Note:**

- The sandbox field is optional, if you don't specify it, it will default to false, and you will be using the [production(live)](https://zainpay.ng/) API. For example:
    
    ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.CREATE_VIRTUAL_ACCOUNT,
    data: {
      "bankType": "wemaBank",
      "firstName": "Bello",
      "surname": "Samuel Sunday",
      "email": "bellosamuelsunday@gmail.com",
      "mobileNumber": "0810000000",
      "dob": "12-08-1980",
      "gender": "M",
      "address": "Gidado street Kano",
      "title": "Mr",
      "state": "Kano",
      "zainboxCode": "_FDkbg2DOykjQWRpNxv9d"
  }
    });
    console.log(reponse);
    ```


- For more information about the services exposed by the SDK, please refer to the [documentation](https://zainpay.ng/developers/).

## Available Services exposed by the SDK

The following services are available with this SDK

**1**. [**Virtual-Accounts**](#1-virtual-accounts)
- [Get ZainBoxes](#get-zainboxes)

**2**. [**Card Endpoints**](#1-virtual-accounts)



### 1. Get ZainBoxes
- This request enables a merchant to get all his created zainboxes url.

   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ZAINBOXES
    });
    console.log(reponse);
    ```

### 2. Create Virtual Account
- Every virtual account most be tied to a zainbox. See the doc for creating an instance of a zainbox.

```js
  const reponse = await Zainpay({
    publicKey: PUBLIC_KEY,
    serviceType: serviceTypes.CREATE_VIRTUAL_ACCOUNT,
    sandbox: true,
    data: {
    "bankType": "wemaBank, 
    "firstName": "kabir",
    "surname": "idris", 
    "email": "binkabir@gmail.com", 
    "mobileNumber": "08068869000", 
    "dob": "12-08-1999", 
    "gender": "M", 
    "address": "aminu babandi", 
    "title": "Mr", 
    "state": "Kano", 
    "zainboxCode": "THbfnDvK5o9"
  }});
  console.log(reponse);
  ```
### 3. Get Virtual Accounts
- This request enables a merchant to get all his created virtual accounts. To get all virtual accounts GET the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.VIRTUAL_ACCOUNTS,
        sandbox: true,
        params: "{zainbox-codeName}"
    });
    console.log(reponse);
    ```

### 4. Get Virtual Account Balance
- This request enables a merchant to get the balance of a virtual account. To get the balance of a virtual account GET the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.VIRTUAL_ACCOUNT_BALANCE,
        params: "{virtual-account-number}"
        sandbox: true,
    });
    console.log(reponse);
    ```
### 5. Get Zainbox Transactions
- This request enables a merchant to get all transactions made to a zainbox. To get all transactions made to a zainbox GET the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ZAINBOX_TRANSACTIONS,
        sandbox: true,
        params: "{zainbox-codeName}"
    });
    console.log(reponse);
    ```

### 5. Get Merchant Transactions
- This request enables a merchant to get all transactions made to a zainbox. To get all transactions made to a zainbox GET the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.MERCHANT_TRANSACTIONS,
        sandbox: true,
    });
    console.log(reponse);
    ```

### 6. Get Zainbox Profile
- This request enables a merchant to get the profile of a zainbox. To get the profile of a zainbox GET the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ZAINBOX_PROFILE,
        sandbox: true,
        params: "{zainbox-codeName}"
    });
    console.log(reponse);
    ```

### 7. Create Zainbox
- This request enables a merchant to create a zainbox. To create a zainbox POST the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.CREATE_ZAINBOX,
        sandbox: true,
        data: {
          "name":"tesSSt.Onliness",
          "tags": "test",
          "callbackUrl": "https://www-test-a3ef.restdb.io/wlistener",
          "email": "info@test.onlines"
        }
    });
    console.log(reponse);
    ```

### 8. Update Virtual Account Status
- This request enables a merchant to update the status of a virtual account. To update the status of a virtual account POST the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.UPDATE_VIRTUAL_ACCOUNT_STATUS,
        sandbox: true,
        data: {
          "zainboxCode": "THbfnDvK5o", 
          "accountNumber": "7963799062", 
          "status": true 
        }
    });
    console.log(reponse);
    ```

### 9. All Virtual Account Balance of a Zainbox
- This request enables a merchant to get the balance of all virtual accounts of a zainbox. To get the balance of all virtual accounts of a zainbox GET the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ALL_VIRTUAL_ACCOUNT_BALANCE,
        sandbox: true,
        params: "{zainbox-codeName}"
    });
    console.log(reponse);
    ```

## 10. Get Bank List
- This request enables a merchant to get the list of banks supported by Zainpay. To get the list of banks supported by Zainpay GET the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.BANK_LIST,
        sandbox: true,
    });
    console.log(reponse);
    ```

<!-- Name Enquiry
 -->
## 11. Name Enquiry
- This request enables a merchant to get the name of a bank account holder. To get the name of a bank account holder GET the json payload below.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.NAME_ENQUIRY,
        sandbox: true,
        params: "?bankCode={bankCode}&accountNumber={accountNumber}"

    });
    console.log(reponse);
    ```
    



