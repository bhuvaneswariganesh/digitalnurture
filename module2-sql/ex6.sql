SELECT title,
  SUM(resource_type = 'pdf') AS pdfs,
  SUM(resource_type = 'image') AS images,
  SUM(resource_type = 'link') AS links
FROM Events, Resources
WHERE Events.event_id = Resources.event_id
GROUP BY Events.event_id;
