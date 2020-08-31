import React from "react"
import Button from '@material-ui/core/Button';


function footer(){
    return(
      <div>
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons" color="primary">
              Link
            </Button>
        </div>
    )          
}
export default footer;
