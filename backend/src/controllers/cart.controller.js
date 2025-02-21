const mongoose = require('mongoose');
const UserModel = require('../models/user.model');
const CartModel = require('../models/cart.model');

async function AddToCartController(req, res) {
  const { productId, quantity } = req.body;
  const userId = req.userId; // Extracted from middleware

  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid Product ID", success: false });
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid User ID", success: false });
    }

    const userExists = await UserModel.findById(userId);
    if (!userExists) {
      return res.status(401).json({ message: "Unauthorized. Please sign up.", success: false });
    }

    // Check if product is already in cart for this specific user
    const existingCartItem = await CartModel.findOne({ userId, productId });

    if (existingCartItem) {
      return res.status(400).json({ message: "Product is already in the cart", success: false });
    }

    // Add product to cart
    await CartModel.create({ userId, productId, quantity });

    return res.status(201).json({ message: "Product added to cart successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
}

async function GetProductsForUser(req, res) {
  const userId = req.UserId;
  try {
    console.log(userId);
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).send({ message: 'Un-Authorized Plese signup' });
    }
    const checkUserPresrnt = await UserModel.findOne({ _id: userId });

    if (!checkUserPresrnt) {
      return res.status(401).send({ message: 'Un-Authorized Plese signup' });
    }

    const data = await CartModel.find({ userId }).populate('productId');
    return res.status(200).send({
      message: 'Data is successfully fetched',
      success: true,
      cartData: data,
    });
  } catch (er) {
    return res.status(500).send({ message: er.message, success: false });
  }
}

module.exports = { AddToCartController, GetProductsForUser };