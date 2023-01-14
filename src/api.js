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
    let { publicKey, serviceType, sandbox, data } = param;
    
      /**
   * makes an encrypted call to Spendo API
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

    const baseUrl = getUrl(sandbox);
    const axiosStruct = await axios.create({
        baseURL: baseUrl,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + publicKey,
        },
    });

    const { url, method } = serviceTypes[serviceType.name];

    if (data.param) {
        url = url + data.param;
    }

    const response = axiosStruct[method](url, data)
        .then(function (response) {
            if (response.status === 200) {
                console.log('response', response.data);
                return response.data
            }
        })
        .catch(function (error) {
            console.log('error', error);
            return error.response.data
    });
          
    return await response;
}

module.exports = {
    Zainpay,
    serviceTypes
}
    
