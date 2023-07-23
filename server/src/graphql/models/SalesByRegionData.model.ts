import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISalesByRegionData extends Document {
  region: string;
  salesRevenue: number;
}

const SalesByRegionDataSchema: Schema = new Schema({
  region: String,
  salesRevenue: Number,
});

const SalesByRegionData: Model<ISalesByRegionData> =
  mongoose.model<ISalesByRegionData>(
    "SalesByRegionData",
    SalesByRegionDataSchema
  );

export default SalesByRegionData;
