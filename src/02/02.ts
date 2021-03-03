type CityType = {
    title: string;
    country: string;
}
type AddressType = {
    streetTitle: string;
    city: CityType;
}
type TechType = {
    id: number;
    title: string;
}
type StudentType = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    address: AddressType;
    technologies: Array<TechType>
}

const student: StudentType = {
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

console.log(student.technologies[2].title);

export {}
