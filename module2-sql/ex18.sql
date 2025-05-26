SELECT E.event_id, E.title
FROM Events E
LEFT JOIN Resources R ON E.event_id = R.event_id
WHERE R.event_id IS NULL;
