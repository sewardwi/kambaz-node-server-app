import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.send(assignments);
  });

  app.post("/api/assignments", (req, res) => {
    const assignment = req.body;
    const newAssignment = dao.createAssignment(assignment);
    res.send(newAssignment);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.sendStatus(status);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(updatedAssignment);
  });
}