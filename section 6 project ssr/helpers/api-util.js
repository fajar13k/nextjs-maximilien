export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-13d48-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}