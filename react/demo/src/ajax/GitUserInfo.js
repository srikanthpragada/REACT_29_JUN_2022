import React, { useState } from 'react'
import $ from 'jquery'

export default function GitUserInfo() {
    const userid = React.createRef()   // useRef()
    const [data, setData] = useState({})
    const [message, setMessage] = useState('')

    function getInfo() {
        setMessage('')
        setData({})
        $.get(
            {
                url: `https://api.github.com/users/${userid.current.value}`,
                success: function (resp) {
                    setData(resp)
                },
                error: function (error) {
                    setMessage("Sorry! Invalid userid!")
                    console.log(error)
                }
            }
        );
    }
    return (
        <>
            <h1>Github User Info</h1>
            <input type="text" ref={userid} defaultValue="srikanthpragada" />
            <span className="text-danger fw-bold">{message}</span>
            <p></p>
            <button onClick={getInfo}>Get Info</button>
            <p></p>
            {
                data.name &&
                <div className="row">
                    <div className="col-sm-6">
                        Name : {data.name}
                        <p></p>
                        Location : {data.location}
                        <p></p>
                        Email : {data.email}
                        <p></p>
                        Company : {data.company}
                    </div>
                    <div className="col-sm-6">
                            <img style={{ width: '300px', height: '300px' }}
                                 src={data.avatar_url} alt={data.name} title={data.name}
                                 className="image image-responsive" />
                    </div>
                </div>
            }
        </>
    )
}
