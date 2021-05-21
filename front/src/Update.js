import React, { Component } from 'react';
import { UserOutlined,PhoneOutlined,GooglePlusOutlined} from '@ant-design/icons';
import {message,Input,Button} from 'antd'
 import axios from 'axios'


class Update extends Component {

    constructor(props){
        super(props);
        this.state={
            id:'',
            first:'',
            last:'',
            email:'',
            phone:'',
            data:[]
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
        this.setState({
            email: e.target.value
        })
    }

    handlephone = (e) =>{
        this.setState({
            phone: e.target.value
        })
    }


    update = () =>{
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
                url:'http://localhost:4000/update',
                data:contact
            }).then(
                res=>{
                    
                    if(res.data==='success'){
                        message.success('good')
                    }
                    
                }
                
            )
        }
    }

    render() { 
        let {location} = this.props.history;

        
        return (
            <div>
                {/* {location.query.id} */}
                <Input size="middle" prefix={<UserOutlined/>}></Input>

                <Input size="middle" >{location.query.id}</Input>

                <Input size="middle" prefix={<GooglePlusOutlined/>}>{location.query.id}</Input>

                <Input size="middle" prefix={<PhoneOutlined/>}>{location.query.id}</Input>
                

                <Button type="primary" onClick={this.update}>Update</Button>
            </div>
        );
    }
}
 
export default Update;