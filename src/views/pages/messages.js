import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import MessageAPI from '../../MessageAPI'
import Toast from '../../Toast'

class MessageView {
  async init(){
    document.title = 'Messages'
    this.messages = []
    this.allMessages = null
    this.render()    
    Utils.pageIntroAnim()
    await this.getMessages()
    await this.getUserMessages()
  }

  async getUserMessages()
  {
    var username = Auth.currentUser.username;
    this.allMessages.forEach(element => {
      if (element.receiver === username)
      {
        this.messages.push(element)
      }
    });
  }

  async getMessages(){
    try{
      this.allMessages = await MessageAPI.getMessages()
    }catch(err){
      Toast.show(err, 'error')
    }
    this.render()
  }

  render(){
    const template = html`
    <va-app-header title="Messages" user="${Auth.currentUser.username}"></va-app-header>
    <div class="page-content">         
    <div class = "container">
    <h3 class = "text-center">Conversation</h3>
    <div class = "messaging">
        <!-- Recent chats section -->
        <div class = "inbox_msg">
            <div class = "inbox_people">
                <div class = "headind_srch">
                    <div class = "recent_heading">
                        <h4>Recent</h4>
                    </div>
                </div>
                <div class = "inbox_chat">
                    <div class = "chat_list active_chat">
                        <div class = "chat_people">
                            <div class = "chat_img"><img src = "https://ptetutorials.com/images/user-profile.png"
                                    ></div>
                            <div class = "chat_ib">
                                <h5>Mike Johnson <span class = "chat_date">12 June</span></h5>
                                <p>This is a test message. Hello ${new Date().toLocaleDateString('en-us', {  year:"numeric", month:"long", day:"numeric"}) }</p>
                            </div>
                        </div>
                    </div>
                    <div class = "chat_list">
                        <div class = "chat_people">
                            <div class = "chat_img"> <img src = "https://ptetutorials.com/images/user-profile.png"
                                    > </div>
                            <div class = "chat_ib">
                                <h5>Claude Paul <span class = "chat_date">11 June</span></h5>
                                <p>Hello ${Auth.currentUser.username}, how are you doing?</p>
                            </div>
                        </div>
                    </div>
                    <div class = "chat_list">
                        <div class = "chat_people">
                            <div class = "chat_img"> <img src = "https://ptetutorials.com/images/user-profile.png"
                                    > </div>
                            <div class = "chat_ib">
                                <h5>Fabrice John<span class = "chat_date">Feb 28</span></h5>
                                <p>Hey ${Auth.currentUser.username}, call me when you are free</p>
                            </div>
                        </div>
                    </div>
                    <div class = "chat_list">
                        <div class = "chat_people">
                            <div class = "chat_img"> <img src = "https://ptetutorials.com/images/user-profile.png"
                                    > </div>
                            <div class = "chat_ib">
                                <h5>Sunil Raj <span class = "chat_date">Jan 14</span></h5>
                                <p>Hello, please contact me asap. Thanks ${Auth.currentUser.username}.</p>
                            </div>
                        </div>
                    </div>
                    <div class = "chat_list">
                        <div class = "chat_people">
                            <div class = "chat_img"> <img src = "https://ptetutorials.com/images/user-profile.png"
                                    > </div>
                            <div class = "chat_ib">
                                <h5>Abdur Jaum <span class = "chat_date">Dec 25</span></h5>
                                <p>Hi bro ${Auth.currentUser.username}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Messages section -->
            <div class = "mesgs">
                <div class = "msg_history">
                    <div class = "incoming_msg">
                        <div class = "incoming_msg_img"> <img src = "https://ptetutorials.com/images/user-profile.png"
                                > </div>
                        <div class = "received_msg">
                            <div class = "received_withd_msg">
                                <p>Hey ${Auth.currentUser.username}</p>
                                <span class = "time_date"> 23:50 | June 9</span>
                            </div>
                        </div>
                    </div>
                    <div class = "outgoing_msg">
                        <div class = "sent_msg">
                            <p>Hello how are you?</p>
                            <span class = "time_date"> 23:51 | June 9</span>
                        </div>
                    </div>
                    <div class = "incoming_msg">
                        <div class = "incoming_msg_img"> <img src = "https://ptetutorials.com/images/user-profile.png"
                                > </div>
                        <div class = "received_msg">
                            <div class = "received_withd_msg">
                                <p>I'm good and u</p>
                                <span class = "time_date"> 23:52 | Yesterday</span>
                            </div>
                        </div>
                    </div>
                    <div class = "outgoing_msg">
                        <div class = "sent_msg">
                            <p>Hello From Curtin Mauritius</p>
                            <span class = "time_date"> 10:59 | Today</span>
                        </div>
                    </div>
                    <div class = "incoming_msg">
                        <div class = "incoming_msg_img"> <img src = "https://ptetutorials.com/images/user-profile.png"
                                > </div>
                        <div class = "received_msg">
                            <div class = "received_withd_msg">
                                <p>This is a test message. Hello ${Auth.currentUser.username}</p>
                                <span class = "time_date"> 11:01 | Today</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "type_msg">
                    <div class = "input_msg_write">
                        <input type = "text" class = "write_msg" placeholder = "Type a message" />
                        <button class = "msg_send_btn" type = "button"><i class = "fa fa-paper-plane-o"
                                aria-hidden = "true"></i></button>
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


export default new MessageView()