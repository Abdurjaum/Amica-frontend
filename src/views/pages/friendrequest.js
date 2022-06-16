import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import FriendrequestAPI from '../../FriendrequestAPI'
import Toast from '../../Toast'

class FriendrequestView {
  async init(){
    document.title = 'Friendrequest'
    this.friendrequests = null   
    this.render()  
    Utils.pageIntroAnim() 
    await this.getFriendrequest()
  }

  async getFriendrequest(){
    try{
      this.friendrequests = await FriendrequestAPI.getFriendrequest()
      console.log(this.friendrequests)
    }catch(err){
      Toast.show(err, 'error')
    }
    this.render()
  }

    render(){
      const template = html`
      <va-app-header title="Friend Request" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
        <div class="page-content">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <div class="p-2"></div>
        <h2 class="h2 text-center">Friend Request</h2>

        <div class="p-2"></div>
        <h4 class="h4 text-center">Test</h4>
        <div class="p-1"></div>

          <div class="container testimonial-group">
            <div class="row text-center">
            
            <div class="col-4">
                <div class="card p-0">
                    <div class="card-image">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="">
                    </div>
                    <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">Sebastian Mike</h4>
                        <h5>22 Years</h5>
        
                        <ul class="social-icons d-flex justify-content-center">
                            <li style="--i:3">
                                <a href="#">
                                    <i class='fa fa-user-plus'></i>
                                </a>
                                <a href="#">
                                    <i class="fa-solid fa-user-minus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card p-0">
                    <div class="card-image">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="">
                    </div>
                    <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">Sebastian Mike</h4>
                        <h5>22 Years</h5>
        
                        <ul class="social-icons d-flex justify-content-center">
                            <li style="--i:3">
                                <a href="#">
                                    <i class='fa fa-user-plus'></i>
                                </a>
                                <a href="#">
                                    <i class="fa-solid fa-user-minus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card p-0">
                    <div class="card-image">
                        <img src="https://i.pinimg.com/1200x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"
                            alt="">
                    </div>
                    <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">Laeticia Claire</h4>
                        <h5>27 Years</h5>
        
                        <ul class="social-icons d-flex justify-content-center">
                            <li style="--i:3">
                                <a href="#">
                                    <i class='fa fa-user-plus'></i>
                                </a>
                                <a href="#">
                                    <i class="fa-solid fa-user-minus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card p-0">
                    <div class="card-image">
                        <img src="https://i.pinimg.com/1200x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"
                            alt="">
                    </div>
                    <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">Laeticia Claire</h4>
                        <h5>27 Years</h5>
        
                        <ul class="social-icons d-flex justify-content-center">
                            <li style="--i:3">
                                <a href="#">
                                    <i class='fa fa-user-plus'></i>
                                </a>
                                <a href="#">
                                    <i class="fa-solid fa-user-minus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card p-0">
                    <div class="card-image">
                        <img src="https://i.pinimg.com/1200x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"
                            alt="">
                    </div>
                    <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">Laeticia Claire</h4>
                        <h5>27 Years</h5>
        
                        <ul class="social-icons d-flex justify-content-center">
                            <li style="--i:3">
                                <a href="#">
                                    <i class='fa fa-user-plus'></i>
                                </a>
                                <a href="#">
                                    <i class="fa-solid fa-user-minus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card p-0">
                    <div class="card-image">
                        <img src="https://i.pinimg.com/1200x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"
                            alt="">
                    </div>
                    <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">Laeticia Claire</h4>
                        <h5>27 Years</h5>
        
                        <ul class="social-icons d-flex justify-content-center">
                            <li style="--i:3">
                                <a href="#">
                                    <i class='fa fa-user-plus'></i>
                                </a>
                                <a href="#">
                                    <i class="fa-solid fa-user-minus"></i>
                                </a>
                            </li>
                        </ul>
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


export default new FriendrequestView()