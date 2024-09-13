import "./widgetSm.css"
import { Visibility } from "@mui/icons-material"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100222.jpg?uid=R161325646&ga=GA1.1.27176453.1725168356" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100223.jpg?uid=R161325646&ga=GA1.1.27176453.1725168356" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Susan</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100248.jpg?uid=R161325646&ga=GA1.1.27176453.1725168356" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Helen</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100209.jpg?uid=R161325646&ga=GA1.1.27176453.1725168356" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Isabella</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100184.jpg?t=st=1726201082~exp=1726204682~hmac=f3e60510a7ae7731ad5782ed7f774cee9260a23c77081d84037b9cc41f0e7c30&w=740" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Carter</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
        </li>
      </ul>
    </div>
  )
}
