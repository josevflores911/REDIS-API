import { Router } from "express";
import { json } from "stream/consumers";

const routes = Router();

routes.get('/',(request,response)=>{
    return response.json({message:'Hello Dev!'});
})

export default routes;