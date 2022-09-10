import { useRouterHistory } from 'react-router'
// import createHashHistory from 'history/lib/createHashHistory'
import {createHashHistory} from 'history'
// export default useRouterHistory(createHashHistory)()
const history = useRouterHistory(createHashHistory)({})
export default history
