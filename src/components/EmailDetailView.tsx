import { Link } from 'react-router-dom'
import {
  MdOutlineArchive,
  MdArrowBack,
  MdChevronLeft,
  MdChevronRight,
  MdDeleteOutline,
  MdOutlineMarkEmailUnread,
  MdMoveToInbox,
  MdKeyboardArrowDown,
  MdMoreVert,
  MdOpenInNew,
  MdPrint,
  MdReply,
  MdReportGmailerrorred,
  MdSentimentSatisfiedAlt,
  MdStar,
} from 'react-icons/md'
import type { RejectionEmail } from '../data/rejections'
import { SEARCH_QUERY } from '../data/search'
import { HighlightedText } from './HighlightedText'

type EmailDetailViewProps = {
  email: RejectionEmail
  currentIndex: number
  total: number
  onRefresh: () => void
}

const toolbarActions = [
  { label: 'Back to inbox', icon: MdArrowBack, to: '/inbox' },
  { label: 'Archive', icon: MdOutlineArchive },
  { label: 'Report spam', icon: MdReportGmailerrorred },
  { label: 'Delete', icon: MdDeleteOutline },
]

export function EmailDetailView({
  email,
  currentIndex,
  total,
  onRefresh,
}: EmailDetailViewProps) {
  return (
    <section className="message-shell">
      <div className="message-toolbar" aria-label="Email toolbar">
        <div className="toolbar-left">
          {toolbarActions.map((action) => {
            const Icon = action.icon

            if (action.to) {
              return (
                <Link
                  className="gmail-icon-button"
                  to={action.to}
                  aria-label={action.label}
                  title={action.label}
                  key={action.label}
                >
                  <Icon aria-hidden="true" />
                </Link>
              )
            }

            return (
              <button
                className="gmail-icon-button"
                type="button"
                aria-label={action.label}
                title={action.label}
                key={action.label}
              >
                <Icon aria-hidden="true" />
              </button>
            )
          })}

          <span className="toolbar-rule"></span>

          <button
            className="gmail-icon-button"
            type="button"
            aria-label="New rejection"
            title="New rejection"
            onClick={onRefresh}
          >
            <MdOutlineMarkEmailUnread aria-hidden="true" />
          </button>

          <button className="gmail-icon-button" type="button" aria-label="Move to inbox">
            <MdMoveToInbox aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="More">
            <MdMoreVert aria-hidden="true" />
          </button>
        </div>

        <div className="toolbar-right">
          <span>
            {currentIndex + 1} of {total}
          </span>
          <button className="gmail-icon-button" type="button" aria-label="Older">
            <MdChevronLeft aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="Newer">
            <MdChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <article className="message-body">
        <div className="subject-line">
          <h1>
            <HighlightedText text={email.subject} term={SEARCH_QUERY} />
          </h1>
          <span className="inbox-chip">Inbox ×</span>
          <div className="subject-actions">
            <button className="gmail-icon-button" type="button" aria-label="Print">
              <MdPrint aria-hidden="true" />
            </button>
            <button className="gmail-icon-button" type="button" aria-label="Open in new">
              <MdOpenInNew aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="sender-line">
          <div className="sender-avatar" aria-hidden="true"></div>
          <div className="sender-meta">
            <strong>{email.sender}</strong>
            <button type="button">
              to me
              <MdKeyboardArrowDown aria-hidden="true" />
            </button>
          </div>
          <time>{email.date} (2 days ago)</time>
          <button className="star-button" type="button" aria-label="Star">
            <MdStar aria-hidden="true" />
          </button>
          <button className="gmail-icon-button mood-button" type="button" aria-label="Add reaction">
            <MdSentimentSatisfiedAlt aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="Reply">
            <MdReply aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="More">
            <MdMoreVert aria-hidden="true" />
          </button>
        </div>

        <div className="email-copy">
          <p>{email.greeting}</p>
          {email.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <HighlightedText text={paragraph} term={SEARCH_QUERY} />
            </p>
          ))}
          <p>{email.signoff}</p>
          <p className="email-links">
            {email.links.map((link) => (
              <a href="#career-links" key={link}>
                {link}
              </a>
            ))}
          </p>
        </div>

        <div className="reply-actions">
          <button type="button">
            <MdReply aria-hidden="true" />
            Reply
          </button>
          <button type="button">
            <MdReply className="forward-icon" aria-hidden="true" />
            Forward
          </button>
          <button className="round-reaction" type="button" aria-label="React">
            <MdSentimentSatisfiedAlt aria-hidden="true" />
          </button>
        </div>
      </article>
    </section>
  )
}
