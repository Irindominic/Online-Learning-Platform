const Course = require('../models/Course');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

exports.addCourse = async (req, res) => {
  const { title, description, instructor } = req.body;
  try {
    const course = new Course({ title, description, instructor });
    await course.save();
    res.status(201).json({ message: 'Course added successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add course' });
  }
};
