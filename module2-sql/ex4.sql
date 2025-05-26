SELECT title, COUNT(*) AS session_count
FROM Events, Sessions
WHERE Events.event_id = Sessions.event_id
AND TIME(start_time) >= '10:00:00'
AND TIME(start_time) < '12:00:00'
GROUP BY Events.event_id;

