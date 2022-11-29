import React from 'react'

export default function Views({ ViewsNumber, uploadDate }) {
    return (
        <div style={{ margin: "20px" }}>
            <span>{ViewsNumber} iViews | </span>
            <span>Uploaded {uploadDate}</span>
        </ div>

    )
}

