# Zainpay Node SDK

NodeJS wrapper for making request to Zainpay API


## Table of content

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Services exposed by the SDK](#available-services-exposed-by-the-sdk)

## Getting Started

- To get started with this SDK, create an [account](https://zainpay.ng/login) on Zainpay if you haven't already.
- You can then retrieve your API keys from your [dashboard](https://zainpay.ng/merchant/dashboard/settings).

## Installation

This SDK can be installed with `npm` or `yarn`.

Using `npm`,

```bash
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

Instantiate the `Zainpay` class

```js
  const reponse = await Zainpay({
    publicKey: PUBLIC_KEY,
    serviceType: serviceTypes.SERVICE_TYPE_NAME,
    sandbox: true,
    data: {
      "bankType": "wemaBank",
      "firstName": "Bello"
  }
  });
  console.log(reponse);
```



**Note:**
The `Zainpay` class takes in the following parameters:

- **publicKey** - This is your public key, which can be found on your [dashboard](https://zainpay.ng/merchant/dashboard/settings).
- **serviceType** - This is the service you want to use, for example, `CREATE_VIRTUAL_ACCOUNT`. See below for all available service types.
- **sandbox** - This is a boolean value, if set to `true`, it will use the [sandbox](https://sandbox.zainpay.ng/) API, if set to `false`, it will use the [production(live)](https://api.zainpay.ng/) API.
- **data** - This is the data you want to post as a payload, for example, the payload for creating a virtual account.
- **params** - This is the params you want querying the strings, for example, the params for getting a virtual account.


- For more information, please refer to the [documentation](https://zainpay.ng/developers/).

### Service Type Name List
- `CREATE_ZAINBOX`
- `ZAINBOXES`
- `ZAINBOX_TRANSACTIONS`
- `MERCHANT_TRANSACTIONS`
- `CREATE_VIRTUAL_ACCOUNT`
- `VIRTUAL_ACCOUNTS`
- `VIRTUAL_ACCOUNT_TRANSACTIONS`
- `UPDATE_VIRTUAL_ACCOUNT_STATUS`
- `VIRTUAL_ACCOUNT_BALANCE`
- `ALL_VIRTUAL_ACCOUNT_BALANCE`
- `ZAINBOX_PROFILE`
- `BANK_LIST`
- `NAME_ENQUIRY`
- `FUNDS_TRANSFER`
- `TRANSFER_VERIFICATION`
- `DEPOSIT_VERIFICATION`
- `TOTAL_PAYMENT_COLLECTED`
- `CREATE_SCHEDULED_SETTLEMENT`
- `GET_SCHEDULED_SETTLEMENT`
- `INITIALIZE_PAYMENT`
- `RETRIEVE_PAYMENT_INFO`
- `GET_CARD_PAYMENT_STATUS`
- `RECONCILE_CARD_PAYMENT`
- `RECONCILE_DEPOSIT_PAYMENT`
- `MAKE_RECURRING_CARD_PAYMENT`


## Available Services exposed by the SDK

The following services are available with this SDK

### 1. Create Zainbox
- A zainbox is a virtual bucket that allows a merchant to create unlimited multiple virtual accounts.
- This endpoint allows a merchant to create a zainbox.
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.CREATE_ZAINBOX,
        sandbox: true,
        data: {
          "name":"wecode-contribution",
          "tags": "test",
          "codeNamePrefix": "333",
          "callbackUrl": "https://www-test-a3ef.restdb.io/wlistener",
          "emailNotification": "info@test.onlines", 
          "allowAutoInternalTransfer": false,
        }
    });
    console.log(reponse);
    ```

    
    ***Response***
    ```json
    {
        "code": "00",
        "data": {
            "codeName": "333_zB2lg6lJtcGzP5XqouN9",
            "name": "wecode-contribution"
        },
        "description": "successful",
        "status": "200 OK"
   }
    ```     



### 2. Get All ZainBoxes
- This request enables a merchant to get all his zainboxes.

   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ZAINBOXES,
        sandbox: true,
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
        "code": "00",
        "data": [
            {
                "callbackUrl": "http://10e1-41-184-106-54.ngrok.io/notification",
                "codeName": "THbfnDvK5o",
                "emailNotification": "info@test.onlines",
                "name": "test-box",
                "tags": "land, management"
            },
            {
                "callbackUrl": "http://localhost:2009/payments/zainpay/notification",
                "codeName": "333_zB2lg6lJtcGzP5XqouN9",
                "emailNotification": "info@test.onlines",
                "name": "wecode-contribution",
                "tags": "test"
            },

        ],
        "description": "successful",
	    "status": "200 OK"
    }
    ```

### 3. Create Virtual Account
- This endpoint allows a merchant to create a virtual account and map it to a zainbox. A zainbox can hold multiple virtual accounts.

    ```js

    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.CREATE_VIRTUAL_ACCOUNT,
        sandbox: true,
        data: {
            "bankType": "wemaBank", 
            "firstName": "Saminu",
            "middleName": "Sunday",
            "surname": "Jonh", 
            "email": "johnsaminu@gmail.com", 
            "mobileNumber": "08012345678", 
            "dob": "12-08-1999", 
            "gender": "M", 
            "address": "No 21 AA Rufa'i street, Kano", 
            "title": "Mr", 
            "state": "Kano", 
            "zainboxCode": "THbfnDvK5o",
            "bvn" :"12345678901"
        }
    });
    console.log(reponse);
    ```
    ***Response***
    ```json
    {
        "code": "00",
        "data": {
            "accountName": "John Saminu Sunday",
            "accountNumber": "4426334208", 
            "bankName": "wemaBank",
            "bvn": "12345678901",
            "email": "johnsaminu@gmail.com"
        },
        "description": "successful",
        "status": "200 OK"
    }
    ```
### 4. Get Virtual Accounts In a Zainbox
- This endpoint allows a merchant to get all virtual accounts linked to a zainbox.

    **Parameter:** zainboxCode(required).
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.VIRTUAL_ACCOUNTS,
        sandbox: true,
        params: "{zainboxCode}"
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
	"code": "00",
	"data": [
        {
            "bankAccount": "4426334208",
            "bankName": "035",
            "name": "John Saminu Sunday"
        },
        {
            "bankAccount": "7969472891",
            "bankName": "035",
            "name": "Idris Urmi Bello"
        }
    ],
    "description": "successful",
	"status": "200 OK"
}
    ```

### 5. Get Virtual Account Balance
- This endpoint allows a merchant to get the current wallet balance of a virtual account number.

    **Parameter:** virtualAccoutNumber(required)
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.VIRTUAL_ACCOUNT_BALANCE,
        params: "{virtualAccoutNumber}"
        sandbox: true,
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
        "code": "00",
        "data":
        {
            "accountName": "Aminu Nasar Adam", 
            "accountNumber": "7966884043", 
            "balanceAmount": 372555, 
            "bankCode": "035",
            "transactionDate": "2021-10-13T13:45:52" 
        }, 
        "description": "successful",
	    "status": "200 OK"
    }
    ```
    
### 6. Update Virtual Account Status

- This endpoint allows a merchant to activate or deactivate virtual account.
- NOTE: Setting the `status` field to `true` will activate the virtual account, while setting it to `false` will deactivate it.

    ***Important Note***
    A deactivated virtual account will not be able to receive or transfer funds

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
 
    ***Response***
    ```json
        {
            "code": "00",
            "description": "Successfully updated",
            "status": "200 OK"
        }
    ```


### 7. All Virtual Account Balances of a Zainbox
- This endpoint allows a merchant to fetch all current account balances for all virtual accounts in a zainbox.
    
    **Parameter:** zainboxCode(required)
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ALL_VIRTUAL_ACCOUNT_BALANCE,
        sandbox: true,
        params: "{zainboxCode}"
    });
    console.log(reponse);
    ```
    
    ***Response***
    ```json
    {
    "code": "00",
    "data":  
    [
        {
        "accountName": "Aminu Nasar Adam",
        "accountNumber": "7966884043",
        "balanceAmount": 372555,
        "bankCode": "000003",
        "transactionDate": "2021-10-13T13:45:52"
        },
        {
        "accountName": "Khalid Ali Sani",
        "accountNumber": "1234567890",
        "balanceAmount": 200,
        "bankCode": "000003",
        "transactionDate": "2021-12-13T13:45:52"
        },
        {
        "accountName": "Nura Bala Usman",
        "accountNumber": "9900778833",
        "balanceAmount": 105000,
        "bankCode": "000003",
        "transactionDate": "2022-01-29T13:45:52"
        }
    ],
    "description": "successful",
    "status": "200 OK"
    }                 
    ```

### 8. Virtual Account Transactions
- This endpoint allows a merchant to get all transactions of an account
    
    **Parameter:** accountNumber(required), recordsCount(optional, default is 20)
    ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.VIRTUAL_ACCOUNT_TRANSACTIONS,
        sandbox: true,
        params: "{accountNumber}/{recordsCount}"
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
        "code": "00",
        "data": [
            {
                "accountNumber": "7966884043",
                "amount": 289,
                "balance": 700,
                "narration": "test",
                "transactionDate": "2021-10-13T13:41:39",
                "transactionRef": "",
                "transactionType": "transfer"
            },
            {
                "accountNumber": "7966884043",
                "amount": 7289,
                "balance": 7289,
                "narration": "",
                "transactionDate": "2021-10-13T13:45:52",
                "transactionRef": "",
                "transactionType": "deposit"
            }
        ],
        "description": "successful",
	    "status": "200 OK"
    }  
    ```


## 9. Get Bank List
- This endpoint allows a merchant to get the list of banks supported by Zainpay. 
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.BANK_LIST,
        sandbox: true,
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
    "code": "00",
    "data": [
        {
        "code": "120001",
        "name": "9PAYMENT SERVICE BANK"
        },
        {
        "code": "090270",
        "name": "AB MICROFINANCE BANK"
        },
        {
        "code": "070010",
        "name": "ABBEY MORTGAGE BANK"
        }
        ],
    "description": "Bank list",
    "status": "200 OK"
    }
    ```
## 10. Create Settlement
- This endpoint allows a merchant to create a scheduled settlement for a zainbox. Please bear in mind that at any given time, a zainbox can only have one type of settlement.

Planned settlements are divided into three categories:
- T1: **Transaction plus one working day** The value of the T1 schedule. The period must always be on a daily basis.
- T2: **Trasaction plus 7 days** Transaction plus seven days for T7 schedule should be one of Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
- T3: **Transaction plus 30 days** The schedule Period value for T30 should be 1 - 30 or lastDayOfMonth

***Important Note**
- Days like February 28th and February 29th, as well as months with only 30 days, will be covered by lastDayOfMonth.

The payload's settlementAccountList parameter is an array/list of bank accounts with their corresponding settlement percentages.

***Scenario:***
- Let's say you have a zainbox with three virtual accounts, and you want to set it up so that the total deposits in these three virtual accounts are split between two accounts at every Transaction plus one day (T1). The first settlement account has 90% of the funds, whereas the second contains only 10%.

   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.CREATE_SCHEDULED_SETTLEMENT,
        sandbox: true,
        data: {
            "name": "new-daily-settlement3",
            "zainboxCode": "THbfnDvK5o",
            "scheduleType": "T1",
            "schedulePeriod": "Daily",
            "settlementAccountList": [
                {
                    "accountNumber": "1234567890",
                    "bankCode": "0009",
                    "percentage": "10"
                },
                {
                    "accountNumber": "1234567890",
                    "bankCode": "0009",
                    "percentage": "90"
                }
            ],
            "status": true
      }
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
     {
        "code": "00",
        "description": "successful",
        "status": "200 OK"
     }
    ```

## 11. Get Settlement
- This endpoint allows a merchant to get settlement(s) tied to a zainbox

    **Parameter:** zainboxCode(required)
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.GET_SCHEDULED_SETTLEMENT,
        sandbox: true,
        params: "?zainboxCode={zainboxCode}"
    });
    console.log(reponse);
    ```


***Response***
   ```json
    {
	"code": "00",
	"data": {
		"name": "new-daily-settlement3",
		"schedulePeriod": "Daily",
		"scheduleType": "T30",
		"settlementAccounts": [
			{
				"accountNumber": "1234567890",
				"bankCode": "000013",
				"percentage": "90"
			},
			{
				"accountNumber": "0987654321",
				"bankCode": "000026",
				"percentage": "10"
			}
		],
		"zainbox": "THbfnDvK5op"
	},
	"description": "Successful",
	"status": "200 OK"
}
    ```


## 12. Name Enquiry
- This endpoint allows a merchant to validate a bank account number.
    
    **Parameter:** bankCode(required), accountNumber(required)
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.NAME_ENQUIRY,
        sandbox: true,
        params: "?bankCode={bankCode}&accountNumber={accountNumber}"

    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
        "code": "00",
        "data": {
            "accountName": "Nura Aminu Muhammad",
            "accountNumber": "004532112",
            "bankCode": "000014",
            "bankName": "ACCESS BANK"
        },
        "description": "successful",
	    "status": "200 OK"
    }
    ```

## 13. Funds Transfer
- Fund transfers can be made in the following ways: 
    - Transferring money from one wallet to another
    - Make a bank account transfer from your wallet
    
    Zainpay infers your fund transfer type, so you don't have to specify it. The charges for each form of transfer are different. This charge can be obtained through your commercials.

    **Important Note:**
    - The amount in the JSON request should be converted to kobo decimalization. It is expected that neither float nor double values will be utilized in this case.

    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.FUNDS_TRANSFER,
        sandbox: true,
        data: {
          "destinationAccountNumber": "0044159752",
          "destinationBankCode": "000005",
          "amount": "1000",
          "sourceAccountNumber": "4430984950",
          "sourceBankCode": "0013",
          "zainboxCode": "THbfnDvK5o",
          "txnRef": "2Zei390tghmnj",
          "narration": "Your school fees",
          "callBackUrl": "https://myapp.exmaple.net/transfer/notification"
        }                
          
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
        "code": "21",
        "description": "Successful queued Transaction ",
        "status": "202 Accepted"
    }
    ```

    - A queued response means the transaction has successfully been validated and been processed. The final response should be accepted as an event push notification via the zainbox callback URL provided.


    ***Event Notification for a successful transfer***
    ```json
    {
    "data": {
        "accountNumber": "4430984950",
        "amount": {
        "amount": 1000 
        },
        "beneficiaryAccountNumber": "0044159752",
        "beneficiaryBankCode": "000005",
        "narration": "Your school fees",
        "paymentRef": "BSTuvDYbGIy8krkoycY1",
        "txnDate": "2021-12-28T18:19:42.222226518",
        "txnRef": "2Zei390tghmnj",
        "txnType": "transfer"
    },
    "event": "transfer.success"
    }
    ```


## 14. Transfer Verification
- This endpoint allows a merchant to verify a posted transfer by its `txnRef` after funds transfer is queued

   **Parameter:** txnRef(required).
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.TRANSFER_VERIFICATION,
        sandbox: true,
        params: "{txnRef}"
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
        "code": "00",
        "data": {
            "amount": "1000",
            "destinationAccountNumber": "0044159752",
            "destinationBankCode": "000005",
            "narration": "Your school fees",
            "sourceAccountNumber": "4430984950",
            "txnDate": "2021-12-29T08:00:49",
            "txnStatus": "success"
        },
       	"description": "successful",
	    "status": "200 OK"
    }
    ```


## 15. Deposit Verification
- This endpoint allows a merchant to verify a funds deposit notification received via our Deposit WebHook notification event
    
    **Parameter:** txnRef(required). The txnRef sent in the webhoook notificatoin payload.

   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.DEPOSIT_VERIFICATION,
        sandbox: true,
        params: "{txnRef}"
    });
    console.log(reponse);
    ```

    ***Response for valid reference***
    ```json
    {
        "code": "00",
        "data": {
            "amount": {
                "amount": 189000
            },
            "bankName": "WEMA BANK",
            "beneficiaryAccountName": "4426141954",
            "beneficiaryAccountNumber": "4426141954",
            "narration": "Transfer from Aminu Nasar Adam",
            "paymentDate": "2022-08-23T18:56:48.718614",
            "paymentRef": "DI59Ul5jhKyQIOUzDfVm",
            "sender": "4425640169",
            "senderName": "4425640169",
            "txnDate": "2022-08-23T18:56:48.718441",
            "txnRef": "vat_1661281008padGWEQEYY",
            "txnType": "deposit",
            "zainboxCode": "THbfnDvK5o"
        },
        "description": "successful",
        "status": "200 OK"
    }
    ```

    ***Response for invalid reference***
    ```json
    {
        "code": "04",
        "description": "Txn not found",
        "status": "400 Bad Request"
    }   
    ```

### 16. Zainbox Transactions History
- This endpoint allows a merchant to get a list of transactions from a particular zainbox

  **Parameter:** zainboxCode(Required)
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ZAINBOX_TRANSACTIONS,
        sandbox: true,
        params: "{zainboxCode}"
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
        "code": "00",
        "data": [
        {
            "accountNumber": "7964524199",
            "amount": 45000,
            "balance": 45000,
            "narration": "",
            "transactionDate": "2021-12-28T11:47:45",
            "transactionRef": "",
            "transactionType": "deposit"
        },
        {
            "accountNumber": "7964524199",
            "amount": 923000,
            "balance": 968000,
            "narration": "",
            "transactionDate": "2021-12-28T11:48:35",
            "transactionRef": "",
            "transactionType": "deposit"
        }],
        "description": "successful",
        "status": "200 OK"
    }
    ```

## 17. Total Payment Collected By Zainbox
- This endpoint allows a merchant to get the sum of total amount collected by all virtual accounts for a particular zainbox in a particular period, for both transfer and deposit transactions

    **Parameter:** zainboxCode (Required), dateFrom (optional, if not provided, the system returns the data of the current month), dateTo (optional)
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.TOTAL_PAYMENT_COLLECTED,
        sandbox: true,
        params: "{zainboxCode}?dateFrom=2022-02&dateTo=2022-03"
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
   {
	"code": "00",
	"data": [
		{
			"count": 4,
			"dateFrom": "2022-02",
			"dateTo": "2022-03",
			"total": "12690",
			"transactionType": "deposit"
		},
		{
			"count": 4,
			"dateFrom": "2022-02",
			"dateTo": "2022-03",
			"total": "29038",
			"transactionType": "transfer"
		}
	],
	"description": "Summary grouped by txn type",
	"status": "200 OK"
}
    ```

### 18. Zainbox Profile and Current Billing Plan
- This endpoint allows a merchant to get the complete profile of a Zainbox, including the Current Billing Plan for account to account and interBank transfers respectively
    
    **Parameter:** zainboxCode (Required)
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.ZAINBOX_PROFILE,
        sandbox: true,
        params: "{zainboxCode}"
    });
    console.log(reponse);

    ```
    ***Response***
    ```json
   {
	"code": "00",
	"data": {
		"cardPaymentBilling": {
			"capAmount": "100000.0",
			"fixedCharge": "10000.0",
			"percentageCharge": 1.5
		},
		"virtualAccountTransferBilling": {
			"capAmount": "1000.0",
			"fixedCharge": "5000.0",
			"percentageCharge": 1.0
		},
		"zainbox": {
			"callbackUrl": "http://example.net/payments/zainpay/notification",
			"codeName": "THbfnDvK5o",
			"emailNotification": "tester@gmail.com",
			"name": "Testing test",
			"tags": "test"
		}
	},
	"description": "successful",
	"status": "200 OK"
  }
    ```


### 19. Merchant Transactions
- This endpoint allows a merchant to get the list of first 50 transactions of a merchant
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.MERCHANT_TRANSACTIONS,
        sandbox: true,
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
    "code": "00",
    "data": 
    [
    {
        "accountNumber": "7964524199",
        "amount": 45000,
        "balance": 45000,
        "narration": "",
        "transactionDate": "2021-12-28T11:47:45",
        "transactionRef": "",
        "transactionType": "deposit"
    },
    {
        "accountNumber": "7964524199",
        "amount": 923000,
        "balance": 968000,
        "narration": "",
        "transactionDate": "2021-12-28T11:48:35",
        "transactionRef": "",
        "transactionType": "deposit"
        }
    ],
    "description": "successful",
    "status": "200 OK"
    }
    ```


## 20. Initialize Card Payment
- This endpoint allows a merchant to initialize a card payment.

     **Parameter:** `amount`, `txnRef` (must be unique per each request),  `mobileNumber`, `zainboxCode`, `emailAddress` and `callBackUrl`.
    
    Please Note that all parameters are required and `amount` parameter should be in naira decimilization.

    ```js
        const reponse = await Zainpay({
            publicKey: PUBLIC_KEY,
            serviceType: serviceTypes.INITIALIZE_PAYMENT,
            sandbox: true,
            data: {
                "amount": "100",
                "txnRef" : "Q6166237864",
                "mobileNumber": "08000000000",
                "zainboxCode": "THbfnDvK5o",
                "emailAddress": "info@test.com",
                "callBackUrl" : "https://example.net/webhook/zainpay"
            } 
        });
        console.log(reponse);
    ```
    ***Response***

    The **data** field of the response returned is a url which you can redirect your users to visit and make the payment.

    ```json
        {
            "code": "00",
            "data": "https://dev.zainpay.ng/merchant/redirect-payment?e=V5fvxGjb8wwLvOPZXYyaNMlVZSDrkAdv4ne19X7uiCdqu0kNOOAkMcjbGjApMcivvyLb4vj4azuusyWqC87vtME5n1psVTXai0pIdH61aTdrWJhQFCuYV3a7xJSWiNdDndxh2zNQNl74l2gUpQwhniASWarYUXLl2soyAUAkeAPJ1pUPlTmZddNiYqzgSMhoO1T4OMWk",
            "description": "card processing initialization",
            "status": "200 OK"
        }  
    ```


## 21. Get Card Payment Status
- This endpoint is used to retrieve initiated payment status
    
   ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.GET_CARD_PAYMENT_STATUS,
        sandbox: true,
        params: "{txnRef}"
    });
    console.log(reponse);
    ```

    ***Response***
    ```json
    {
        "code": "00",
        "data": {
            "amount": {
                "amount": 100
            },
            "bankName": "",
            "beneficiaryAccountName": "4427505285",
            "beneficiaryAccountNumber": "4427505285",
            "narration": "Approved by Financial Institution",
            "paymentDate": "2022-08-09T15:56:01.686777",
            "paymentRef": "Z9I8XkNRta1hq2dlmMzlhwQ9F60dLw",
            "sender": "Zainpay Card",
            "senderName": "Zainpay Card",
            "txnDate": "2022-08-09T15:56:01.685982",
            "txnRef": "Q6166237864",
            "txnType": "deposit",
            "zainboxCode": "THbfnDvK5o"
        },
        "description": "successful",
        "status": "200 OK"
    }
    ```

## 22. Test Cards
- The following cards can be used in the sandbox to make payments.

    **Visa Card**
    - 4000 0000 0000 2503
        - Expiry Date: 03/50
        - CVV: 111
        - Pin: 1111
        - OTP: 123456

    **Master Card**
    - 5060990 5800 0021 7499
        - Expiry Date: 03/50
        - CVV: 1111
        - Pin: 1111
        - OTP: 123456
        
    **Expired Card**
    - 5399 2370 3725 2182
        - Expiry Date: 07/23
        - CVV: 250
        - Pin: 4321
        - OTP: 123456

**Acceptable Cards**
    - Verve
    - MasterCard
    - Visa
    - Union Pay
    - JCB
    - Discover
    - American Experess

## 23. Reconcile Card Payment
- This endpoint allows a merchant to re-query the status of a hanging card payment and effect it as well. This is useful when a customer made a card payment and it is yet to be processed. 

    **Parameter:** txnRef
    ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.RECONCILE_CARD_PAYMENT,
        sandbox: true,
        params: "?txnRef={txnRef}"
    });
    console.log(reponse);
    ```
    ***Response***
    ```json
    {
        "code": "00",
        "data": {
            "paymentRef": "1234abcdef",
            "txnDate": "2023-10-05T12:36:32",
            "txnRef": "Txn89029387849",
            "txnStatus": "success"
        },
        "description": "Transaction successful",
        "status": "200 OK"
    }  
    ```

## 24. Reconcile Card Payment
- This endpoint allows a merchant to re-query the status of a hanging deposit payment and effect it as well. This is useful when a customer made a deposit into a virtual account and it is yet to reflect in the virtual account. 

    **Parameter:** sessionId, verificationType, accountNumber, bankType

    The `bankType` is the value of the `bankType` param that was used when creating the virtual account. For now, its value is `wemaBank` only.

    The `verificationType` can  be any one of `depositReferenceNumber` or `depositAccountNumber`

    The `sessionId` is required only when the `verificationType` is `depositReferenceNumber`

    The `accountNumber` is the virtual account number that rceeives the funds in question

    ```js
    const reponse = await Zainpay({
        publicKey: PUBLIC_KEY,
        serviceType: serviceTypes.RECONCILE_DEPOSIT_PAYMENT,
        sandbox: true,
        params: "?bankType={bankType}&verificationType={verificationType}&accountNumber={accountNumber}&sessionId={sessionId}"
    });
    console.log(reponse);
    ```
    ***Response***
    ```json
    {
        "code": "00",
        "description": "Deposit verification was successful",
        "status": "200 OK"
    }
    ```


## 25. Make Recurring Card Payment
- This endpoint allows a merchant to make a subsequent card payment using a card token. Click [here](https://zainpay.ng/developers/card-tokenization) to read more on card tokenisation.

    **Parameter:** `amount`, `txnRef` (must be unique per each request),  `mobileNumber`, `zainboxCode`, `emailAddress`,  `callBackUrl` and `cardToken`.

    Please Note that all parameters are required and `amount` parameter should be in naira decimilization.

    ```js
     const reponse = await Zainpay({
            publicKey: PUBLIC_KEY,
            serviceType: serviceTypes.MAKE_RECURRING_CARD_PAYMENT,
            sandbox: true,
            data: { 
                "amount": "100",
                "txnRef" : "Q6166237864",
                "mobileNumber": "08000000000",
                "zainboxCode": "THbfnDvK5o",
                "emailAddress": "info@test.com",
                "callBackUrl" : "https://example.net/webhook/zainpay",
                "cardToken" : "RtyfdeRESSRDTGY78654rtyuhHGFDghjgtrdety9087yuh"
            } 
        });
    console.log(reponse);
    ```
    ***Response***
    ```json
    {
        "code": "00",
        "data": {
            "amount": "100",
            "callBackUrl": "https://example.net/webhook/zainpay",
            "emailAddress": "info@test.com",
            "txnRef": "Q6166237864"
        },
        "description": "card payment successful",
        "status": "200 OK"
    }
    ``` 

## 26. Update virtual account BVN
- This endpoint allows a merchant to update the BVN record of a virtual account

    **Parameter:** `amount`, `txnRef` (must be unique per each request),  `mobileNumber`, `zainboxCode`, `emailAddress`,  `callBackUrl` and `cardToken`.

    Please Note that all parameters are required and `amount` parameter should be in naira decimilization.

    ```js
     const reponse = await Zainpay({
            publicKey: PUBLIC_KEY,
            serviceType: serviceTypes.UPDATE_VIRTUAL_ACCOUNT_BVN,
            sandbox: true,
            data: { 
                    "accountNumber": "4436758909", 
                    "zainboxCode": "THbfnDvK5o",
                    "bvn": "12345654321"
                } 
        });
    console.log(reponse);
    ```
    ***Response***
    ```json
        {
            "code": "00",
            "description": "successful",
            "status": "200 OK"
        }
    
    ``` 