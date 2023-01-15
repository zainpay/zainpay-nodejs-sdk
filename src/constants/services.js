module.exports = {
    CREATE_ZAINBOX: {
        name: "CREATE_ZAINBOX",
        url: '/zainbox/create/request',
        method: 'post',
    },
    ZAINBOXES: {
        name: "ZAINBOXES",
        url: '/zainbox/list',
        method: 'get',
    },
    ZAINBOX_TRANSACTIONS: {
        name: "ZAINBOX_TRANSACTIONS",
        url: '/zainbox/transactions',
        method: 'get',
    },
    MERCHANT_TRANSACTIONS: {
        name: "MERCHANT_TRANSACTIONS",
        url: '/zainbox/transactions',
        method: 'get',
    },
    CREATE_VIRTUAL_ACCOUNT: {
        name: "CREATE_VIRTUAL_ACCOUNT",
        url: '/virtual-account/create/request',
        method: 'post',
    },
    VIRTUAL_ACCOUNTS: {
        name: "VIRTUAL_ACCOUNTS",
        url: 'zainbox/virtual-accounts',
        method: 'get',
    },
    UPDATE_VIRTUAL_ACCOUNT_STATUS: {
        name: "UPDATE_VIRTUAL_ACCOUNT_STATUS",
        url: '/virtual-account/change/account/status',
        method: 'patch',
    },
    VIRTUAL_ACCOUNT_BALANCE: {
        name: "VIRTUAL_ACCOUNT_BALANCE",
        url: '/virtual-account/wallet/balance',
        method: 'get',
    },
    ALL_VIRTUAL_ACCOUNT_BALANCE: {
        name: "ALL_VIRTUAL_ACCOUNT_BALANCE",
        url: '/zainbox/accounts/balance',
        method: 'get',
    },
    ZAINBOX_PROFILE: {
        name: "ZAINBOX_PROFILE",
        url: '/zainbox/profile',
        method: 'get',
    },
    BANK_LIST: {
        name: "BANK_LIST",
        url: '/bank/list',
        method: 'get',
    },
    NAME_ENQUIRY: {
        name: "NAME_ENQUIRY",
        url: '/bank/name-enquiry',
        method: 'get',
    }



}