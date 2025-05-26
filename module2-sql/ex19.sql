SELECT E.title, COUNT(DISTINCT R.user_id) AS total_registrations, 
       AVG(F.rating) AS avg_rating
FROM Events E
LEFT JOIN Registrations R ON E.event_id = R.event_id
LEFT JOIN Feedback F ON E.event_id = F.event_id
WHERE E.status = 'completed'
GROUP BY E.event_id;
