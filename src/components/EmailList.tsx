import "./Emails.css"

import { Email } from "./Email"
export function EmailList({getFilteredEmails,setEmails}:any) {
    return (
        <main className="emails">
        <ul>
          {getFilteredEmails().map((email:any, index:any) => (
            <Email 
                emailFilter={email}
                key={index}
                setEmails={setEmails}
                index={index}
            />
          ))}
        </ul>
      </main>
    )
}