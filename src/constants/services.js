module.exports = {
    CREATE_ZAINBOX: {
        name: "CREATE_ZAINBOX",
        url: '/zainbox/virtual-account/create/request',
        method: 'options',
    },
    ZAINBOXES: {
        name: "ZAINBOXES",
        url: '/zainbox/list',
        method: 'options',
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
    ZAINBOX_PROFILE: {
        name: "ZAINBOX_PROFILE",
        url: '/zainbox/profile',
        method: 'options',
    }

}