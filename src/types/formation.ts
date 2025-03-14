import type { UserType } from "./user";

export class FormationType {
    courseId: string = "";

    courseName: string = "";


    endDate: string = "";


    finished: boolean = false;


    id: string = "";


    img: string = "";


    inscription: boolean = false;


    link: string = "";


    numberOfMonth: number = 0;


    price: number = 0;


    professeurId: string = "";


    professeurName: string = "";


    startDate: Date = new Date();


    started: boolean = false;



    students:UserType[] = []
}