import React from 'react'

function Quote({quote}) {
    return (
            <div className="quote" key={quote.id}>
                <p>{quote.quoteText}</p>
             </div>
    )
}

export default Quote
