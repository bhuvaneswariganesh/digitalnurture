SELECT DISTINCT title
FROM Events, Registrations
WHERE Events.event_id = Registrations.event_id
AND Events.event_id NOT IN (
  SELECT event_id FROM Feedback
);
