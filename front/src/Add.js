import React, { Component } from 'react';
import axios from 'axios'

import {message,Input,Button} from 'antd'

import { UserOutlined,PhoneOutlined,GooglePlusOutlined} from '@ant-design/icons';

 
class Add extends Component {

    constructor(props){
        super(props);
        this.state={
            id:'',
            first:'',
            last:'',
            email:'',
            phone:'',
        }

    }

    handlefirst = (e) =>{
        this.setState({
            first: e.target.value
        })
    }

    handlelast = (e) =>{
        this.setState({
            last: e.target.value
        })
    }

    handleemail = (e) =>{

        let value = e.target.value;
        if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            console.log('Enter write Email');
            message.error('wrong sytnax for email')
        }
        else{
            this.setState({
                email: e.target.value
            })
        }
        
    }

    handlephone = (e) =>{
        this.setState({
            phone: e.target.value
        })
    }

    add = () =>{
        let id=this.state.last.substr(0,1)
        let first=this.state.first
        let last=this.state.last
        let email=this.state.email
        let phone=this.state.phone

        let contact={
            'id':id,
            'first':first,
            'last':last,
            'email':email,
            'phone':phone
        }

        if (!first || !last || !email || !phone){
            message.error('plz fill all areas')
        }
        else{
            axios({
                method:'post',
                url:'http://localhost:4000/add',
                data:contact
            }).then(
                res=>{
                    if(res.data === 'success'){
                        message.success('add successfully')
                        this.props.history.push('/')
                    }
                    else if (res.data==='conflict'){
                        message.error('Conflict')
                    }
                }
                
            )
        }
    }


    render() { 
        return (
            <div>
                <Input size="middle" placeholder="First Name (Require)" prefix={<UserOutlined/>} value={this.state.first} onChange={this.handlefirst}/>
                <Input size="middle" placeholder="Last Name (Require)"  value={this.state.last} onChange={this.handlelast}/>
                <Input size="middle" placeholder="Email (Require)" prefix={<GooglePlusOutlined/>} value={this.state.email} onChange={this.handleemail}/>
                <Input size="middle" placeholder="Phone (Require)" prefix={<PhoneOutlined/>} value={this.state.phone} onChange={this.handlephone}/>

                <Button type="primary" onClick={this.add}>Upload</Button>

            </div>
        );
    }
}
 
export default Add;