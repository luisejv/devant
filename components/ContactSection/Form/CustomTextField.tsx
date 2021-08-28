import React from 'react';
import { FieldHookConfig, useField, ErrorMessage } from 'formik';
interface OtherProps {
  idText: number;
}
const CustomTextField = (props: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <>
      {props.idText == 1 && (
        <input
          className={` form-control  ${
            meta.touched && meta.error && 'is-invalid'
          } `}
          {...field}
          placeholder={props.placeholder}
          type={props.type}
          id={props.id}
          name={props.name}
        />
      )}
      {props.idText == 2 && (
        <textarea
          style={{ resize: 'none' }}
          className={` form-control  ${
            meta.touched && meta.error && 'is-invalid'
          } `}
          {...field}
          rows={5}
          placeholder={props.placeholder}
          name={props.name}
        />
      )}
      <ErrorMessage component="div" className="validate" name={field.name} />
    </>
  );
};

export default CustomTextField;
