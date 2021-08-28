import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextField from './CustomTextField';
import sendForm from '../../../helpers/emailHelper';

const FormContact = () => {
  interface valuesInterface {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  const initialValues: valuesInterface = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const validation = Yup.object({
    name: Yup.string()
      .min(4, 'Nombre debe tener 2 caracteres o más')
      .required('Nombre requerido'),
    email: Yup.string().email('Formato inválido').required('Email requerido'),
    subject: Yup.string()
      .min(8, 'Tema debe tener 8 caracteres o más')
      .required('Tema requerido'),
    message: Yup.string().required('Por favor, escríbenos algo'),
  });
  const handleSubmit = (values: valuesInterface) => {
    const element = window.document.getElementById('loading');
    element?.classList.remove('dis');
    sendForm(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validation}
    >
      {(formik) => (
        <Form className="php-email-form">
          <div className="form-row">
            <div className="col-md-6 form-group">
              <CustomTextField
                idText={1}
                type="text"
                name="name"
                id="name"
                placeholder="Tu nombre"
              />
            </div>
            <div className="col-md-6 form-group">
              <CustomTextField
                idText={1}
                type="email"
                name="email"
                id="email"
                placeholder="Tu Email"
              />
            </div>
          </div>
          <div className="form-group">
            <CustomTextField
              idText={1}
              type="text"
              name="subject"
              id="subject"
              placeholder="Tema"
            />
          </div>
          <div className="form-group">
            <CustomTextField idText={2} placeholder="Mensaje" name="message" />
          </div>
          <div className="mb-3">
            <div id="loading" className={'loading dis'}>
              Cargando
            </div>
            <div id="error-message" className={'error-message dis'}>
              Hubo un error al mandar su mensaje
            </div>
            <div id="sent-message" className={'sent-message dis'}>
              Su mensaje fue enviado correctamente. ¡Gracias!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
