SELECT full_name, title, rating, comments
FROM Users, Events, Feedback
WHERE Users.user_id = Feedback.user_id
AND Events.event_id = Feedback.event_id
AND rating < 3;

