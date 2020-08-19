import React, {Component}  from "react"


 class textBox extends Component
 {
   
     
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    sendData = (p) => {
        console.log("sds")
        this.setState({value:this.props.value});
            this.props.onClick(p);
        }
    componentDidMount()
    {
        this.setState ({
            value: this.props.value
        })
    }
     
     
  render()
  {
      return(

        <div>
        
        <input type="text"
        onChange={this.sendData(this)} value={this.state.value}>
         </input>
        
        </div>
        
        );
  }
 }
 export default textBox;