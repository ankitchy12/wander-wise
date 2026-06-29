import { Schema, model } from 'mongoose';

const ExpenseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const TripSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    destionation: [
        {
            type: String,
            required: true,
            trip: true,
        },
    ],
    Budget: BudgetSchema,
    collaborators: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

TripSchema.pre("findoneandupdate", function () {
    const expenses = this.getupdate().Budget?.expenses;
    if (expenses?.length ) {
        this.getupdate().budget.spend +=
           expenses.reduce((act, expense) => acc + expense.amount, 0);
        expenses.map((expense) => {
            expense.date = new Date();
        });
    }
});

const Trip = model("Trip", TripSchema);

export default Trip;
const Expense = model("Expense", ExpenseSchema);

export default Expense;