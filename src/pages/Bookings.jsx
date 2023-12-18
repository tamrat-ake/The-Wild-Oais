import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/Bookings/BookingTable";
import React from "react";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <React.Fragment>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </React.Fragment>
  );
}

export default Bookings;
