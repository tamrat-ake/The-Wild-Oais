import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSetting } from "./useSetting";
import { useUpdatetSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { isUpdating, updateSetting } = useUpdatetSetting();

  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
  } = useSetting();
  function handleUpdate(e, field) {
    const value = e.target.value;
    if (!value) return;
    updateSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow lable="Minimum nights/booking">
        <Input
          disabled={isLoading}
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow lable="Maximum nights/booking">
        <Input
          disabled={isUpdating}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow lable="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
        />
      </FormRow>
      <FormRow lable="Breakfast price">
        <Input
          type="number"
          defaultValue={breakfastPrice}
          id="breakfast-price"
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
