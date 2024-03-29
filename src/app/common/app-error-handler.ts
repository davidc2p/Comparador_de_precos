import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexcepted error has occurred!');
        console.log(error);
    }
}