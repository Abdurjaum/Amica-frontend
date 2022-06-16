import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import GroupAPI from '../../GroupAPI'
import Toast from '../../Toast'

class GroupView {
  async init(){
    document.title = 'Groups'
    this.group = null    
    this.render()    
    Utils.pageIntroAnim()
    await this.getGroup()
  }

  async getGroup(){
    try{
      this.group = await GroupAPI.getGroup()
      console.log(this.group)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

    render(){
      const template = html`
        <va-app-header title="Interest Group" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
        <div class="page-content">         
        <main>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    
        <div class = "groups">
            <div class="createGroup">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Create Group
                </button>
    
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Create Group</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="col-sm-10">
                                    <input type="text" id="GroupName" class="form-control" placeholder="Group name">
                                </div>
                                <div class="p-2"></div>
                                <div class="col-sm-10">
                                    <input type="text" id="GroupInterest" class="form-control" placeholder="Group Interest">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        
        <div class="p-1"></div>

        <table class = "table table-striped">
            <thead>
                <tr>
                    <th>Group Name</th>
                    <th>Group Interest</th>
                    <th>Number of users</th>
                    <th>Created On</th>
                </tr>
            </thead>

            <tbody>
            ${this.group.map(group => {
              html`
              <td>${group.interest}}</td>
              <td>10</td>
              <td>
                  <button class="edit-button" data-toggle="modal" data-target="#exampleModal" data-backdrop="static" data-keyboard="false">
                      +
                  </button>

                  <button class="delete-button" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                      </svg>
                  </button>
              </td>
          </tr>`
            })}

            </tbody>
        </div>      
      `
    render(template, App.rootEl)
  }
}



export default new GroupView()