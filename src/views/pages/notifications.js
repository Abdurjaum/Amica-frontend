import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class NotificationView {
  init(){
    document.title = 'Notifications'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Notifications" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
      <section class="section-50">
      <div class="container">
          <h3 class="m-b-50 heading-line">Notifications &nbsp &nbsp<i class="fa fa-bell text-muted"></i></h3>
  
          <div class="notification-ui_dd-content">
              <div class="notification-list notification-list--unread">
                  <div class="notification-list_content">
                      <div class="notification-list_img">
                          <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user">
                      </div>
                      <div class="notification-list_detail">
                          <p><b>Fabrice</b> replied to your message</p>
                          <p class="text-muted">Hello ${Auth.currentUser.username}, how are you doing?</p>
                          <p class="text-muted"><small>10 mins ago</small></p>
                      </div>
                  </div>
              </div>
              <div class="notification-list notification-list--unread">
                  <div class="notification-list_content">
                      <div class="notification-list_img">
                          <img src="https://i.imgur.com/w4Mp4ny.jpg" alt="user">
                      </div>
                      <div class="notification-list_detail">
                          <p><b>Richard </b> messaged you</p>
                          <p class="text-muted">Hey ${Auth.currentUser.username} I already sent you the answers</p>
                          <p class="text-muted"><small>40 mins ago</small></p>
                      </div>
                  </div>
              </div>
              <div class="notification-list">
                  <div class="notification-list_content">
                      <div class="notification-list_img">
                          <img src="https://i.imgur.com/CtAQDCP.jpg" alt="user">
                      </div>
                      <div class="notification-list_detail">
                          <p><b>Lance </b> replied to your message</p>
                          <p class="text-muted">I will find some day to catchup with you ${Auth.currentUser.username}</p>
                          <p class="text-muted"><small>1 hour ago</small></p>
                      </div>
                  </div>
              </div>
              <div class="notification-list">
                  <div class="notification-list_content">
                      <div class="notification-list_img">
                          <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user">
                      </div>
                      <div class="notification-list_detail">
                          <p><b>Michael </b>sent you a message</p>
                          <p class="text-muted">Hello ${Auth.currentUser.username}, how are you doing?</p>
                          <p class="text-muted"><small>2 days ago</small></p>
                      </div>
                  </div>
              </div>
          </div>
  
      </div>
  </section>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new NotificationView()