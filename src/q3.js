import React, {Component}  from "react"


 class textBox extends Component
 {
   
     
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
   
         handleChange(e) {
            console.log("sds")
        //this.setState({value:this.props.value});
            this.props.onClick(e.target);
          }
    // componentDidMount()
    // {
    //     this.setState ({
    //         value: this.props.value
    //     })
    // }
     
     
  render()
  {
      return(

        <div>
        
        <input type="text"
        onChange={this.handleChange(this.props.value)} defaultValue={this.props.value}>
         </input>
        
        </div>
        
        );
  }
 }
 export default textBox;