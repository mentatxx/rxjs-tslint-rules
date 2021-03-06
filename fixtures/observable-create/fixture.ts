import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

// Note that Observable.create is declared as a Function:
// https://github.com/ReactiveX/rxjs/blob/5.3.1/src/Observable.ts#L46-L58
//
// So its result will be any - which will mess with the rules unless the
// variable is explicitly typed:

const ob1 = Observable.create((observer: Observer<number>) => {

    observer.next(1);
    observer.complete();
});
const ob2 = ob1.filter((value) => value > 1);


const ob3 = ob1 as Observable<number>;
const ob4 = ob3.map((value) => value + 1);
