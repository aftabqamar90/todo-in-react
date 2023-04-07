import React from 'react'

function Footer(props) {
  let footerStyle = {
    position: 'relative',
    top: '70vh',
    width: '100%',
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p>
      Copy Right &copy; Qamar Aftab
      </p>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
