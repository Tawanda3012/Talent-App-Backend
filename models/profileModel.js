const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  occupation: { type: String },
  industry: { type: String, enum: ['Software Development', 'Digital Marketing', 'Design'] },
  bio: { type: String },
  profilePicUrl: { type: String },
  resumeUrl: { type: String },
  portfolioUrl: { type: String },
  linkedIn: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  website: { type: String },
  skills: [{ type: String }],
  experiences: [{
    position: { type: String },
    company: { type: String },
    city: { type: String },
    country: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    achievements: [{ type: String }],
  }],
  education: [{
    institution: { type: String },
    certificate: { type: String },
    startDate: { type: Date },
    graduationDate: { type: Date },
  }],
  licensesAndCertificates: [{
    institution: { type: String },
    licence: { type: String },
    year: { type: Number },
  }],
  volunteering: [{
    organization: { type: String },
    responsibilities: [{ type: String }],
  }],
  projects: [{
    name: { type: String },
    description: { type: String },
    url: { type: String },
  }],
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;