import crypto from "node:crypto";
const encryptionKeySecret = 'MySecretKey1234567890';
const encryptionKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
console.log("encryptionKey :>> ", encryptionKey);
console.log("iv :>> ", iv);
const cipher = crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);
let encryptedMessage = cipher.update("Hello bro", "utf8", "hex");
encryptedMessage += cipher.final("hex");
console.log("encryptedMessage :>> ", encryptedMessage);
const decipher = crypto.createDecipheriv("aes-256-cbc", encryptionKey, iv);
let decryptedMessage = decipher.update(encryptedMessage, "hex", "utf8");
decryptedMessage += decipher.final("utf8");
console.log("decryptedMessage :>> ", decryptedMessage);
//# sourceMappingURL=app.js.map