import React from 'react';

export default function FirstGrid(){
    return(
        <div className ="firstgrid" style={{display: 'inline-block'}}>
            <div className="container">
                 <div className="mobilePhone"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>

                <img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Karen-green-160x160_1.png" />
                <p>Mobile Phones</p>
                </div>

                <div className="earphones"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src="https://image01-in.oneplus.net/ebp/202207/01/1-m00-3c-27-cpgm7mk-ru-afzmxaam7ntavfjs206_384_384.png" />
                <p>Earphones</p>
                </div>

                <div className="watches"style={{display: 'inline-block', width:'25%', textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Wearable.png" />
                <p>Smart Watches</p>
                </div>
                
                <div className="accessories"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>
                <img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Power-Cables.png"/>
                <p>Accessories</p>
                </div>
                </div>    
            
        </div>
    )
}