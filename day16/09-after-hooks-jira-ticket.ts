import { createJiraIssue } from "./07-jira-integration";
import { TestInfo } from "playwright/test";

export async function logADefectInJira(testInfo: TestInfo) {
    if(testInfo.status === "failed"){
        const summary = `Test Failed : ${testInfo.title}`
        const description = `Here is the error : ${testInfo.error?.message}`
        createJiraIssue(summary,description);
    }
}