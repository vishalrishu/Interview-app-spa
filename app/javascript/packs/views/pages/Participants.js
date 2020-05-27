let Participants = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> Participants </h1>
                
            </section>
            
            <div class="text-center">
                <a onclick = "window.location.href= '/#/'">
                Interview List
                </a>
            </div>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Participants;