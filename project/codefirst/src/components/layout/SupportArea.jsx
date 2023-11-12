import React from 'react'
// import img10 from '/img/images/support_img.png'
function SupportArea() {
  return (
    <>
        <section className="online-support-area">
    <div className="container">
        <div className="">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="online-support-img">
                    <img src="/img/services/claritech-web-development.webp" style={{width:'100%'}} alt=""/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="online-support-content">
                        <h2 className="title">CodeFirst Academy </h2>
                        {/* <p>Online Customer Service is defined as any service that helps thea customers solve problems via the internet done by you
                        customer support agents primary.</p> 
                        <i class="fa-solid fa-diagram-project"></i>
                        <i class="fa-solid fa-brain-circuit"></i>
                        <i class="fa-solid fa-code-fork"></i>
                        <i class="fa-solid fa-brackets-curly"></i>
                        */}
                        <div className="support-info-wrap">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="support-info-item">
                                        {/* <p>Around the clock support</p> */}
                                        <h2 className='d-block d-md-flex'><i className="fa-solid fa-diagram-project m-4"></i> 20+</h2>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="support-info-item">
                                        {/* <p>customer happiness rating</p> */}
                                        <h2 className='d-block d-md-flex'><i className="flaticon-happy m-3"></i> 100%</h2>
                                        <p>Client Satisfaction</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="support-info-item">
                                        {/* <p>customer happiness rating</p> */}
                                        <h2 className='d-block d-md-flex'><i className="fa-solid fa-code m-4"></i> 20+</h2>
                                        <p>Learning Technology</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="support-info-item">
                                        {/* <p>customer happiness rating</p> */}
                                        <h2 className='d-block d-md-flex'><i className="fa-solid fa-code-fork m-4"></i>10+</h2>
                                        <p>Expert Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default SupportArea