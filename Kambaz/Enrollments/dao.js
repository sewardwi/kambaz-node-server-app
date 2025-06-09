import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function findAllEnrollments() {
  return Database.enrollments;
}

export function deleteEnrollment(courseId, userId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.course === courseId && enrollment.user === userId)
  );
  return 204;
}