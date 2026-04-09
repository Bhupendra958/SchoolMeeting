const demoTeachers = [
  {
    _id: 'teacher-1',
    firstName: 'Amelia',
    lastName: 'Sharma',
    email: 'amelia.teacher@demo.com',
    role: 'teacher',
  },
  {
    _id: 'teacher-2',
    firstName: 'James',
    lastName: 'Patel',
    email: 'james.teacher@demo.com',
    role: 'teacher',
  },
];

const demoParents = [
  {
    _id: 'parent-1',
    firstName: 'Nina',
    lastName: 'Verma',
    email: 'nina.parent@demo.com',
    role: 'parent',
  },
  {
    _id: 'parent-2',
    firstName: 'Rajesh',
    lastName: 'Kumar',
    email: 'rajesh.parent@demo.com',
    role: 'parent',
  },
];

const demoAdmin = {
  _id: 'admin-1',
  firstName: 'Aarav',
  lastName: 'Admin',
  email: 'admin@demo.com',
  role: 'admin',
};

export const demoUsers = [demoAdmin, ...demoTeachers, ...demoParents];

export const demoStudents = [
  {
    _id: 'student-1',
    firstName: 'Riya',
    lastName: 'Verma',
    studentId: 'STU-1001',
    grade: '7',
    section: 'A',
    teacherIds: demoTeachers,
    parentIds: [demoParents[0]],
  },
  {
    _id: 'student-2',
    firstName: 'Kabir',
    lastName: 'Verma',
    studentId: 'STU-1002',
    grade: '9',
    section: 'B',
    teacherIds: [demoTeachers[0]],
    parentIds: [demoParents[0]],
  },
  {
    _id: 'student-3',
    firstName: 'Anaya',
    lastName: 'Kumar',
    studentId: 'STU-1003',
    grade: '8',
    section: 'A',
    teacherIds: [demoTeachers[1]],
    parentIds: [demoParents[1]],
  },
];

export const demoGrades = [
  { _id: 'grade-1', studentId: 'student-1', subject: 'Mathematics', gradeType: 'assignment', grade: 92, maxGrade: 100, comments: 'Excellent work', date: '2026-04-01T10:00:00.000Z' },
  { _id: 'grade-2', studentId: 'student-1', subject: 'Science', gradeType: 'quiz', grade: 44, maxGrade: 50, comments: 'Strong concepts', date: '2026-04-03T10:00:00.000Z' },
  { _id: 'grade-3', studentId: 'student-2', subject: 'English', gradeType: 'project', grade: 21, maxGrade: 25, comments: 'Thoughtful response', date: '2026-04-04T10:00:00.000Z' },
  { _id: 'grade-4', studentId: 'student-3', subject: 'Science', gradeType: 'exam', grade: 84, maxGrade: 100, comments: 'Keep revising diagrams', date: '2026-04-02T10:00:00.000Z' },
];

export const demoAssignments = [
  {
    _id: 'assignment-1',
    title: 'Fractions Practice Worksheet',
    description: 'Complete questions 1 to 12 and show all working clearly.',
    subject: 'Mathematics',
    teacherId: demoTeachers[0],
    studentIds: [demoStudents[0], demoStudents[1]],
    dueDate: '2026-04-12T10:00:00.000Z',
    maxGrade: 100,
    status: 'published',
  },
  {
    _id: 'assignment-2',
    title: 'Plant Cell Poster',
    description: 'Prepare a labeled poster and include five key functions.',
    subject: 'Science',
    teacherId: demoTeachers[1],
    studentIds: [demoStudents[0], demoStudents[2]],
    dueDate: '2026-04-15T10:00:00.000Z',
    maxGrade: 50,
    status: 'published',
  },
  {
    _id: 'assignment-3',
    title: 'Reading Reflection',
    description: 'Write a one-page reflection on the chapter discussed this week.',
    subject: 'English',
    teacherId: demoTeachers[0],
    studentIds: demoStudents,
    dueDate: '2026-04-18T10:00:00.000Z',
    maxGrade: 25,
    status: 'published',
  },
];

export const demoAttendance = [
  { _id: 'attendance-1', studentId: demoStudents[0], date: '2026-04-09T09:00:00.000Z', status: 'present', subject: 'Mathematics', notes: 'On time' },
  { _id: 'attendance-2', studentId: demoStudents[1], date: '2026-04-09T09:00:00.000Z', status: 'late', subject: 'English', notes: 'Arrived 10 minutes late' },
  { _id: 'attendance-3', studentId: demoStudents[2], date: '2026-04-09T09:00:00.000Z', status: 'present', subject: 'Science', notes: '' },
  { _id: 'attendance-4', studentId: demoStudents[0], date: '2026-04-08T09:00:00.000Z', status: 'present', subject: 'Science', notes: '' },
];

export const demoBehaviors = [
  { _id: 'behavior-1', studentId: demoStudents[0], type: 'positive', category: 'academic', title: 'Strong Participation', description: 'Contributed thoughtful answers during class discussion.', date: '2026-04-07T10:00:00.000Z', severity: 'medium', subject: 'Science' },
  { _id: 'behavior-2', studentId: demoStudents[1], type: 'neutral', category: 'participation', title: 'Needs More Confidence', description: 'Understands the work well but should speak up more in group tasks.', date: '2026-04-06T10:00:00.000Z', severity: 'low', subject: 'English' },
  { _id: 'behavior-3', studentId: demoStudents[2], type: 'positive', category: 'social', title: 'Helpful Teammate', description: 'Supported classmates during the lab activity and stayed focused.', date: '2026-04-08T10:00:00.000Z', severity: 'medium', subject: 'Science' },
];

export const demoAnnouncements = [
  { _id: 'announcement-1', title: 'Welcome Back to School', content: 'We are excited to begin the new term. Please check assignments and announcements daily.', targetAudience: 'all', targetStudentIds: [], priority: 'high', authorId: demoAdmin, createdAt: '2026-04-01T08:00:00.000Z', isActive: true },
  { _id: 'announcement-2', title: 'Science Lab Schedule', content: 'Science lab sessions for Grades 7 and 8 will be held every Wednesday afternoon.', targetAudience: 'parents', targetStudentIds: [], priority: 'medium', authorId: demoTeachers[1], createdAt: '2026-04-05T08:00:00.000Z', isActive: true },
  { _id: 'announcement-3', title: 'Staff Coordination Meeting', content: 'All teachers are requested to attend the planning meeting on Friday at 3:30 PM.', targetAudience: 'teachers', targetStudentIds: [], priority: 'urgent', authorId: demoAdmin, createdAt: '2026-04-06T08:00:00.000Z', isActive: true },
  { _id: 'announcement-4', title: 'Project Submission Reminder', content: 'Riya and Anaya should submit their science project outlines before Monday morning.', targetAudience: 'specific', targetStudentIds: [demoStudents[0], demoStudents[2]], priority: 'high', authorId: demoTeachers[1], createdAt: '2026-04-07T08:00:00.000Z', isActive: true, expiresAt: '2026-04-20T08:00:00.000Z' },
];

export const demoMeetings = [
  {
    _id: 'meeting-1',
    title: 'Progress Check-In',
    description: 'Review of recent assignments and participation in class.',
    parentId: demoParents[0],
    teacherId: demoTeachers[0],
    studentId: demoStudents[0],
    scheduledDate: '2026-04-11T11:30:00.000Z',
    duration: 30,
    location: 'online',
    meetingLink: 'https://meet.example.com/riya-progress',
    notes: 'Bring recent notebooks for discussion.',
    status: 'confirmed',
  },
  {
    _id: 'meeting-2',
    title: 'Science Project Planning',
    description: 'Quick meeting to align on the project timeline and support needed at home.',
    parentId: demoParents[1],
    teacherId: demoTeachers[1],
    studentId: demoStudents[2],
    scheduledDate: '2026-04-14T09:00:00.000Z',
    duration: 25,
    location: 'in-person',
    meetingLink: '',
    notes: '',
    status: 'pending',
  },
];

const demoMessages = [
  {
    _id: 'message-1',
    senderId: demoParents[0],
    receiverId: demoTeachers[0],
    studentId: demoStudents[0],
    subject: 'Homework Question',
    content: 'Riya had a question about the fractions worksheet. Could you clarify question 8?',
    createdAt: '2026-04-08T09:15:00.000Z',
    isRead: true,
  },
  {
    _id: 'message-2',
    senderId: demoTeachers[0],
    receiverId: demoParents[0],
    studentId: demoStudents[0],
    subject: 'Re: Homework Question',
    content: 'Of course. Question 8 needs the answer in simplest form after converting the mixed number.',
    createdAt: '2026-04-08T10:10:00.000Z',
    isRead: false,
  },
  {
    _id: 'message-3',
    senderId: demoParents[1],
    receiverId: demoTeachers[1],
    studentId: demoStudents[2],
    subject: 'Science Project',
    content: 'Anaya has chosen renewable energy for the science fair.',
    createdAt: '2026-04-07T12:30:00.000Z',
    isRead: false,
  },
];

const getVisibleStudentIds = (user) => {
  if (user?.role === 'parent') {
    return ['student-1', 'student-2'];
  }

  return demoStudents.map((student) => student._id);
};

export const getMockStudents = (user) => {
  const visibleStudentIds = getVisibleStudentIds(user);
  return demoStudents.filter((student) => visibleStudentIds.includes(student._id));
};

export const getMockGrades = (user, studentId) => {
  const visibleStudentIds = getVisibleStudentIds(user);
  return demoGrades.filter((grade) => {
    if (!visibleStudentIds.includes(grade.studentId)) {
      return false;
    }
    return studentId ? grade.studentId === studentId : true;
  });
};

export const getMockAssignments = (user) => {
  const visibleStudentIds = getVisibleStudentIds(user);

  if (user?.role === 'teacher') {
    return demoAssignments.filter((assignment) => assignment.teacherId._id === demoTeachers[0]._id);
  }

  return demoAssignments.filter((assignment) =>
    assignment.studentIds.some((student) => visibleStudentIds.includes(student._id))
  );
};

export const getMockAttendance = (user) => {
  const visibleStudentIds = getVisibleStudentIds(user);
  return demoAttendance.filter((record) => visibleStudentIds.includes(record.studentId._id));
};

export const getMockBehaviors = (user) => {
  const visibleStudentIds = getVisibleStudentIds(user);
  return demoBehaviors.filter((behavior) => visibleStudentIds.includes(behavior.studentId._id));
};

export const getMockAnnouncements = (user) => {
  const visibleStudentIds = getVisibleStudentIds(user);

  if (user?.role === 'teacher') {
    return demoAnnouncements.filter((announcement) =>
      ['all', 'teachers'].includes(announcement.targetAudience)
    );
  }

  if (user?.role === 'parent') {
    return demoAnnouncements.filter((announcement) => {
      if (['all', 'parents'].includes(announcement.targetAudience)) {
        return true;
      }
      return announcement.targetStudentIds.some((student) => visibleStudentIds.includes(student._id));
    });
  }

  return demoAnnouncements;
};

export const getMockMeetings = (user) => {
  if (user?.role === 'teacher') {
    return demoMeetings.filter((meeting) => meeting.teacherId._id === demoTeachers[0]._id);
  }

  if (user?.role === 'parent') {
    return demoMeetings.filter((meeting) => meeting.parentId._id === demoParents[0]._id);
  }

  return demoMeetings;
};

export const getMockUsers = (user) => {
  if (user?.role === 'teacher') {
    return demoParents;
  }
  if (user?.role === 'parent') {
    return demoTeachers;
  }
  return demoUsers;
};

export const getMockMessages = (user, conversationWith) => {
  const currentPool = user?.role === 'teacher'
    ? demoMessages.filter((message) => message.receiverId._id === demoTeachers[0]._id || message.senderId._id === demoTeachers[0]._id)
    : user?.role === 'parent'
      ? demoMessages.filter((message) => message.receiverId._id === demoParents[0]._id || message.senderId._id === demoParents[0]._id)
      : demoMessages;

  if (!conversationWith) {
    return currentPool;
  }

  return currentPool.filter((message) =>
    message.senderId._id === conversationWith || message.receiverId._id === conversationWith
  );
};

export const getMockConversations = (user) => {
  const messages = getMockMessages(user);
  const partnerMap = new Map();

  messages.forEach((message) => {
    const isFromCurrentUser =
      (user?.role === 'teacher' && message.senderId._id === demoTeachers[0]._id) ||
      (user?.role === 'parent' && message.senderId._id === demoParents[0]._id);

    const partner = isFromCurrentUser ? message.receiverId : message.senderId;
    const existing = partnerMap.get(partner._id);
    const unreadCount = !isFromCurrentUser && !message.isRead ? 1 : 0;

    if (!existing || new Date(message.createdAt) > new Date(existing.lastMessage.createdAt)) {
      partnerMap.set(partner._id, {
        partner,
        lastMessage: message,
        unreadCount: (existing?.unreadCount || 0) + unreadCount,
      });
      return;
    }

    existing.unreadCount += unreadCount;
  });

  return Array.from(partnerMap.values());
};

export const getMockUnreadCount = (user) => {
  return getMockConversations(user).reduce((sum, conversation) => sum + (conversation.unreadCount || 0), 0);
};
