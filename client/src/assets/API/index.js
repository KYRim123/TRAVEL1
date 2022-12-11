// import axios from "axios"
import { getDatabase,ref, child, get, set } from "firebase/database";
import { Database } from "./firebase"

const dbRef = ref(Database);
const db = getDatabase();


export const DB_VACATION = "dbVacation" 
export const DB_HOTEL = "dbHotel" 
export const DB_COMUNITY = "dbComunity" 
export const DB_BEACH_POP = "dbBeachPopular" 
export const DB_RE_VIEW = "dbRecentlyViewed" 
export const DB_PACKAGES = "dballPackages" 
export const DB_SPECIAL = "dbspecial" 
export const DB_OFFERS= "dbOffers" 
export const DB_SCHEDULES = "dbschedules" 
export const DB_USERS = "dbusers" 

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
export const createSchedule = (id, payload) => set(ref(db,"dbschedules/" + id), payload)




