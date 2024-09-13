import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className = {"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgerLgTr">
          <td className="widgetLgUser">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100223.jpg?uid=R161325646&ga=GA1.1.27176453.1725168356" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgerLgTr">
          <td className="widgetLgUser">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100222.jpg?uid=R161325646&ga=GA1.2.27176453.1725168356" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Anna</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgerLgTr">
          <td className="widgetLgUser">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100248.jpg?uid=R161325646&ga=GA1.2.27176453.1725168356" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Helen</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgerLgTr">
          <td className="widgetLgUser">
            <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100209.jpg?uid=R161325646&ga=GA1.2.27176453.1725168356" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Isabella</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}
