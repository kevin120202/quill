import mongoose from "mongoose";

export type JournalType = {
    _id: string;
    userId: string;
    title: string;
    journalType: "task" | "event" | "note" | "idea" | "mood" | "goal" | "habit" | "gratitude" | "quote" | "memory" | "reflection";
    entry: string;
}

const journalSchema = new mongoose.Schema({
    // userId: { type: String, required: true },
    title: { type: String, required: true },
    journalType: {
        type: String,
        enum: ["task", "event", "note", "idea", "mood", "goal", "habit", "gratitude", "quote", "memory", "reflection"],
        required: true
    },
    entry: { type: String, required: true }
}, { timestamps: true })

const Journal = mongoose.model<JournalType>("Journal", journalSchema)

export default Journal