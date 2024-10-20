import mongoose from "mongoose";
// Define the product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      validate: {
        validator: (value) => value >= 0,
        message: "Price must be a positive number",
      },
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    brand: {
      type: String,
      required: true,
    },
    //   stock: {
    //     type: Number,
    //     required: [true, "Product stock quantity is required"],
    //     default: 0,
    //     validate: {
    //       validator: (value) => value >= 0,
    //       message: "Stock quantity cannot be negative",
    //     },
    //   },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    // reviews: [
    //   {
    //     user: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User",
    //       required: true,
    //     },
    //     name: { type: String, required: true },
    //     rating: { type: Number, required: true, min: 0, max: 5 },
    //     comment: { type: String, required: true },
    //   },
    // ],
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeStamp: true,
  }
);

// Add a method to calculate average rating from reviews
productSchema.methods.calculateAverageRating = function () {
  const totalReviews = this.reviews.length;
  const totalRating = this.reviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  this.rating = totalReviews > 0 ? totalRating / totalReviews : 0;
  return this.rating;
};

// Create a product model using the schema
export const Product = mongoose.model("Product", productSchema);
