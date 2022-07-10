import React from 'react'

const Footer = () => {
  return (
    <p>
        <footer className="main-footer" class="bg-black text-white pt-3  w-100 justify-end" style={{minHeight:"50px",background:"PapayaWhip"}}>
             <div className="container" class=" flex items-justify flex-col min-w-full" >
                <div className="row" class="grid grid-cols-3 grid-rows-1 ">
                    {/*column1*/}
                    <div className="col" class="text-center ">
                        <h4>Phones</h4>
                        <ul className="list-unstyled">
                            <li>OnePlus 10R</li>
                            <li>OnePlus Nord 2T</li>
                            <li>OnePlus Nord 2</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col" class="text-center">
                        <h4>Store</h4>
                        <ul className="list-unstyled" >
                            <li>TV</li>
                            <li>Audio</li>
                            <li>Wearables</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col" class="text-center">
                        <h4>Programs</h4>
                        <ul className="list-unstyled">
                            <li>Exchange Program</li>
                            <li>Red Cable Program</li>
                            <li>Welcome Gift</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm" class="text-center">
                        &copy;2022 Daravi INC | All Rights Reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </footer>
    </p>
  )
}
export default Footer;