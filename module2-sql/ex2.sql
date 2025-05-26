SELECT title, AVG(rating) AS avg_rating, COUNT(*) AS feedback_count
FROM Events, Feedback
WHERE Events.event_id = Feedback.event_id
GROUP BY Events.event_id
HAVING feedback_count >= 10
ORDER BY avg_rating DESC;
