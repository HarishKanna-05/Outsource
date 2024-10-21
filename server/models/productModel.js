const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Price must be greater than 0"]
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
    },
    brand: {
        type: String,
        required: [true, "Product brand is required"],
    },
    available_dates: {
        type: [Date],
        default: []
    },
    available_ranges: {
        type: [
          {
            start_date: { type: Date, required: true },
            end_date: { type: Date, required: true }
          }
        ],
        default: []
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User ID is required"],
    },
    tags: {
        type: [String],
        default: []
    },
    location: {
        city: {
            type: String,
            required: true,
            trim: true
          },
          state: {
            type: String,
            required: true,
            trim: true
          },
          country: {
            type: String,
            required: true,
            trim: true
          }
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    reviews: {
        type: [
            {
                user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
                },
                name: { type: String, required: true },
                rating: { type: Number, required: true, min: 0, max: 5 },
                comment: { type: String, required: true },
            }
        ],
        default: []
    },
    images: {
        type: [
            {
              public_id: { type: String, required: true },
              url: { type: String, required: true },
            },
        ],
        default: []
    }
},
{
    timestamps: true
})

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

module.exports = mongoose.model('Product',productSchema)