import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { eventId } = useParams();

  return (
    <div>
      <h2>Event Detail Page</h2>
      <p>Event ID: {eventId}</p>
      {/* Add content for the Event Detail page */}
    </div>
  );
};

export default EventDetail;
