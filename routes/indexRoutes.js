import express from "express";
const router = express.Router();

import indexControllers from "../controllers/indexControllers.js";

router.get('/', indexControllers.getHome);
router.get('/about', indexControllers.getAbout);
router.get('/contact', indexControllers.getContact);

router.post('/shorten-url', indexControllers.shortenUrl);
router.get('/shortened-url', indexControllers.getShortenedUrl);
router.get('/:shortId', indexControllers.redirectToOriginalUrl);

router.post('/contact/send-email', indexControllers.emailLimiter, indexControllers.processSendEmail);

export default router;