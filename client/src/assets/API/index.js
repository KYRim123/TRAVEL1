// import axios from "axios"
import { getDatabase,ref, child, get, set } from "firebase/database";
import { Database } from "./firebase"
import {v4 as uuid} from "uuid"

const dbRef = ref(Database);
const db = getDatabase();


export const DB_VACATION = "dbVacation" 
export const DB_HOTEL = "dbHotel" 
export const DB_COMUNITY = "dbComunity" 
export const DB_OFFERS= "dbOffers" 
export const DB_SCHEDULES = "dbschedules" 
export const DB_USERS = "dbusers" 

export const DB_CA_BEACHES = "/dbCategories/Beaches"
export const DB_CA_CAMPING = "/dbCategories/Camping"

// const URL = "https://63574b2e2712d01e14052710.mockapi.io/dataLuong"
//web - axios
// export const fetchApiWeb = (propertyName) => axios.get(URL+"/dbTravel/"+propertyName)
//shedule - axios
// export const deleteSchedule = (id) => axios.delete(URL+"/schedule/" + id)
// export const createSchedule = (payload) => axios.post(URL+"/schedule", payload)
//account - axios
// export const fetchApiAcc = () => axios.get(URL+"/users")
// export const createAcc = (payload) => axios.post(URL+"/users", payload)



//get data from firebase
export const fetchApi = (propertyName) => get(child(dbRef, propertyName))
export const newAccount = (id, payload) => set(ref(db,'user/' + id ), payload)
export const deleteSchedule = (id) => set(ref(db,"dbschedules/" + id), null)
export const createSchedule = (payload) => set(ref(db,"dbschedules/" + uuid()), payload)


