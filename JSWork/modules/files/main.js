import {test1, test2} from './module1';
import primary, {regular} from './module2';

console.log('Main loaded');
test1();
test2();
primary();
regular();
