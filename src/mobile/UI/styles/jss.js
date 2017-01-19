import {create as createJss} from 'jss'
import {create as createInjectSheet} from 'react-jss'
import vendorPrefixer from 'jss-vendor-prefixer'
import extendPlugin from 'jss-extend'
import camelPlugin from 'jss-camel-case'
import globalPlugin from 'jss-global'
import composePlugin from 'jss-compose'
import unitDefaultPlugin from 'jss-default-unit'
import expandPlugin from 'jss-expand'
import nestedPlugin from 'jss-nested'

const jss = createJss()
jss.use(globalPlugin())
jss.use(extendPlugin())
jss.use(nestedPlugin())
jss.use(composePlugin())
jss.use(camelPlugin())
jss.use(unitDefaultPlugin())
jss.use(expandPlugin())
jss.use(vendorPrefixer())

export default createInjectSheet(jss)
