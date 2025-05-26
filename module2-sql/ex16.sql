SELECT *
FROM Users U
WHERE registration_date >= CURDATE() - INTERVAL 30 DAY
AND NOT EXISTS (
    SELECT 1
    FROM Registrations R
    WHERE R.user_id = U.user_id
);
