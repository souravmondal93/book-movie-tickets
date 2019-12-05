export const updateSeatInList = (seatList, seat) => {
  const existingSeat = seatList.find(
    seatItem => seatItem.id === seat.id
  );

  if (existingSeat) {
    return seatList.map(seatItem =>
      seatItem.id === seat.id ?
        { ...seatItem, selected: !seatItem.selected }
        : seatItem
    );
  }
};
