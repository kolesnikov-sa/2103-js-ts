import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

export function sum2(a: number, b: number) {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, city: string) {
    return (s.address.city.title == city);
}

export function addMoneyToBudget(building: GovernmentBuildingType, budget: number) {
    building.budget += budget;
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export function increaseStaff(building: GovernmentBuildingType, staffIncrease: number) {
    building.staffCount += staffIncrease;
}

export function decreaseStaff(building: GovernmentBuildingType, staffDecrease: number) {
    building.staffCount -= staffDecrease;
}

export function createMessage(props: CityType) {
    return `Hello, ${props.title} citizens! I want all ${props.citizensNumber} people to be happy!`;
}
