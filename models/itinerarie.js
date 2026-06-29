import { schema, model } from "mongoose";

const activitiesSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    time: {
        type: string,
        required: true,
    },
    notes : [String],
});

const itinerarySchema = new schema(
    {
        trip: {
            type: schema.Types.ObjectId,
            ref: "Trip",
            required: true,
        },
        title: {
            type: String,
            required: true,

            
    }