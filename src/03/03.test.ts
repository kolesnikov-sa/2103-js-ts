import {StudentType} from "../02/02";
import { addSkill, doesStudentLiveIn, makeStudentActive } from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Sergey",
        age: 30,
        isActive: false,
        address: {
            streetTitle: "Иванова 2",
            city: {
                title: "Москва",
                country: "Россия"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JS"
            },
        ]
    }
});

test('new tech skill must be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'CSS');
    expect(student.technologies[3].title).toBe("CSS");
    expect(student.technologies[3].id).toBeDefined();
});

test('student must be made active', () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
});

test('does student live in city?', () => {
    let result1 = doesStudentLiveIn(student, 'Москва');
    let result2 = doesStudentLiveIn(student, 'Минск');

    expect(result1).toBe(true);
    expect(result2).toBe(false);
});
