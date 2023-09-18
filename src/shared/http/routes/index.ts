import productRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';
import { json } from 'stream/consumers';

const routes = Router();

routes.use('/products', productRouter);

export default routes;

// routes.get('/',(request,response)=>{
//     return response.json({message:'Hello Dev!'});
// })
