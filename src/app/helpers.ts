import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export function replicate<T>(input$: Observable<T>,
                             output: Subject<T>): Subscription {
    const nextMethod = ((output as EventEmitter<any>).emit || output.next).bind(output);

    return input$
        .subscribe(nextMethod);
}