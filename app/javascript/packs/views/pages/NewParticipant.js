let NewParticipant = {
    render : async () => {
        let view =  /*html*/`
            <h1> Create New Participant</h1>
            <div class="container">
            <form id="interview_create">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input class="form-control" type="text" name="name" id="name">
                </div>
                <div class="form-group">
                    <label for="email">Email Id</label>
                    <input type="text" name="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" name="address" class="form-control" id="address">
                </div>
    
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
               
            </form>
                <div class="text-center">
                    <a onclick = "window.location.href= '/#/'">
                    Interview List
                    </a>
                    <a onclick = "window.location.href= '/#/participants'">
                    Participant List
                    </a>
                </div>
             
        </div>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default NewParticipant;