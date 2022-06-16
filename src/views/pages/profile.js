import App from './../../App.js'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router.js'
import Auth from './../../Auth.js'
import Utils from './../../Utils.js'
import moment from 'moment'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">             


      <div class="container">
    <div class="main-body">
    
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          <!-- /Breadcrumb -->
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="profile-card">
                <div class="profile-card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                  ${Auth.currentUser && Auth.currentUser.avatar ? html`
                  <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                `:html`
                <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
                `}
                    
                    <div class="mt-3">
                      <h4>${Auth.currentUser.firstName} ${Auth.currentUser.lastName}</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Ebene, Mauritius</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="profile-card mb-3">
                <div class="profile-card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    ${Auth.currentUser.firstName} ${Auth.currentUser.lastName}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      ${Auth.currentUser.email}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (230) 5252 6525
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Au bout du monde, Ebene
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-12">
                      <sl-button @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-8" style="margin-left:-1em">
              <div class="profile-card mb-3">
                <div class="profile-card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h5 class="mb-0">Interests</h5>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                        <div class="bg-info rounded-pill" style="width: 100px; color:white; height: 25px;">Football</div>
                        </div>
                        <div class="col">
                        <div class="bg-info rounded-pill" style="width: 100px; color:white; height: 25px;">Basketball</div>
                        </div>
                        <div class="col">
                        <div class="bg-info rounded-pill" style="width: 100px; color:white; height: 25px;">Hiking</div>
                        </div>
                      </div>
                      <div class="p-3"></div>
                      <div class="row">
                        <div class="col">
                        <div class="bg-info rounded-pill" style="width: 100px; color:white; height: 25px;">Swimming</div>
                        </div>
                        <div class="col">
                        <div class="bg-info rounded-pill" style="width: 150px; color:white; height: 25px;">Weight-Lifting</div>
                        </div>
                        <div class="col">
                        <div class="bg-info rounded-pill" style="width: 100px; color:white; height: 25px;">Volleyball</div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>  
    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()