const serviceTypes = require("./constants/services");

/**
 * @description initialize the Zainpay wrapper function
 * @param {object} param =>  publicKey, data, serviceType, sandbox
 * @return {function} request function
 */
async function Zainpay(param) {
    const axios = require('axios');
    const {
        getUrl,
        handleErrors,
        handleAxiosError,
    } = require('./utils');
    let { publicKey, serviceType, sandbox, data, params } = param;
    
      /**
   * makes an encrypted call to Zainpay API
   * @param {object} params => publicKey, data, serviceType sandbox
   * @param {function} callback gets called with the result(data) object
   * @return {object} data return decrypted data response object
   */
    if (!publicKey) {
        return console.log('publicKey is required');
    }

    if (!serviceType) {
        return console.log('serviceType is required');
    }

    if (!sandbox) {
        sandbox = false
    }

    try {
        const baseUrl = getUrl(sandbox);
        const axiosStruct = await axios.create({
            baseURL: baseUrl,
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + publicKey,
            },
        });

        let { url, method } = serviceTypes[serviceType.name];

        if (params) {
            url = url + "/" + params;
        }

        const response = axiosStruct[method](url, data)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(function (error) {
                return error.response.data
        });

        return await response;
        
    } catch (error) {
        return {
            error: "Request Failed"
        }
    }
}

module.exports = {
    Zainpay,
    serviceTypes
}
    
