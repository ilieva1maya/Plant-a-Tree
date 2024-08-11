export default function About(){
    return(
        <div className="container-fluid about pt-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="d-flex h-100">
                        <img className="img-fluid mt-0 mx-auto" src="img/team.jpeg"/>
                    </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                        <h6 className="text-primary text-uppercase">About Us</h6>
                        <h1 className="display-5">We Support You for Better Living</h1>
                    </div>
                    <p className="mb-4">Trees contribute to their environment over long periods of time by providing oxygen, improving air quality, climate amelioration, conserving water, preserving soil, and supporting wildlife. </p>                   
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-6">
                            <i className="fa fa-seedling display-1 text-secondary"></i>
                            <h4>Fresh Air</h4>
                            <p className="mb-0">Trees absorb odors and pollutant gases and filter particulates out of the air by trapping them on their leaves and bark.</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-water display-1 text-secondary"></i>
                            <h4>Save Water</h4>
                            <p className="mb-0">Most newly planted trees need only fifteen gallons of water a week. As trees transpire, they increase atmospheric moisture.</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-cloud-sun display-1 text-secondary"></i>
                            <h4>Combat Climate change</h4>
                            <p className="mb-0">In one year, an acre of mature trees absorbs the same amount of CO2 produced when you drive your car 26,000 miles.</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-child display-1 text-secondary"></i>
                            <h4>Shield Children</h4>
                            <p className="mb-0">Trees reduce UV-B exposure by about 50 percent, thus providing protection to children on playgrounds.</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}