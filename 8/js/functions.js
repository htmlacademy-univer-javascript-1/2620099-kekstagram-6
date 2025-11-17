const time = (start, end, meetingStart, meetingTime) => {
  const [endH, endM] = end.split(':');
  const [meetingStartH, meetingStartM] = meetingStart.split(':');
  const meetingEnd = meetingStartH*60+meetingStartM + meetingTime;
  end = endH*60+ endM;
  return meetingEnd < end;
};

time('08:00', '17:30', '14:00', 90);
