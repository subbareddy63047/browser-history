import './App.css'

// These are the list used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <div className="main-container">
    <div className="search-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo"
        className="logo-image"
      />
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          alt="search"
          className="search-logo"
        />
        <div className="subbu">
          <input placeholder="Search history" type="search" className="input" />
        </div>
      </div>
    </div>
  </div>
)

export default App
