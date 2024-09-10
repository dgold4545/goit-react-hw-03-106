import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Contact({ userContact: { name, number } }) {
  let base = "tel:+";
  let telIntro = number.replace("-", "").replace("-", "");

  return (
    <div className={css.borderBox}>
      <ul>
        <li>
          <strong>
            <FaUser />
          </strong>{" "}
          {name}
        </li>
        <li>
          <strong>
            <FaPhoneAlt />
          </strong>{" "}
          <a href={base + telIntro}>{number}</a>
        </li>
      </ul>

      <button type="button">Delete</button>
    </div>
  );
}
