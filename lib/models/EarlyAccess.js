import mongoose from "mongoose";

const earlyAccessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.EarlyAccess || mongoose.model("EarlyAccess", earlyAccessSchema);
