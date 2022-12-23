import React, {useEffect, useState} from 'react';
import getProperties from 'fusion:properties';
import Identity from '@arc-publishing/sdk-identity';
import { useAppContext } from 'fusion:context';


const getApiOrigin = (arcSite) => {
    const { api } = getProperties(arcSite);
    console.log("********** arcSite", arcSite)
    console.log("********** api", api);
    return `${api.identity.origin}`;
}

const SdksContext = React.createContext();

 const SDKProvider = ({children}) => {
   const { arcSite } = useAppContext();
   const [value, setValue] = useState('');
   const apiOrigin = getApiOrigin(arcSite);
  
   const initializeSDKs = async () => {
     Identity.options({
       apiOrigin,
       baseDomain: "https://api.sandbox.pyxis.arcpublishing.com"
     })
   
     return {
       status: 'ready',
     }
   }
  
   useEffect(() => {
     initializeSDKs()
       .then((sdks) => {
         setValue(sdks)
       })
       .catch((error) => {
         setValue({
           status: SdkStatus.Error,
           error,
         })
       })
   }, [])
  
   return <SdksContext.Provider value={value}>{children}</SdksContext.Provider>
}

const handleGetProfile = () => {
    Identity.getUserProfile()
      .then((profile) => {
        window.localStorage.setItem('userInfo', JSON.stringify(profile));
      })
      .catch(() => {
        console.log('error')
      })
   }

export { getApiOrigin, SDKProvider, handleGetProfile };