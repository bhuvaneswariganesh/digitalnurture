SELECT E.event_id, E.title
FROM Events E
LEFT JOIN Sessions S ON E.event_id = S.event_id  WHERE  S.event_id IS NULL;
