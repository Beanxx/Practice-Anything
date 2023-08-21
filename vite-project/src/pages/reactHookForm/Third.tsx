import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

type TControl<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
};

const Third = <T extends FieldValues>({ control, name }: TControl<T>) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return <input value={value} onChange={onChange} />;
};
export default Third;
