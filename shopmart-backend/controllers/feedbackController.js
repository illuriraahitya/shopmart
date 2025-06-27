const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const { comment, rating } = req.body;
    const feedback = await Feedback.create({
      user: req.user._id,
      comment,
      rating
    });
    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ message: 'Error creating feedback', error: err });
  }
};

exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user', 'name email');
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feedbacks', error: err });
  }
};
