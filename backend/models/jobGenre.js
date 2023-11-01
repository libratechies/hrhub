import mongoose from "mongoose";

const jobGenreSchema = mongoose.Schema(
    {
        genreName: {
            type: String,
            required: true
        }
    }, {
    timestamps: true
}
);

export const jobGenre = mongoose.model('Genre', { genreName: String });

