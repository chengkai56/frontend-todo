// import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from "../../Constants";

class HelloWorldService {

    executeHelloWorldService() {
        return axios.get(`${API_URL}/hello-world`)//'http://localhost:8080/hello-world')
        // console.log('executed service')
    }

    executeHelloWorldBeanService() {
        return axios.get(`${API_URL}/hello-world-bean`) //'http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name) {
        // let username = 'kaicheng'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`${API_URL}/hello-world/path-variable/${name}`
            // // ,
            // //     {
            // //         headers: {
            // //             authorization: basicAuthHeader
            // //         }
            //     }
        )
    }
}

export default new HelloWorldService()
