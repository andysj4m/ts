import {Two} from './two';
import * as _ from 'lodash';
new Two();

//import * as Rx from 'rxjs';
//import 'rxjs/add/observable/timer';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

Observable.timer(1000)
    .subscribe(x => console.log(x));

class App {
    constructor() {
        console.log(`Working 2 ...`);
    }
}

new App();

console.log(_.isArray([1,2]));