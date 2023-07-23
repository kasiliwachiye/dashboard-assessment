import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITopSellingProductsData extends Document {
  product: string;
  salesRevenue: number;
}

const TopSellingProductsDataSchema: Schema = new Schema({
  product: String,
  salesRevenue: Number,
});

const TopSellingProductsData: Model<ITopSellingProductsData> =
  mongoose.model<ITopSellingProductsData>(
    "TopSellingProductsData",
    TopSellingProductsDataSchema
  );

export default TopSellingProductsData;
