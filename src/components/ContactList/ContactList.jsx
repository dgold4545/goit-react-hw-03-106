import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ initialValues }) {
  return (
    <ul className={css.flexBox}>
      {initialValues.map((initialValue) => {
        return (
          <li key={initialValue.id}>
            <Contact userContact={initialValue} />
          </li>
        );
      })}
    </ul>
  );
}
