import React from 'react'
import Smalltips from './pages/Smalltips'
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CampaignIcon from "@mui/icons-material/Campaign";

const tipsAboutUs = [
    {
      title: "free shipping",
      description: "On all order over $2000",
      icon: <LocalShippingIcon />,
      class: "tipsBox"
    },
    {
      title: "free return",
      description: "On 1st exchange in 30 days",
      icon: <CampaignIcon />,
      class: "tipsBox active"
    },
    {
      title: "member discount",
      description: "Register & save up to $2.9%",
      icon: <CardGiftcardIcon />,
      class: "tipsBox"
    },
    {
      title: "premium support",
      description: "support 24 hours per day",
      icon: <AttachMoneyIcon />,
      class: "tipsBox"
    }
  ];
  
  let mapSmallTips = (tip) =>{
    return (
      <Smalltips 
      title={tip.title}
      description={tip.description}
      icon={tip.icon}
      class={tip.class}
      />
    )
  }

function Tipscontainer() {
  return (
    <div className='tipsboxContainer'>
        {tipsAboutUs.map(mapSmallTips)}
    </div>
  )
}

export default Tipscontainer