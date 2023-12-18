import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useForm } from "react-hook-form";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { register, handleSubmit } = useForm();

  const { updateUser, isUpdating } = useUpdateUser();
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   alert(fullName);
  //   if (!fullName) return;
  //   updateUser({ fullName, avatar });
  // }
  function onSubmit(data) {
    const avatar = data.avatar[0];

    updateUser({
      ...data,
      fullName: data.fullName,
      avatar,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow lable="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow lable="Full name">
        <Input
          disabled={isUpdating}
          type="text"
          defaultValue={currentFullName}
          id="fullName"
          {...register("fullName")}
        />
      </FormRow>
      <FormRow lable="Avatar image">
        <FileInput
          disabled={isUpdating}
          id="avatar"
          accept="image/*"
          {...register("avatar")}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" disabled={isUpdating} variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
