"use strict";
function describe_city(city, world = "world") {
    console.log(`${city} is in ${world}.`);
}
describe_city("berlin", "germany");
describe_city("newyork", "america");
describe_city("new dehli", "india");
