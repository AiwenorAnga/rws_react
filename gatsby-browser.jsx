//import provideStores from './provide-stores'

const React = require("react")
//const Layout = require("./src/components/layout")

//export const wrapRootElement = provideStores

const MainLayout = ({children, props }) => {
  return (
    <div id = "rws">
        {children}
    </div>
  )
}

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  //console.log("new pathname", location.pathname)
  //console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return <MainLayout {...props}>{element}</MainLayout>
}