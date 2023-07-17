import Teacher from "../Image/teachers.png";
import student from "../Image/students.png"
import parents from "../Image/parents.png";
import { AiTwotoneTool } from "react-icons/ai";
import { ImUserPlus } from "react-icons/im";
import { BiSolidUserBadge } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi"


export const Maincard = [
    {
        id: 1,
        Image: Teacher,
        name: "O'qituvchi",
        button: "Ro'yhatdan o'tish",
        kirish: "Tizimga kirish",
        register: "/registratsiya",
        kirishlog: "/kirish"
    },
    {
        id: 2,
        Image: student,
        name: "O'quvchi",
        button: "Ro'yhatdan o'tish",
        kirish: "Tizimga kirish",
        register: "/registratsiya",
        kirishlog: "/kirish"
    },
    {
        id: 3,
        Image: parents,
        name: "Ota-ona",
        button: "Ro'yhatdan o'tish",
        kirish: "Tizimga kirish",
        register: "/registratsiya",
        kirishlog: "/kirish"
    },
]

export const UserTeacher = [
    {
        id: 1,
        title: "Ish stoli",
        router: "/ish"
    },
    {
        id: 2,
        title: "Mening maktabim",
        router: "/ish"
    },
    {
        id: 3,
        title: "Mening sinflarim",
        router: "/ish"
    },
    {
        id: 4,
        title: "Jurnallar",
        router: "/ish"
    },
    {
        id: 5,
        title: "Dars jadvali",
        router: "/ish"
    },
]


export const Roboto = [
    {
        id: 1,
        Icon: <AiTwotoneTool />,
        title: "Boshqaruv",
        route: "/boshqaruv"
    },
    {
        id: 2,
        Icon: <BiSolidUserBadge />,
        title: "Odamlar ro'yxati",
        route: "/people"
    },
    {
        id: 3,
        Icon: <ImUserPlus />,
        title: "Yangi shaxs"
    },
    {
        id: 4,
        Icon: <HiAcademicCap />,
        title: "Sinflar"
    },
]

export const edit = [
    {
        id: 1,
        title: "Odamlar",
        link: "Odamalr ro'yxati",
        linkone: "Yangi odam",
        link2: "Ko‘chirib o‘tkazish",
        link3: "Taklifnomalar",
        link4: "Buyruqlar"
    },
    {
        id: 2,
        title: "Sinflar",
        class: "Sinflar ro‘yxati",
        class2: "Yangi sinf"
    },
]

export const editbottom = [
    {
        id: 1,
        title: "Dars jadvali",
        link1: "Qo‘ng‘iroqlar",
        link2: "Hisobot davrlari",
        link3: "Darslar",
        link4: "Jurnalni yuritish bo‘yicha izohlar"
    },
    {
        id: 2,
        title: "Ma’lumotnomalar",
        link1: "Fanlar",
        link2: "Binolar",
        link3: "Xonalar va joylar",
        link4: "Ish dasturlari"
    },
    {
        id: 3,
        title: "Sozlamalar",
        link1: "Tashkilot haqida",
        link2: "Qo‘shimcha ma'lumotlar",
        link3: "Aloqa uchun ma'lumotlar",
        link4: "Funktsiyalar",
        link5: "Logotip",
        link6: "Baholash turi",
        link7: "Lokalizatsiya",
        link8: "Namunaviy ishlar vazni",
    },
]