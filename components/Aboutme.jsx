
export default function AboutMe(){
    return(
        <div>
            <div>
                
                <section>
                    <div className="mt-5 mb-3">
                        <h1 className="text-center text-white flex justify-center text-2xl ">I am currently a Computer Science student doing my final year</h1>
                    </div>
                </section>

            </div>
            <div className="flex justify-center mt-10">
                <div className="card text-bg-info mb-5" style={{width: "40rem",maxwidth: "40rem"}}>
                    <div className="card-header text-center">About me</div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Info card title</h5>
                        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
      </div>
    )
}