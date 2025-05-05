import { Button, ToastIgnite, TooltipIgnite } from "@rignite-ui/react"
import { useState } from "react"



function App() {
  
  const [isToastOpen, setIsToastOpen] = useState(false)

  function handleOpenToast(){
    setIsToastOpen(true)
  }

  return (
    <>
    <div style={{width: '100vw', height: '100vh' , display: 'flex', alignItems:'center', justifyContent: 'center', gap: '12px'}}>

    <TooltipIgnite content="tooltip example">
      <Button>Open tooltip</Button>
    </TooltipIgnite>
  

    
    
    <ToastIgnite open={isToastOpen} onOpenChange={setIsToastOpen} title="teste" description="teste"/>
    <button onClick={handleOpenToast}>Open Toast</button>
    

    </div> 
    </>
  )
}

export default App
