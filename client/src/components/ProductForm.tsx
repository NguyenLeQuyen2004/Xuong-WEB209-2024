import { Button, Stack } from "@mui/material";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { ProductFormParams } from "src/types/Product";
import { InputText } from "./elements/InputText";

type ProductFormProps = {
  onSubmit: (values: ProductFormParams) => void;
  initialValues?: any;
};

function ProductForm({ onSubmit, initialValues }: ProductFormProps) {
  const validate = (values: ProductFormParams) => {
    const { title, images, price } = values;
    const errors: ValidationErrors = {};
    if (!title) errors.title = "Can nhap title vao";
    if (title && title.length < 6)
      errors.title = "Can nhap toi thieu 6 ky tu vao";
    if (!images) errors.image = "Can nhap image vao";
    // if (!category) errors.category = "Can nhap category vao";
    if (!price) errors.price = "Can nhap price vao";
    else if (price <= 0) errors.price = "Giá phải lớn hơn 0";
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ values }) => {
        return (
          <Stack>
            <Field
              name="title"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Title"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field
              name="image"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Image"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field<string>
              name="description"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Description"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field<number>
              name="price"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Price"}
                  messageError={meta.touched && meta.error}
                  type="number"
                />
              )}
            />
            <br />
            <Button
              variant="contained"
              type="submit"
              onClick={() => onSubmit(values)}
            >
              Submit
            </Button>
          </Stack>
        );
      }}
    />
  );
}

export default ProductForm;
