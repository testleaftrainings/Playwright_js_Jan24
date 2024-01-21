let response: any = "Success";
//let responseString: string = <string>response;
let responseLength: number = (<string>response).length;
console.log(responseLength);

let statusCode: any = 201;
let statusNum: number = statusCode as number;
console.log(statusNum);
