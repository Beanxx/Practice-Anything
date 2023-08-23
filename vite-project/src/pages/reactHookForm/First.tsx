import {
  FieldErrors,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import Second from "./Second";
import UnControlInput from "./UnControlInput";

const First = () => {
  const methods = useForm();
  const { handleSubmit, register } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const onError = (errors: FieldErrors) => {
    for (const fieldName in errors) {
      if (errors[fieldName]?.type === "required") {
        console.log(`${fieldName} is required`);
      }
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Second />
          <UnControlInput name="age" register={register} />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </>
  );
};
export default First;
