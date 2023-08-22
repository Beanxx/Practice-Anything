import { useFormContext, useWatch } from "react-hook-form";
import ControlInput from "./ControlInput";
import UnControlInput from "./UnControlInput";

const Second = () => {
  const { control, register } = useFormContext();

  const nameValue = useWatch({
    control,
    name: "name",
  });

  return (
    <>
      <ControlInput name="name" control={control} />
      <ControlInput name="gender" control={control} />
      <UnControlInput name="address" register={register} />
      <UnControlInput name="age" register={register} />

      <div>{nameValue}</div>
    </>
  );
};
export default Second;
