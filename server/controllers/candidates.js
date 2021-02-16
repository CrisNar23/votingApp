import CandidatesSummary from "../models/candidatesSummary.js";

export const getCandidates = async (req, res) => {
  try {
    const candidatesSummary = await CandidatesSummary.find();

    res.status(200).json(candidatesSummary);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCandidate = async (req, res) => {
  const candidate = req.body;

  const newCandidate = new CandidatesSummary(candidate);

  try {
    await newCandidate.save();

    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
