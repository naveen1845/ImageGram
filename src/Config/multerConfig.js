import multer from "multer";
import { cloudinary } from "./cloudinaryConfig.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      format: async (req, file) => {
        return file.mimetype.split("/")[1];
      } ,
      public_id: (req, file) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        return file.fieldname + "-" + uniqueSuffix;
      },
    },
});

export const CloudinaryUploader = multer({storage: storage});
