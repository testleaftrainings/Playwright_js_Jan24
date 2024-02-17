interface Browser{

        browserName:string;
        startApp():void;
        loginCredentials(username:string, password:string):string;
        getStatus():boolean;

}
interface Element{

        locator():string;
}

interface Button{

        click():void;
}

interface Textbox{
        fill():void;
        clear():void
}

export{Browser, Textbox}
