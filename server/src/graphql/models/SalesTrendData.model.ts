import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISalesTrendData extends Document {
  date: Date;
  salesRevenue: number;
}

const SalesTrendDataSchema: Schema = new Schema({
  date: Date,
  salesRevenue: Number,
});

const SalesTrendData: Model<ISalesTrendData> =
  mongoose.model < ISalesTrendData > ("SalesTrendData", SalesTrendDataSchema);

export default SalesTrendData;
