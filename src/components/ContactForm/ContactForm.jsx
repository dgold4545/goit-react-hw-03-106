import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { useId } from "react";

export default function ContactForm() {
  const ID = useId();

  return (
    <div>
      <Formik>
        <Form className={css.box}>
          <div className={css.flexgap}>
            <div className={css.flex}>
              <label htmlFor={`${ID}-name-`}>Name</label>

              <Field type="text" name="name" id={`${ID}-name-`} />
            </div>

            <div className={css.flex}>
              <label htmlFor={`${ID}-number-`}>Number</label>

              <Field type="text" name="number" id={`${ID}-number-`} />
            </div>

            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
