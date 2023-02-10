function Newsletter() {
    return(
        <div style={{background: 'black',}}>
            <div style={{display: 'flex', width: '81%', gap: '2em', margin: 'auto'}}>
                <img src="./images/ms-3.PNG" alt="" style={{width: '300px',}} />
                <div style={{width: '60%', padding: '3em 0em'}}>
                    <h1 style={{color: 'rgb(19, 187, 19)', fontSize: '50px', marginBottom: '1rem',}}>Subscribe For Newsletter !</h1>
                    <p style={{marginBottom: '1.2rem', color: 'white'}}>Join our newsletter, receive the latest updates and exclusive<br />promotions just into your inbox.</p>
                    <input className="newsletter" type="text" placeholder="Enter your email..." />
                    <button style={{padding: '8px 20px', background: 'rgb(19, 187, 19)',}}>SUBSCRIBE</button>
                </div>
            </div>

        </div>
    )
}



export default Newsletter