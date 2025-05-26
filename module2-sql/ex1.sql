SELECT full_name, title, city, start_date FROM Users, Events, Registrations
WHERE Users.user_id = Registrations.user_id
AND Events.event_id = Registrations.event_id
AND Events.status = 'upcoming'
AND Users.city = Events.city
ORDER BY start_date;
