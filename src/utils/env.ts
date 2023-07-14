import dotenv from "dotenv";
import fs from "fs";
import path from "path";

let fileName = ".env.development";

if(process.env.NODE_ENV === "test") {
    fileName = ".env.test";
} else if(process.env.NODE_ENV === "production") {
    fileName = ".env.production";
}

let fullPath = path.join(__dirname, "../../", fileName);

if (!fs.existsSync(fullPath)) {
    fileName = ".env";
    fullPath = path.join(__dirname, "../../", fileName);
}
  
dotenv.config({
    path: fullPath
});