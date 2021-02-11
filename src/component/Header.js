import React from 'react'

function Header({updateState}) {
    return (
        <header>
            <div className="heading" onClick={updateState}>
                <p>random</p>
                <span id="autorenew" class="material-icons">autorenew</span>
            </div>
        </header>
    )
}

export default Header
