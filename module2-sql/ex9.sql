SELECT full_name, status, COUNT(*) AS total_events
FROM Users, Events
WHERE Users.user_id = Events.organizer_id
GROUP BY Users.user_id, status;
