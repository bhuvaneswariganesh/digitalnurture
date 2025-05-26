SELECT title, COUNT(*) AS session_count
FROM Events, Sessions
WHERE Events.event_id = Sessions.event_id
AND status = 'upcoming' GROUP BY Events.event_id;
