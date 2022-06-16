import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import InterestAPI from '../../InterestAPI'

class HomeView {
  async init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()
    await this.getInterests()    
  }

  async getInterests(){
    try{
      this.interests = await InterestAPI.getInterests()
      console.log(this.interests)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Links
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <sl-button class="anim-in dropdown-item" @click=${() => gotoRoute('/profile')}>View Profile</sl-button>
          <p></p>
          <sl-button class="anim-in dropdown-item" @click=${() => gotoRoute('/discover')}>Discover</sl-button>
          <p></p>
          <sl-button class="anim-in dropdown-item" @click=${() => gotoRoute('/friendrequest')}>Friend Requests</sl-button>
          <p></p>
          <sl-button class="anim-in dropdown-item" @click=${() => gotoRoute('/interests')}>Interest Groups</sl-button>
        </div>
      </div>
      </va-app-header>
      
      <div class="page-content">
      <div class="p-3"></div>
      <div class="container">
          <div class="row">
              <div class="col">
                  <h2 class="h2 text-left ml-4">Friends You May Know</h2>
              </div>
              <div class="col">
                  <sl-button class="anim-inbtn text-right" @click=${() => gotoRoute('/discover')}>Discover Friends</sl-button>
              </div>
          </div>
      </div>
      <div class="p-3"></div>
      <div class="container">
          <div class="row">
              <div class="col">
                  <div class="card p-0">
                      <div class="card-image">
                          <img src="https://images.unsplash.com/photo-1605949405965-d49ada3f9189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                              alt="">
                      </div>
                      <div class="card-content d-flex flex-column align-items-center">
                          <h4 class="pt-2">Yann Ritz</h4>
                          <h5>Single, 24 Years</h5>
      
                          <ul class="social-icons d-flex justify-content-center">
                              <li style="--i:3">
                                  <a href="#">
                                      <i class='fa fa-user-plus'></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="col">
                  <div class="card p-0">
                      <div class="card-image">
                          <img src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                              alt="">
                      </div>
                      <div class="card-content d-flex flex-column align-items-center">
                          <h4 class="pt-2">Jane Smith</h4>
                          <h5>Engaged, 20 Years</h5>
      
                          <ul class="social-icons d-flex justify-content-center">
                              <li style="--i:3">
                                  <a href="#">
                                      <i class='fa fa-user-plus'></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="col">
              <div class="card p-0">
                  <div class="card-image">
                      <img src="https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                          alt="">
                  </div>
                  <div class="card-content d-flex flex-column align-items-center">
                      <h4 class="pt-2">John Park</h4>
                      <h5>Single, 21 Years</h5>
  
                      <ul class="social-icons d-flex justify-content-center">
                          <li style="--i:3">
                              <a href="#">
                                  <i class='fa fa-user-plus'></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
              <div class="col">
                  <div class="card p-0">
                      <div class="card-image">
                          <img src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                              alt="">
                      </div>
                      <div class="card-content d-flex flex-column align-items-center">
                          <h4 class="pt-2">Mary Jane</h4>
                          <h5>Single, 19 Years</h5>
      
                          <ul class="social-icons d-flex justify-content-center">
                              <li style="--i:3">
                                  <a href="#">
                                      <i class='fa fa-user-plus'></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <div class="p-5"></div>
  
      <div class="container">
          <div class="row">
              <div class="col">
                  <h2 class="h2 text-left ml-4">Interests You May like</h2>
              </div>
              <div class="col">
                  <sl-button class="anim-inbtn text-right" @click=${() => gotoRoute('/interests')}>Discover Interests</sl-button>
              </div>
          </div>
      </div>
  
      <div class="p-3"></div>
      <div class="home-interests-grid">
          ${this.interests == null ? html`
            <sl-card><sl-card>
          ` : html`
            ${this.interests.map(interest => html`
              <sl-card class="home-interest-card">
               <img src="${App.apiBase}/images/${interest.image}" alt="${interest.name}" slot="image" />
               <h4>${interest.name}</h4>
               <h5>${interest.member}</h5>
               <h5>${interest.description}</h5>
               <p>Group monitored by ${interest.user.firstName} ${interest.user.lastName}</p>
   
              </sl-card>
            `)}
         `}
      </div>
      </div>
     
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()