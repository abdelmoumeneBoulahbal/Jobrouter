import styles from './style/HelpLayout.module.css'

import {
    NavLink, Outlet,
} from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div>
      <h2 className={styles.help_section_title}>Help Section</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
        <div className={styles.help_layout}>
            <div className={styles.help_button_section}>
              <NavLink className={styles.faq} to='faq'>View FAQ</NavLink>
              <NavLink className={styles.contact} to='contact'>Contact</NavLink>
            </div>
            <Outlet />
        </div>
        
    </div>
  )
}

export default HelpLayout
