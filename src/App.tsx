import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { EmailDetailView } from './components/EmailDetailView'
import { GmailLayout } from './components/GmailLayout'
import { InboxView } from './components/InboxView'
import { getRandomEmailIndex, rejectionEmails } from './data/rejections'
import { SEARCH_QUERY } from './data/search'
import './App.css'

function InboxRoute() {
  return (
    <>
      <Helmet>
        <title>Search results for {SEARCH_QUERY} - Gmail</title>
        <meta
          name="description"
          content="A Gmail-style inbox of fabricated rejection emails matching the unfortunately search."
        />
      </Helmet>
      <InboxView emails={rejectionEmails} />
    </>
  )
}

function EmailRoute() {
  const navigate = useNavigate()
  const { id } = useParams()
  const routeIndex = Number(id) - 1
  const selectedIndex =
    Number.isInteger(routeIndex) && routeIndex >= 0 && routeIndex < rejectionEmails.length
      ? routeIndex
      : 0
  const email = rejectionEmails[selectedIndex]

  return (
    <>
      <Helmet>
        <title>{email.subject} - Gmail</title>
        <meta name="description" content={email.paragraphs.join(' ')} />
      </Helmet>
      <EmailDetailView
        email={email}
        currentIndex={selectedIndex}
        total={rejectionEmails.length}
        onRefresh={() => navigate(`/inbox/${getRandomEmailIndex(selectedIndex) + 1}`)}
      />
    </>
  )
}

function App() {
  return (
    <GmailLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/inbox" replace />} />
        <Route path="/inbox" element={<InboxRoute />} />
        <Route path="/inbox/:id" element={<EmailRoute />} />
        <Route path="*" element={<Navigate to="/inbox" replace />} />
      </Routes>
    </GmailLayout>
  )
}

export default App
