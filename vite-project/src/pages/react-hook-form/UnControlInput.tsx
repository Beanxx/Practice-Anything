import { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

type TControl<T extends FieldValues> = {
  name: FieldPath<T>;
  register: UseFormRegister<T>;
};

// UnControlled Input
const UnControlInput = <T extends FieldValues>({
  name,
  register,
}: TControl<T>) => {
  return (
    <div style={{ display: "flex", gap: "10px", background: "orange" }}>
      <label htmlFor={name}>⚫️ {name} (UnControlled)</label>
      <input type="text" {...register(name, { required: true })} />
    </div>
  );
};

export default UnControlInput;
