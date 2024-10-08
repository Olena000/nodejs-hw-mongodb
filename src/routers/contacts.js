import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const contactsRouter = Router();

contactsRouter.get(
  '/contacts',
  authenticate,
  ctrlWrapper(getContactsController),
);

contactsRouter.get(
  '/contacts/:contactId',
  authenticate,
  isValidId,
  ctrlWrapper(getContactByIdController),
);

contactsRouter.post(
  '/register',
  authenticate,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

contactsRouter.delete(
  '/contacts/:contactId',
  authenticate,
  isValidId,
  ctrlWrapper(deleteContactController),
);

contactsRouter.patch(
  '/contacts/:contactId',
  authenticate,
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default contactsRouter;
