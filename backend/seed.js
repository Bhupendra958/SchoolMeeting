const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/User');
const Student = require('./models/Student');
const Assignment = require('./models/Assignment');
const Announcement = require('./models/Announcement');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/parent-teacher-portal';

const demoUsers = [
  {
    firstName: 'Aarav',
    lastName: 'Admin',
    email: 'admin@demo.com',
    password: 'password123',
    role: 'admin',
    phone: '9000000000'
  },
  {
    firstName: 'Amelia',
    lastName: 'Sharma',
    email: 'amelia.teacher@demo.com',
    password: 'password123',
    role: 'teacher',
    phone: '9000000001'
  },
  {
    firstName: 'James',
    lastName: 'Patel',
    email: 'james.teacher@demo.com',
    password: 'password123',
    role: 'teacher',
    phone: '9000000002'
  },
  {
    firstName: 'Nina',
    lastName: 'Verma',
    email: 'nina.parent@demo.com',
    password: 'password123',
    role: 'parent',
    phone: '9000000003'
  },
  {
    firstName: 'Rajesh',
    lastName: 'Kumar',
    email: 'rajesh.parent@demo.com',
    password: 'password123',
    role: 'parent',
    phone: '9000000004'
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to MongoDB: ${MONGODB_URI}`);

    await Assignment.deleteMany({});
    await Announcement.deleteMany({});
    await Student.deleteMany({});
    await User.deleteMany({});
    console.log('Cleared old demo data');

    const createdUsers = await User.create(demoUsers);

    const admin = createdUsers.find((user) => user.role === 'admin');
    const teachers = createdUsers.filter((user) => user.role === 'teacher');
    const parents = createdUsers.filter((user) => user.role === 'parent');

    const students = await Student.create([
      {
        firstName: 'Riya',
        lastName: 'Verma',
        studentId: 'STU-1001',
        dateOfBirth: new Date('2012-04-14'),
        grade: '7',
        section: 'A',
        parentIds: [parents[0]._id],
        teacherIds: teachers.map((teacher) => teacher._id),
        subjects: ['Mathematics', 'Science', 'English']
      },
      {
        firstName: 'Kabir',
        lastName: 'Verma',
        studentId: 'STU-1002',
        dateOfBirth: new Date('2010-08-23'),
        grade: '9',
        section: 'B',
        parentIds: [parents[0]._id],
        teacherIds: [teachers[0]._id],
        subjects: ['Mathematics', 'English', 'Computer Science']
      },
      {
        firstName: 'Anaya',
        lastName: 'Kumar',
        studentId: 'STU-1003',
        dateOfBirth: new Date('2011-01-19'),
        grade: '8',
        section: 'A',
        parentIds: [parents[1]._id],
        teacherIds: [teachers[1]._id],
        subjects: ['Science', 'History', 'English']
      }
    ]);

    await User.findByIdAndUpdate(parents[0]._id, {
      associatedIds: [students[0]._id, students[1]._id]
    });

    await User.findByIdAndUpdate(parents[1]._id, {
      associatedIds: [students[2]._id]
    });

    await Assignment.create([
      {
        title: 'Fractions Practice Worksheet',
        description: 'Complete questions 1 to 12 and show all working clearly.',
        subject: 'Mathematics',
        teacherId: teachers[0]._id,
        studentIds: [students[0]._id, students[1]._id],
        dueDate: new Date('2026-03-28'),
        maxGrade: 100,
        status: 'published'
      },
      {
        title: 'Plant Cell Poster',
        description: 'Prepare an illustrated poster with labels and 5 key facts.',
        subject: 'Science',
        teacherId: teachers[1]._id,
        studentIds: [students[0]._id, students[2]._id],
        dueDate: new Date('2026-03-30'),
        maxGrade: 50,
        status: 'published'
      },
      {
        title: 'Reading Reflection',
        description: 'Write a one-page reflection on the story discussed in class.',
        subject: 'English',
        teacherId: teachers[0]._id,
        studentIds: students.map((student) => student._id),
        dueDate: new Date('2026-04-02'),
        maxGrade: 25,
        status: 'published'
      }
    ]);

    await Announcement.create([
      {
        title: 'Welcome Back to School',
        content: 'We are excited to begin the new term. Please check assignments and announcements daily.',
        authorId: admin._id,
        targetAudience: 'all',
        priority: 'high'
      },
      {
        title: 'Science Lab Schedule',
        content: 'Science lab sessions for Grades 7 and 8 will be held every Wednesday afternoon.',
        authorId: teachers[1]._id,
        targetAudience: 'parents',
        priority: 'medium'
      },
      {
        title: 'Staff Coordination Meeting',
        content: 'All teachers are requested to attend the planning meeting on Friday at 3:30 PM.',
        authorId: admin._id,
        targetAudience: 'teachers',
        priority: 'urgent'
      },
      {
        title: 'Project Submission Reminder',
        content: 'Riya and Anaya should submit their science project outlines before Monday morning.',
        authorId: teachers[1]._id,
        targetAudience: 'specific',
        targetStudentIds: [students[0]._id, students[2]._id],
        priority: 'high'
      }
    ]);

    console.log('Demo data created successfully');
    console.log('');
    console.log('Demo accounts:');
    console.log('Admin   : admin@demo.com / password123');
    console.log('Teacher : amelia.teacher@demo.com / password123');
    console.log('Teacher : james.teacher@demo.com / password123');
    console.log('Parent  : nina.parent@demo.com / password123');
    console.log('Parent  : rajesh.parent@demo.com / password123');
  } catch (error) {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
