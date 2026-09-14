import { Link } from 'react-router-dom'
import {
  MdArrowDropDown,
  MdChevronLeft,
  MdChevronRight,
  MdMoreVert,
  MdRefresh,
  MdStar,
  MdStarBorder,
} from 'react-icons/md'
import type { RejectionEmail } from '../data/rejections'
import { SEARCH_QUERY } from '../data/search'
import { HighlightedText } from './HighlightedText'

type InboxViewProps = {
  emails: RejectionEmail[]
}

const filters = [
  'From',
  'Any time',
  'Has attachment',
  'To',
  'Is unread',
]

function getSnippet(email: RejectionEmail) {
  const match = email.paragraphs.find((paragraph) =>
    paragraph.toLowerCase().includes(SEARCH_QUERY),
  )

  return match ?? email.paragraphs[0]
}

function getSenderLabel(sender: string) {
  return sender.split('@')[0].replaceAll('-', ' ')
}

export function InboxView({ emails }: InboxViewProps) {
  return (
    <section className="message-shell inbox-shell" aria-label="Search results">
      <div className="filter-bar" aria-label="Search filters">
        {filters.map((filter) => (
          <button type="button" key={filter} title={filter === 'Is unread' ? 'Emotionally, all of them.' : 'Still hiring, allegedly.'}>
            {filter}
            {['From', 'Any time', 'To'].includes(filter) ? <MdArrowDropDown aria-hidden="true" /> : null}
          </button>
        ))}
        <a href="#advanced-search">Advanced search</a>
      </div>

      <div className="inbox-toolbar" aria-label="Inbox toolbar">
        <div className="inbox-toolbar-left">
          <button className="checkbox-button" type="button" aria-label="Select all"></button>
          <button className="gmail-icon-button" type="button" aria-label="Selection options">
            <MdArrowDropDown aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="Refresh">
            <MdRefresh aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="More">
            <MdMoreVert aria-hidden="true" />
          </button>
        </div>

        <div className="inbox-toolbar-right">
          <button className="relevance-pill" type="button">
            Showing most relevant
            <MdArrowDropDown aria-hidden="true" />
          </button>
          <span>1-{emails.length} of many</span>
          <button className="gmail-icon-button" type="button" aria-label="Previous page">
            <MdChevronLeft aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="Next page">
            <MdChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="email-results">
        {emails.map((email, index) => (
          <Link
            className={`email-result-row ${index % 2 === 0 ? 'tinted' : ''}`}
            to={`/inbox/${index + 1}`}
            key={email.company}
          >
            <span className="checkbox-button" aria-hidden="true"></span>
            <span className={`row-star ${index % 3 === 1 ? 'is-starred' : ''}`} aria-hidden="true">
              {index % 3 === 1 ? <MdStar /> : <MdStarBorder />}
            </span>
            <span className="row-sender">{getSenderLabel(email.sender)}</span>
            <span className="inbox-chip">Inbox</span>
            <span className="row-copy">
              <strong>{email.subject}</strong>
              <span> - </span>
              <HighlightedText text={getSnippet(email)} term={SEARCH_QUERY} />
            </span>
            <time>{email.date.split(',')[0]}</time>
          </Link>
        ))}
      </div>
    </section>
  )
}
