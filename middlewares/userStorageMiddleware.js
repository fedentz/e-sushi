/* const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/avatars')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      var ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext )
    }
  })
  
  const uploadFile = multer({ storage: storage }) */