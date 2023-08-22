import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

type TControl<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
};

// 제어 Input
const ControlInput = <T extends FieldValues>({
  control,
  name,
}: TControl<T>) => {
  const {
    field: { value, onChange },
  } = useController({ name, control, rules: { required: true } });

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <label htmlFor={name}>⚪️ {name} (Controlled)</label>
      <input type="text" value={value || ""} onChange={onChange} />
    </div>
  );
};
export default ControlInput;
