import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISalesByCategoryData extends Document {
  category: string;
  salesRevenue: number;
}

const SalesByCategoryDataSchema: Schema = new Schema({
  category: String,
  salesRevenue: Number,
});

const SalesByCategoryData: Model<ISalesByCategoryData> =
  mongoose.model<ISalesByCategoryData>(
    "SalesByCategoryData",
    SalesByCategoryDataSchema
  );

export default SalesByCategoryData;
