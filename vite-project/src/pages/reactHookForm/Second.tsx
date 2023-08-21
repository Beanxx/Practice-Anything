import { useFormContext } from "react-hook-form";
import Third from "./Third";

const Second = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Third name="title" control={control} />
      <Third name="subTitle" control={control} />
      <Third name="name" control={control} />
    </div>
  );
};
export default Second;
