import mongoose from "mongoose";

const { Schema } = mongoose;

function generateRandomTurnoNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}

const turnSchema = new Schema({
  turnNumber: {
    type: Number,
    unique: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

turnSchema.virtual('service', {
  ref: 'Service',
  localField: '_id',
  foreignField: 'turn'
});

turnSchema.virtual('car', {
  ref: 'Car',
  localField: '_id',
  foreignField: 'turn'
});

turnSchema.pre('validate', function(next) {
  if (!this.turnNumber) {
    this.turnNumber = generateRandomTurnoNumber();
  }
  next();
});

const Turn = mongoose.model('Turn', turnSchema);

export default Turn;
