import { useState } from 'react'
import "./App.css";


import initialEmails, { Email } from './data/emails'
import { Header } from './components/Header'
import { LeftMenu } from './components/LeftMenu'
import { EmailList } from './components/EmailList'


const getReadEmails = (emails: Email[]) => emails.filter(email => !email.read)

const getStarredEmails = (emails: Email[]) =>
  emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)


  function getFilteredEmails(): Array<Email> {
    let filteredEmails = emails

    if (hideRead) {
      filteredEmails = getReadEmails(filteredEmails)
    }

    if (currentTab === 'starred') {
      filteredEmails = getStarredEmails(filteredEmails)
    }

    return filteredEmails
  }

  return (
    <div className="app">
      <Header/>
      <LeftMenu 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        unreadEmails={unreadEmails} 
        starredEmails={starredEmails} 
        hideRead={hideRead} 
        setHideRead={setHideRead}/>
      <EmailList 
        getFilteredEmails={getFilteredEmails}
        setEmails={setEmails}
        emails={emails}
      />
    </div>
  )
}

export default App
