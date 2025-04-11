import type { UserType } from "./user";

export class FormationType {
    courseId: string = "";
    courseName: string = "";
    endDate: string = "";
    finished: boolean = false;
    enabled: boolean = true;
    id: string = "";
    description: string = "";
    img: string = "";
    inscription: boolean = true;
    link: string = "";
    numberOfMonth: number = 0;
    price: number = 0;
    professeurId: string = "";
    professeurName: string = "";
    startDate: Date = new Date();
    started: boolean = false;
    students:UserType[] = []
    interestedStudents:UserType[] = []
    maxStudents:number=15;
}