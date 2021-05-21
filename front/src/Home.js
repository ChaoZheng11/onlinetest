import React, { Component} from 'react';

import {Button,List,Avatar,Affix, message,Input} from 'antd'

import axios from 'axios';

class Home extends Component {

    
  constructor(props){
    super(props)
    this.state={
        
        data:[],
        letter:[]
        
    }
}
     componentDidMount() {
       axios({
         method:'post',
         url: 'http://localhost:4000/'
       }).then(
         res=>{
           this.setState({
             data:res.data,
           })
         }
       )
       
     }

     clickit=()=>{
         this.props.history.push('/add')
     }

     clickUp = () =>{
         this.props.history.push({
             
            pathname:'/update',
            query:{
                'id':this.state.data.id,
                'first':this.state.data.first,
                'last':this.state.data.last,
                'email':this.state.data.email,
                'phone':this.state.data.phone
            }
        })
     }

     clickDelete =()=>{
        axios({
            method:'post',
            url: 'http://localhost:4000',
            data: this.state.data.phone
          }).then(
            res=>{
              if(res.data==="success"){
                  message.success('good')
              }
            }
          )
     }
    
    render() {

        var arr=[]

        var compare=[]

        for(var i=0;i<26;i++){
        
            arr.push(String.fromCharCode(65+i))

            
        }
        const { Search } = Input;
        const onSearch = value => console.log(value);


        
          
        return (
            <div>
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
                {/* {arr.map((number)=>
                    <div>
                        <List
                            
                            // header={<div>{number}</div>}
                            bordered
                            itemLayout="horizontal"
                            dataSource={this.state.data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={item.first }
                                        description={item.phone}
                                    />
                                </List.Item>
                            )}
                            />,
                    </div>
                )} */}
               
               <div>
                        <List
                            // header={<div>{number}</div>}
                            bordered
                            itemLayout="horizontal"
                            dataSource={this.state.data}
                            renderItem={item => (
                                <List.Item
                                    actions={[<Button onClick={this.clickDelete}>Delete</Button>,<Button onClick={this.clickUp}>Edit</Button>]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={item.first }
                                        description={item.phone}
                                    />
                                </List.Item>
                            )}
                        >
                        </List>

                            <Button type="primary" onClick={this.clickit}>Add</Button>
                    </div>

                
                   
              
            </div>
        );
    }
}

export default Home;