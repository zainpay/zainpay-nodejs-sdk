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
    VIRTUAL_ACCOUNT_BALANCE: {
        name: "VIRTUAL_ACCOUNT_BALANCE",
        url: '/virtual-account/wallet/balance',
        method: 'get',
    },
    ZAINBOX_PROFILE: {
        name: "ZAINBOX_PROFILE",
        url: '/zainbox/profile',
        method: 'get',
    }

}