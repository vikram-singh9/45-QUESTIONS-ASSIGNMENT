function describe_city(city: string, world: string = "world") {
    console.log(`${city} is in ${world}.`);
}

describe_city("berlin","germany");
describe_city("newyork","america");
describe_city("new dehli", "india");