
import {sum, sumES6, printES6} from './arrayFunctions.js';

console.log('ArrayFunctionsAdvanced');
// console.log('Sum:' + sum(10,4));
// console.log('sumES6: ' + sumES6(11,5));
console.log(printES6(1,2,3,4,5));


/**
 * Handle the following array APIs here
 * array.sort
 * array.filter
 * array.map
 */

 let companies = [
   {name: 'IBM', established: 1978, size: 'big'},
   {name: 'Chevron', established: 1962, size: 'big'},
   {name: 'Google', established: 2001, size: 'big'},
   {name: 'Amazon', established: 2008, size: 'big'},
   {name: 'Facebook', established: 2002, size: 'medium'},
   {name: 'Apple', established: 1998, size: 'medium'},
   {name: 'slack', established: 2011, size: 'size'},
 ];

 let upcoming = [
   {name: 'Prism', established: 2018, size: 'small'},
   {name: 'Tesla', established: 2019, size: 'medium'},
 ]

 let numbers = [1,2,3,4,5,6,7];


 let typeCompanies = function(companies, year) {
   let result = companies.map(function(company) {
     company.established >= 2000;
     return company;
   });
   return result;
 };

 let typeCompaniesES6 = function(companies, year){
   return companies.map( (company) => company.established >= 2000 ? company : null);
 };

 let filterNewCompanies = function(companies) {
  let result = companies.filter(function(company) {
     if(company.established > 2000){
       return company;
      }
   });
   return result;
 };

 let filterNewCompaniesES6 = function(companies,year) {
   return companies
          .filter( company => company.established >= year ? company : null)
          .map( company => company.name);
 };

 let getNames = function(companies){
   return companies.map( company => company.name);
 };

 let sortCompaniesByYear = function(companies) {
   return companies.sort(
        (first, second) => first.established > second.established ? 1 : -1);
 };

 let findCompany = function(companies,year) {
   return companies.find(function(company) {
     if(company.established == year)
      return true;
   });
 };

 //console.log('Companies after year 2000: ' + typeCompanies(companies));
 //console.log('Companies after year 2000ES6: ' + typeCompaniesES6(companies));
 console.log('Filter Companies after year 2000: '
    + getNames(filterNewCompanies(companies)));
 console.log('Filter Companies after year 2000ES6: '
    + filterNewCompaniesES6(companies,2000));
 console.log('Merge new and upcoming companies:'
    + getNames(filterNewCompanies(companies).concat(upcoming)));
 console.log('Find company established in 2002:'
    + findCompany(companies,2002).name);

 console.log('Sort companies by year: '
    + getNames(sortCompaniesByYear(companies)));

 //Print Merger again but this time result on filtered companies is sorted
 // because sort modifies array in place
 console.log('Merge new and upcoming companies:'
    + getNames(filterNewCompanies(companies).concat(upcoming)));
