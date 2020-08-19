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
            this.props.onClick(e);
          }
     
  render()
  {
      return(

        <div>
        
        <input type="text"
        onChange={e => this.handleChange(e.target.value)} defaultValue={this.props.value}>
         </input>
        
        </div>
        
        );
  }
 }
 export default textBox;