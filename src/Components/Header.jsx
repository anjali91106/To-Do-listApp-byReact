import "./index.css"

function Header({onToggleTheme, currentTheme}){

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });

    return (
        <header className="header">
            <div>
                <h1>ToDo-ListApp-ByReact</h1>
                <p className="date">{today}</p>
            </div>
           
           <button onClick={onToggleTheme} className="theme-toggle-btn">
            {currentTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </header>
    )
}

export default Header;