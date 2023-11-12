import React from 'react';
import { Card } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


function Python() {
    return (
        <>
        <section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage: `url(${'/img/bg/breadcrumb_bg.jpg'})` }} >
    <div className="container">
        <div className="">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <h2 className="title">CodeFirst Academy</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to={'/'}>Home</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            <div className="container-fluid text-center w-md-75 w-100  border-top-0">
                <div className="row mx-auto text-center">
                    <div className="col-12 mt-2 text-center">
                        <h2 className='mt-2'><b>Full Stack Web Development</b></h2>
                        <p className='text-center'>Become a job-ready software developer
                            in 30 weeks at no upfront fees. Pay us only if you get
                            a job that pays you ₹5,00,000/- per year or more!</p>
                    </div>
                    <div className="col-12 mt-3">
                        <ul>
                            <li>
                                <i className="fa-solid fa-user h4 px-3" style={{ color: '#F7941D' }}></i>
                                <span>2100+ Students Currently Enrolled</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-suitcase h4 px-3" style={{ color: '#F7941D' }}></i>
                                <span>2100+ Students Currently Enrolled</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-indian-rupee-sign h4 px-3" style={{ color: '#F7941D' }}></i>
                                <span>2100+ Students Currently Enrolled</span>
                            </li>
                        </ul>
                    </div>

                    <div className='container text-center mt-3 w-md-75 w-100 d-md-flex d-block flex-row py-md-0 py-2' style={{ backgroundColor: '#6e71cc' }}>
                        <div className="col-lg-6 col-sm-12 mt-2 mt-md-0 p-4">
                            <button type="button" className="mx-2 btn btn-white">
                                <i class="fa-regular fa-clock"></i> Full Time
                            </button>
                            <button type="button" className="mx-2 btn btn-white my-2">
                                <i class="fa-regular fa-calendar"></i> 30 WEEKS
                            </button>
                        </div>
                        <div className="col-lg-6 col-sm-12 d-flex align-items-center mb-3 mb-md-0">
                            <button type="button" className='btn btn-transperent'>EXPLORE OUR PART TIME COURSE
                                <i class="fa-solid fa-greater-than text-white mx-2"></i>
                            </button>
                        </div>

                    </div>

                    <div className="container w-md-75 w-100">
                        <div className="row mt-5">
                            <div className="col-12">
                                <h4 className="text-justify">Next Batch</h4>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 d-md-flex d-block flex-row my-2">
                                <div className="col-lg-8 col-sm-12">
                                    <div className="d-flex flex-start">Web 21</div>
                                    <div className="d-flex flex-start">Starts 25 July 2022.</div>
                                </div>

                                <div className="col-lg-4 col-sm-12">
                                    <button type="button" className="btn btn-danger">
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12">
                                <div className="row">
                                    <div className="col-12 d-flex flex-start">
                                        <small className="mx-1">Upcoming Batches</small>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 d-flex flex-row">
                                        <div className="d-flex flex-start" >Web 22</div>
                                        <div className="d-flex flex-end">Starts 25 July 2022.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 d-flex flex-row">
                                        <div className="d-flex flex-start">Web 23</div>
                                        <div className="d-flex flex-end">Starts 25 July 2022.</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                  

                    <div className='container w-md-75 w-100'>
                        <div className='row'>
                            <div className="col-12 mt-5">
                                <div>
                                    <p className='text-start mt-2'><h3>Course Details</h3></p>
                                    <p className='text-start'>In a duration of 30 weeks, the course requires a
                                        commitment from 9am to 9pm for 6 days a week in an intensive and immersive curriculum.</p>
                                </div>
                                <div className='row'>
                                    <div className="col  d-md-flex justify-content-center">
                                    <div className='col-md-3 col-12'>
                                        <div>
                                            <h2 className='' style={{ color: '#F7941D' }}><i class="fa-regular fa-calendar"></i></h2>
                                        </div>
                                        <div className=''>
                                            <h5>30 Weeks</h5>
                                        </div>
                                        <div>
                                            <h5>(7 Months)</h5>
                                        </div>
                                    </div>

                                    <div className='col-md-3 col-sm-12'>
                                        <div>
                                            <h2 className='' style={{ color: '#F7941D' }}><i class="fa-regular fa-clock"></i></h2>
                                        </div>
                                        <div className=''>
                                            <h5>9 am to 9 pm</h5>
                                        </div>
                                        <div>
                                            <h5>Monday to Saturday</h5>
                                        </div>
                                    </div>

                                    <div className='col-md-3 col-sm-12'>
                                        <div>
                                            <h2 className='' style={{ color: '#F7941D' }}><i class="fa-solid fa-suitcase"></i></h2>
                                        </div>
                                        <div className=''>
                                            <h5>96%</h5>
                                        </div>
                                        <div>
                                            <h5>Placements</h5>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-5'>
                        <div className='row'>
                            <div className="col-12 mt-3">
                                <div className="text-center">
                                    <h2>Minimum Criteria</h2>
                                    <p>You should meet the following requirements to be eligible for this course.</p>
                                </div>
                                <div className='row'>
                                    <div className='col-12 d-block d-md-flex'>
                                      
                                            <Card style={{ width: '13rem', margin:'auto' }}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 style={{ color: '#F7941D' }}><i class="fa-solid fa-id-card"></i> </h1>
                                                        <b>Qualification</b>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        Cleared 12th Standard, Ready To Take a Job Immediately After
                                                        Course Finishes
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '13rem', margin:'auto' }}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 style={{ color: '#F7941D' }}><i class="fa-solid fa-user"></i></h1>
                                                        <b>Hardware</b>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <div>A laptop, uninterrupted </div>
                                                        <div> internet connection</div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '13rem', margin:'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 style={{ color: '#F7941D' }}><i class="fa-solid fa-id-card"></i></h1>
                                                        <b>Age</b>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <div>Min .18 yrs</div>
                                                        <div>Max. 28 yrs</div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '13rem', margin:'auto' }}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 style={{ color: '#F7941D' }}><i class="fa-solid fa-globe"></i></h1>
                                                        <b>ID</b>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <div>Valid PAN Card</div>
                                                        <div>and Aadhar Card</div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '13rem', margin:'auto' }}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 style={{ color: '#F7941D' }}><i class="fa-solid fa-comment"></i></h1>
                                                        <b>Communication Skills</b>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <div>Basic English - speaking,</div>
                                                        <div>reading and writing</div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-5">
                        <div className="text-center">
                            <h2>Meet Your Instructors</h2>
                            <p>Being accomplished developers themselves, the Curriculum Team is an experienced
                                group of coding instructors.</p>
                        </div>
                        <div className="container text-center d-md-flex mx-auto  gap-3">
                            <div className="card col-md-3 col-sm-12 mt-5 mt-4" style={{ width: "18rem;" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text text-sm-justify">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card col-md-3 col-sm-12 mt-5 mt-4" style={{ width: "18rem;" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text text-sm-justify">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card col-md-3 col-sm12 mt-5 mt-4" style={{ width: "18rem;" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text text-sm-justify">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="card col-md-3 col-sm-12 mt-5 mt-4" style={{ width: "18rem;" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text text-sm-justify">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-5'>
                        <h1>What you'll learn</h1>
                        <div className='row '>
                            <div className='col-sm-12 col-md-6 col-lg-12 d-flex flex-lg-row flex-md-column flex-sm-column justify-content-around mt-4'>
                                <div><h1 style={{ color: 'darkorange' }}><i class="fa-brands fa-html5"></i></h1></div>
                                <div><h1 style={{ color: 'blue' }}><i class="fa-brands fa-css3-alt"></i> </h1></div>
                                <div><h1 style={{ color: 'darkblue' }}><i class="fa-brands fa-bootstrap"></i></h1> </div>
                                <div><h1 style={{ color: 'green' }}><i class="fa-brands fa-node-js"></i></h1> </div>
                                <div><h1 style={{ color: 'darkorange' }}><i class="fa-brands fa-python"></i></h1> </div>
                                <div><h1 style={{ color: 'brown' }}><i class="fa-brands fa-java"></i></h1> </div>
                                <div><h1 style={{ color: 'darkblue' }}><i class="fa-brands fa-react"></i></h1> </div>
                                <div><h1 style={{ color: 'red' }}><i class="fa-brands fa-angular"></i></h1> </div>
                            </div>
                        </div>
                    </div>

                    <div className='container mx-auto my-5'>
                        <div className='row'>
                            <div className='col-12'>
                                <div class="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingTwo1">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo1"
                                                aria-expanded="false" aria-controls="collapseTwo1">
                                                <h5 class="mb-0">
                                                    What is the medium of instruction?<i class="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapseTwo1" class="collapse" role="tabpanel" aria-labelledby="headingTwo1"
                                            data-parent="#accordionEx1">
                                            <div class="card-body">
                                                The medium of instruction at Masai is English. All lectures are delivered in English. As part of the curriculum,
                                                we also help you develop your written and verbal communication skills that help you become more employable.
                                            </div>
                                        </div>

                                    </div>

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingTwo2">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo21"
                                                aria-expanded="false" aria-controls="collapseTwo21">
                                                <h5 class="mb-0">
                                                    What is the duration of the program? <i class="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapseTwo21" class="collapse" role="tabpanel" aria-labelledby="headingTwo21"
                                            data-parent="#accordionEx1">
                                            <div class="card-body">
                                                Web Development:

                                                Full Time Course
                                                Duration: 30 Weeks
                                                Timing: Monday- Saturday, 9am- 9pm

                                                Part Time Course
                                                Duration: 30 Weeks
                                                Timing: Monday- Friday, 8pm- 11pm; Saturday, 10am-5pm

                                                Data Analytics

                                                Part Time Course
                                                Duration: 30 Weeks
                                                Timing: Tuesday - Saturday, 8pm- 11pm; Sunday, 10am-5pm
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingThree31">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree31"
                                                aria-expanded="false" aria-controls="collapseThree31">
                                                <h5 class="mb-0">
                                                    Will i receive a degree or certificate when i graduate from masai <i class="fas fa-angle-down rotate-icon"></i>
                                                </h5>
                                            </a>
                                        </div>
                                        <div id="collapseThree31" class="collapse" role="tabpanel" aria-labelledby="headingThree31"
                                            data-parent="#accordionEx1">
                                            <div class="card-body">
                                                We do issue a certificate of completion upon graduation. But, Masai
                                                is not a degree institution and we do not grant Bachelors or Masters Degrees.
                                                The core focus at Masai is on skill development and holistic learning.
                                                With that in mind, we have not tied up with any education institution for
                                                certification. We believe skills  degrees.
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Python