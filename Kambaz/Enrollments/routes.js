import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(204);
  });

  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await dao.findAllEnrollments();
    res.json(enrollments);
  });

  app.delete("/api/enrollments/:courseId/:userId", (req, res) => {
    const { courseId, userId } = req.params;
    const status = dao.deleteEnrollment(courseId, userId);
    res.sendStatus(status);
  });
}