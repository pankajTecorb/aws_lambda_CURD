import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import areaController from '../controllers/user';
import { string } from 'joi';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    register: '/add',
    update: '/:id/edit',
    list: '/list',
    catDetail: '/detail/:id',
    delete: '/delete/:id',
    status: '/status/:id'
   
} as const;

/****  Add****/
router.post(p.register,   async (req: Request, res: Response) => {
    const data = await areaController.registerUser(req.body);
    return res.status(CREATED).send({ data, code: CREATED })
});
//**** Edit****/
router.put(p.update,   async (req: Request, res: Response) => {
    const data = await areaController.editUser(req.body, req.params.id);
    return res.status(OK).send({ data, code: OK })
});

//****List****/
router.get(p.list,  async (req: Request, res: Response) => {
    const data = await areaController.getUser(req.query);
    return res.status(OK).send({ data, code: OK })
});

//***** Detail**** */
router.get(p.catDetail,  async (req: Request, res: Response) => {
    const data = await areaController.userProfile(req.params.id);
    return res.status(OK).send({ data, code: OK })
})

//******** delete********* */

router.delete(p.delete,  async (req: Request, res: Response) => {
    const data = await areaController.deleteUser(req.params.id);
    return res.status(OK).send({ data, code: OK })
});

//********  Status change**** */
router.put(p.status,  async (req: Request, res: Response) => {
    const data = await areaController.statusUser(req.body, req.params.id);
    return res.status(OK).send({ data, code: OK })
});


// Export default
export default router;
