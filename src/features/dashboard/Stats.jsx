import React from "react";
import Stat from "./Stat";

import PropTypes from "prop-types";

import { BarChart, Briefcase, Calendar, DollarSign } from "react-feather";
import { formatCurrency } from "../../utils/helpers";

Stats.propTypes = {
  bookings: PropTypes.array,
  confirmedStays: PropTypes.array,
  numDays: PropTypes.node,
  cabinCount: PropTypes.node,
};
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  // 3.

  const chekins = confirmedStays.length;
  //4 num checked in nights / all avaiable nights numdays * numcabins
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <React.Fragment>
      <Stat
        title="bookings"
        value={numBookings}
        color="blue"
        icon={<Briefcase />}
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        color="greed"
        icon={<DollarSign />}
      />
      <Stat
        title="Check ins"
        value={chekins}
        color="indigo"
        icon={<Calendar />}
      />
      <Stat
        title="Occupancy rate"
        value={Math.round(occupation * 100) + "%"}
        color="yellow"
        icon={<BarChart />}
      />
    </React.Fragment>
  );
}

export default Stats;
