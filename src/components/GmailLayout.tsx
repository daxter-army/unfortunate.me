import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {
  MdAdd,
  MdApps,
  MdCalendarToday,
  MdClose,
  MdLabel,
  MdPerson,
  MdOutlineEdit,
  MdExpandMore,
  MdHelpOutline,
  MdOutlineInbox,
  MdOutlineInsertDriveFile,
  MdLightbulbOutline,
  MdMenu,
  MdSchedule,
  MdSearch,
  MdOutlineSend,
  MdOutlineSettings,
  MdOutlineShoppingBag,
  MdStarBorder,
  MdTaskAlt,
  MdTune,
} from 'react-icons/md'
import { SEARCH_QUERY } from '../data/search'

type GmailLayoutProps = {
  children: ReactNode
}

const folders = [
  { label: 'Inbox', count: '6,386', icon: MdOutlineInbox, path: '/inbox', strong: true },
  { label: 'Starred', icon: MdStarBorder, path: '/inbox' },
  { label: 'Snoozed', icon: MdSchedule, path: '/inbox' },
  { label: 'Sent', icon: MdOutlineSend, path: '/inbox' },
  { label: 'Drafts', count: '4', icon: MdOutlineInsertDriveFile, path: '/inbox', strong: true },
  { label: 'Purchases', count: '47', icon: MdOutlineShoppingBag, path: '/inbox', strong: true },
]

export function GmailLayout({ children }: GmailLayoutProps) {
  return (
    <main className="gmail-app" aria-label="Rejected application emails">
      <header className="gmail-header">
        <div className="gmail-brand">
          <button className="gmail-icon-button" type="button" aria-label="Main menu">
            <MdMenu aria-hidden="true" />
          </button>
          <img className="gmail-lockup" src={`${import.meta.env.BASE_URL}gmail-lockup.png`} alt="Gmail" width="109" height="40" />
        </div>

        <div className="gmail-search" role="search">
          <MdSearch aria-hidden="true" />
          <span>{SEARCH_QUERY}</span>
          <button className="gmail-icon-button" type="button" aria-label="Clear search">
            <MdClose aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="Search options">
            <MdTune aria-hidden="true" />
          </button>
        </div>

        <div className="gmail-header-actions">
          <button className="gmail-icon-button" type="button" aria-label="Help">
            <MdHelpOutline aria-hidden="true" />
          </button>
          <button className="gmail-icon-button" type="button" aria-label="Settings">
            <MdOutlineSettings aria-hidden="true" />
          </button>
          <button className="gmail-icon-button sparkle" type="button" aria-label="Gemini">
            ✦
          </button>
          <button className="upgrade-button" type="button">
            Upgrade
          </button>
          <button className="gmail-icon-button" type="button" aria-label="Google apps">
            <MdApps aria-hidden="true" />
          </button>
          <span className="profile-badge">M</span>
        </div>
      </header>

      <div className="gmail-content">
        <aside className="gmail-sidebar" aria-label="Mailbox navigation">
          <button className="compose-button" type="button">
            <MdOutlineEdit aria-hidden="true" />
            Compose
          </button>

          <nav className="folder-list">
            {folders.map((folder) => {
              const Icon = folder.icon

              return (
                <NavLink
                  className={`folder-item ${folder.strong ? 'strong' : ''}`}
                  to={folder.path}
                  key={folder.label}
                >
                  <Icon aria-hidden="true" />
                  <span>{folder.label}</span>
                  {folder.count ? <strong>{folder.count}</strong> : null}
                </NavLink>
              )
            })}
            <NavLink className="folder-item" to="/inbox">
              <MdExpandMore aria-hidden="true" />
              <span>More</span>
            </NavLink>
          </nav>

          <div className="labels-heading">
            <span>Labels</span>
            <button className="gmail-icon-button" type="button" aria-label="Create label">
              <MdAdd aria-hidden="true" />
            </button>
          </div>

          <NavLink className="folder-item label-item" to="/inbox">
            <MdLabel aria-hidden="true" />
            <span>[Imap]/Drafts</span>
          </NavLink>
        </aside>

        {children}

        <aside className="apps-rail" aria-label="Google side panel">
          <button type="button" aria-label="Calendar">
            <span className="calendar-icon"><MdCalendarToday aria-hidden="true" /><b>31</b></span>
          </button>
          <button type="button" aria-label="Keep">
            <MdLightbulbOutline aria-hidden="true" />
          </button>
          <button type="button" aria-label="Tasks">
            <MdTaskAlt aria-hidden="true" />
          </button>
          <button type="button" aria-label="Contacts">
            <MdPerson aria-hidden="true" />
          </button>
          <span className="rail-divider"></span>
          <button type="button" aria-label="Add-ons">
            <MdAdd aria-hidden="true" />
          </button>
        </aside>
      </div>
    </main>
  )
}
