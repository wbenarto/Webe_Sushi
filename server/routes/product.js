const express = require('express');
const router = express.Router();
const { Product } = require("../models/Product");
const multer = require('multer')
const { auth } = require("../middleware/auth");

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png' || ext !== '.JPEG' || ext !== '.jpeg') {
            return cb(res.status(400).end('only jpg, png are allowed'), false)
        }
        cb(null,true)
    }
})

var upload = multer({ storage: storage}).single('file')

//=================================
//             Product
//=================================

router.post("/uploadImage", auth, (req, res) => {
    // fetch image from client
    // save inside Node server
    // Multer library install
    // console.dir(req, res)
    upload( req,res, (err) => {
        console.log(req, res, err)
        
        if(err) {
            console.log(err)
            return res.json({ success: false, err })} 
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })
    // console.log(image)
    console.log(`upload function fired in post request in router/product`)
});

router.post('/uploadProduct', auth, (req, res) => {
    const product = new Product(req.body)

    product.save((err)=> {
        if (err) return res.status(400).json({success: false, err})
        return res.status(200).json({ success:true })
    })
});
 
router.get('/getProducts', auth, (req, res) => {
  Product.find()
  .exec((err,product)=> {
      if(err) return res.status(400).json({success: false , err})
      return res.status(200).json({success: true, products})
  })
});

module.exports = router;
