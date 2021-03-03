import { CityType } from "../02/02_02";
import {addMoneyToBudget, createMessage, decreaseStaff, increaseStaff, repairHouse} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                built: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                built: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                built: 2020,
                repaired: false,
                address: {
                    number: 80,
                    street: {
                        title: "White street"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "Hospital",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 10,
                    street: {
                        title: "Central Street"
                    }
                }
            },
            {
                type: "Fire Station",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 5,
                    street: {
                        title: "South Street"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
});

test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test('Budget should be changed for Fire Station', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test('Houses should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()
})

test('Staff should be increased', () => {
    increaseStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(220);
})

test('Staff should be decreased', () => {
    decreaseStaff(city.governmentBuildings[1], 100);
    expect(city.governmentBuildings[1].staffCount).toBe(900);
})

test("Greeting message should be correct for city", () => {
    expect(createMessage(city)).toBe("Hello, New York citizens! I want all 1000000 people to be happy!");
})
