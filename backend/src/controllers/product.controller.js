const multer = require('multer');
const cloudinary = require('../utils/cloudinary.js');
const fs = require('fs');
const ProductModel = require('../models/Product.model.js');
const createProductController = async (req, res) => {
  const {
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;

  try {
    console.log(req.files, req.body);
    const arrayImage = req.files.map(async (singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: 'uploads',
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        });
    });

    const dataImages = await Promise.all(arrayImage);
    const StoreProductDetails = await ProductModel.create({
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
      images: dataImages,
      userEmail:req.userEmailAddress
    });
    return res.status(201).send({
      message: 'Image Successfully Uploaded',
      sucess: true,
      dataImages,
      StoreProductDetails,
    });
  } catch (er) {
    if (er instanceof multer.MulterError) {
      return res.status(400).send({
        message: 'Multer error plese send image less than 5 ',
        success: false,
      });
    }
    console.log(er);
    return res.status(500).send({ message: er.message, success: false });
  }
};

const getProductDataController = async (req, res) => {
  try {
    const data = await ProductModel.find();
    return res
      .status(200)
      .send({ data, message: 'Data Fetched Successfully', success: true });
  } catch (er) {
    return res.status(500).send({ message: er.message, success: false });
  }
};

const updateProductController=async(req,res)=>{
  const {
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category
  }=req.body
  const id=req.params.id
  console.log(req.params)
  console.log(id);  
  try{
    const checkIfProductExists=await ProductModel.findOne({_id:id})
    if (!checkIfProductExists){
      return res.status(404).send({message:"Product not found"})
    }
    const arrayImage = req.files.map(async (singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: 'uploads',
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        });
    });

    const Imagedata=await Promise.all(arrayImage)
    const findAndUpdate=await ProductModel.findByIdAndUpdate({_id:id},
      {
        title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
    images:Imagedata
      },
    {new:true})

    return res.status(201).send({message:"Document updated successfully",success:true,updatedResult:findAndUpdate})
  }catch(er){
    return res.status(500).send({message:er.message,success:false})
  }
}
const getSingleProductDocumentController=async(req,res)=>{
  const {id}=req.params
  try{
    const data=await ProductModel.findOne({_id:id})
    if(!data){
      return res.status(404).send({message:"Product not found"})

    }
    return res.status(200).send({message:"fetched the product successfully",data,success:true})
  }
  catch(err){
    return res.status(500).send({message:err.message,success:false})
  }
}

const deleteSingleProduct=async(req,res)=>{
  const {id}=req.params
  try{
    const data=await ProductModel.findOne({_id:id})
    if(!data){
      return res.status(404).send({message:"Product not found"})

    }
    await ProductModel.findByIdAndDelete({_id:id})
    const newData=await ProductModel.find()
    return res.status(200).send({message:"fetched the product successfully",newData,success:true})
  }
  catch(err){
    return res.status(500).send({message:err.message,success:false})
  }
}
module.exports = { createProductController, getProductDataController ,getSingleProductDocumentController, updateProductController, deleteSingleProduct };
