import fs from 'node:fs/promises';
import path from 'node:path';
import { UPLOAD_DIR } from '../constants/index.js';
import { env } from './env.js';
import { SMTP } from '../constants/index.js';

export const saveImageLocally = async (file) => {
  const { path: oldPath, filename } = file;
  const newPath = path.join(UPLOAD_DIR, 'images', filename);

  await fs.rename(oldPath, newPath);

  return `${env(SMTP.APP_DOMAIN)}/files/${filename}`;
};
