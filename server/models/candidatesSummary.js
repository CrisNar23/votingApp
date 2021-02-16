import mongoose from 'mongoose';

const candidatesSchema = mongoose.Schema({
  name: String,
  message: String,
  selectedFile: String,
  votesCount: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date, 
    default: new Date()
  }
});

const CandidatesSummary = mongoose.model('CandidatesSummary', candidatesSchema);

export default CandidatesSummary;