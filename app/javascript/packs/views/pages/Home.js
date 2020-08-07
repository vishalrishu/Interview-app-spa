// --------------------------------
//  Define Data Sources
// --------------------------------

let Home = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> Interview Lists </h1>
                
                <div class="text-center">
                    <a onclick = "window.location.href= '/#/interviews/new'">
                    Create new Interview
                    </a>
                </div>
                <div class="text-center">
                    <a onclick = "window.location.href= '/#/participants/new'">
                    Create new Participant
                    </a>
                </div>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;