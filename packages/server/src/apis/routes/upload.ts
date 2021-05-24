import { Router } from 'express';
import multer from 'multer';

import { uploadSingleFile } from '../../helpers/uploadFile';
import catcherWrapper from '../../helpers/catcherWrapper';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.post('/', upload.single('file'), catcherWrapper(uploadSingleFile));

export default router;
