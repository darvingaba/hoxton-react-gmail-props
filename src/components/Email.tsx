import "./Email.css";
//@ts-ignore
export function Email({emailFilter,index,setEmails}:any) {
    const toggleStar = (targetEmail: any) => {
      const updatedEmails = (emails: any) =>
        emails.map((email:any) =>
          email.id === targetEmail.id
            ? { ...email, starred: !email.starred }
            : email
        );
      setEmails(updatedEmails);
    };

    const toggleRead = (targetEmail: any) => {
      const updatedEmails = (emails:any) =>
        emails.map((email:any) =>
          email.id === targetEmail.id ? { ...email, read: !email.read } : email
        );
      setEmails(updatedEmails);
    };
    return(
        <li
            key={index}
            className={`email ${emailFilter.read ? 'read' : 'unread'}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={emailFilter.read}
                  onChange={() => toggleRead(emailFilter)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={emailFilter.starred}
                  onChange={() => toggleStar(emailFilter)}
                />
              </div>
              <div className="sender">{emailFilter.sender}</div>
              <div className="title">{emailFilter.title}</div>
            </li>
    )
}