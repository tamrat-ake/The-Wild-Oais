import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { useCheckout } from "./useChecout";
CheckoutButton.propTypes = {
  bookingId: PropTypes.node,
};

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
      variation="primary"
      size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
