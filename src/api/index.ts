import instance from "./AxiosInstance";
import { BACKEND_URL } from "@/utils/privateKey";

interface Message {
  name:string,
  email: string,
  phone:string,
  companyName?: string            
}
console.log(BACKEND_URL);


export default function sendMessage (message: Message) {
  return instance.get(`${BACKEND_URL}/send-message`)
}