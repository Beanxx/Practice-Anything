import {
  FieldErrors,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import Second from "./Second";

const First = () => {
  const methods = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const onError = (error: FieldErrors) => {
    console.log(error);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <Second />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </>
  );
};
export default First;
