import axios from "axios"
const URL = "https://63574b2e2712d01e14052710.mockapi.io/dataLuong"

export const DB_VACATION = "dbVacation" 
export const DB_HOTEL = "dbHotel" 
export const DB_COMUNITY = "dbComunity" 
export const DB_BEACH_POP = "dbBeachPopular" 
export const DB_RE_VIEW = "dbRecentlyViewed" 
export const DB_PACKAGES = "dballPackages" 
export const DB_SPECIAL = "dbspecial" 
export const DB_OFFERS= "dbOffers" 
export const DB_SCHEDILES = "schedule" 
export const DB_USERS = "dbusers" 

//web
export const fetchApiWeb = (propertyName) => axios.get(URL+"/dbTravel/"+propertyName)
//shedule
export const fetchApiSchedule = () => axios.get(URL+"/schedule")
export const deleteSchedule = (id) => axios.delete(URL+"/schedule/" + id)
export const createSchedule = (payload) => axios.post(URL+"/schedule", payload)
//account
export const fetchApiAcc = () => axios.get(URL+"/users")
export const createAcc = (payload) => axios.post(URL+"/users", payload)




