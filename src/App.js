import React from 'react'
import injectSheet from 'react-jss'

const App = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.divPx}>
        <h1 className={classes.h1Px}>Heading 1 (px)</h1>
      </div>
      <div className={classes.divEm}>
        <h1 className={classes.h1Em}>Heading 1 (em)</h1>
      </div>
      <div className={classes.divRem}>
        <h1 className={classes.h1Rem}>Heading 1 (rem)</h1>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
  },
  divPx: {
    fontSize: '18px'
  },
  h1Px: {
    fontSize: '32px',
  },
  divEm: {
    fontSize: '18px'
  },
  h1Em: {
    fontSize: '2em'
  },
  divRem: {
    fontSize: '18px'
  },
  h1Rem: {
    fontSize: '2rem'
  },
}

export default injectSheet(styles)(App)
