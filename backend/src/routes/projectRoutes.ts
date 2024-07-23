import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import ProjectController from '../controllers/ProjectController';
import loginRequired from '../middleware/loginRequired';

const upload = multer(multerConfig).single('file');
const router = Router();

router.post('/', loginRequired, upload, ProjectController.store);
router.get('/', loginRequired, ProjectController.index);
router.put('/:id', loginRequired, upload, ProjectController.update);
router.delete('/:id', loginRequired, ProjectController.delete);

export default router;
