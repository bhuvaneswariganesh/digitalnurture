SELECT city, COUNT(DISTINCT user_id) AS total_users
FROM Users, Registrations
WHERE Users.user_id = Registrations.user_id
GROUP BY city
ORDER BY total_users DESC
LIMIT 5;

