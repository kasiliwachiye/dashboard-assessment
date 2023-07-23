import mongoose, { Document, Model, Schema } from "mongoose";

export interface IRevenuePerProductData extends Document {
  product: string;
  revenue: number;
}

const RevenuePerProductDataSchema: Schema = new Schema({
  product: String,
  revenue: Number,
});

const RevenuePerProductData: Model<IRevenuePerProductData> =
  mongoose.model<IRevenuePerProductData>(
    "RevenuePerProductData",
    RevenuePerProductDataSchema
  );

export default RevenuePerProductData;
