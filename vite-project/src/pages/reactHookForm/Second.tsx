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
    <div style={{ background: "blue", padding: "10px" }}>
      <div>
        <ControlInput name="name" control={control} />
        <div>{nameValue}</div>
      </div>
      <div>
        <UnControlInput name="title" register={register} />
      </div>
    </div>
  );
};
export default Second;
