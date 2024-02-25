// axios -> js library for calling any RESTFul API
import axios from "axios";

// We need 4 information - URL, UserName, API Key, Project Key
const url = "https://2023-bootcamp.atlassian.net/rest/api/2/issue/"
const username = "hari@testleaf.com"
const apiKey = "ATATT3xFfGF0UkNiakdgpocmayXyMpD6q8QGffEjwZZIqZ0yn_pOQqv4qpUGIeraAFCryXNBoMGPPTMRTEaiDUQfkRw3DD9iXsfRxJopaEknh-ruGRD8e8NkVQpEVh1XvD7uxVA6bCXTs-ycz3gFVgrQo4Ek71hqNP8t2bGiOl0MYh2kHOYxJQE=23CA608B"
const projectId = "S10"

async function createJiraIssue(summary: string, description: string) {
    // Payload
    const issueRequestJson = {
        "fields": {
           "project":
           {
              "key": projectId
           },
           "summary": summary,
           "description": description,
           "issuetype": {
              "name": "Bug"
           }
       }
    };

    // Send a Post Request
    axios.post(url, issueRequestJson,{
        auth: {
            username: username,
            password: apiKey
        },
        headers:{
            'Content-Type': 'application/json'
        }
    })

    console.log("The API request is successful")
}

export {createJiraIssue}