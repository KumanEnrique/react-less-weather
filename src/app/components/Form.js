import React from 'react'

function Form(props) {
    // console.log(props);
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={props.onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="cityName" className="form-label mt-4">City Name</label>
                            <input value={props.state.cityName} onChange={props.onChange} autoFocus className="form-control" placeholder="Write your City name" id="cityName" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="countryCode" className="form-label mt-4">Country Code</label>
                            <input value={props.state.countryCode} onChange={props.onChange2} className="form-control" placeholder="Write your Country Code" id="countryCode" required/>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
