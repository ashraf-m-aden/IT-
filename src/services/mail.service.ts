// server/api/send-email.post.ts
import axios from 'axios'


class MailService {
    constructor() {
        axios.create({
          headers: { "Content-Type": "application/json" },
        });
        axios.defaults.baseURL =  "https://itmail25-7ae8f8c37449.herokuapp.com/"; // "https://ashraf.intern.aws.prd.demodesu.com/api"; // import.meta.env.VITE_BACKEND_URL;
      }
    
     template = '../components/emails/email_fr.vue';
      async sendEmail(email: string, mailTemplate:string) {
        
        const { data } = await  axios.post("/send-email", {
          email:email, content:mailTemplate
        });
    
        return data;
      }

}
export default new MailService();
